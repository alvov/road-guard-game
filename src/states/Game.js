import Car from '../classes/Car';
import Road from '../classes/Road';
import GameInterface from '../classes/GameInterface';
import RadarMonitor from '../classes/RadarMonitor';
import {
    CAR_MODE_FINED,
    RADAR_MODE_COMPUTING,
    RADAR_MODE_FINE,
    RADAR_MODE_ALREADY_FINED,
    RADAR_MODE_EMPTY, UI_OFFSET, RADAR_MODE_ROGUE, RADAR_MODE_FINED,
} from '../constants';
import RoadSign from '../classes/RoadSign';
import Score from '../classes/Score';

class Game {
    init(level) {
        this.rg = {
            level,
            cars: {
                revive: false,
                count: (level.road.end - level.road.start) / level.speed.limit / level.cars.frequency
            },
            objects: {
                road: null,
                roadSign: null,
                interface: null,
                score: null,
                radar: null,
            },
            arrays: {
                cars: [],
            },
            groups: {
                cars: null,
                carsBehind: null,
            },
            timers: {
                reviveCar: null
            },
        };
    }

    create() {
        // background
        this.game.stage.backgroundColor = '#85c2ee';

        // cars behind the road
        this.rg.groups.carsBehind = this.game.add.group();

        // road
        this.rg.objects.road = new Road({
            game: this.game,
            ...this.rg.level.road,
        });

        this.rg.objects.roadSign = new RoadSign({
            game: this.game,
            ...this.rg.objects.road.getProjection({
                x: this.rg.objects.road.length / 2,
                y: -UI_OFFSET,
            }),
            speedLimit: this.rg.level.speed.limit,
        });

        // cars
        this.rg.timers.reviveCar = this.game.time.create(false);
        this.resetCarTimer();

        this.rg.groups.cars = this.game.add.group();
        this.createCars(this.rg.cars.count);

        // ui
        this.rg.objects.interface = new GameInterface({
            game: this.game
        });

        this.rg.objects.score = new Score({
            game: this.game,
            x: UI_OFFSET,
            y: UI_OFFSET,
            goal: this.rg.level.money.goal,
        });

        const radarHeight = 100;
        this.rg.objects.radar = new RadarMonitor({
            game: this.game,
            x: UI_OFFSET,
            y: this.game.height - radarHeight - UI_OFFSET,
            width: this.rg.objects.road.roadOffsetLeft - UI_OFFSET * 2,
            height: radarHeight,
            ...this.rg.level.radar,
            fines: this.rg.level.money.fines,
            speedLimit: this.rg.level.speed.limit,
            onFine: this.handleFine.bind(this)
        });

        // events
        this.game.input.onDown.add(this.handleTap, this);
    }

    update() {
        // update cars starting from the closest to the player
        for (let i = this.rg.groups.cars.length - 1; i >= 0; i--) {
            const carSprite = this.rg.groups.cars.getChildAt(i);
            if (!carSprite.alive) {
                continue;
            }

            this.updateCar(this.rg.groups.cars.getChildAt(i));

            if (carSprite.rg.position.x > this.rg.level.road.end) {
                carSprite.rg.kill();
            }
        }

        for (let i = this.rg.groups.carsBehind.length - 1; i >= 0; i--) {
            const carSprite = this.rg.groups.carsBehind.getChildAt(i);
            if (!carSprite.alive) {
                continue;
            }
            this.updateCar(this.rg.groups.carsBehind.getChildAt(i));

            if (carSprite.rg.position.x > 0) {
                this.rg.groups.cars.add(carSprite);
            }
        }

        this.rg.groups.carsBehind.customSort(this.sortCars, this);
        this.rg.groups.cars.customSort(this.sortCars, this);

        if (this.rg.cars.revive) {
            this.rg.cars.revive = !this.reviveCar();
        }

        // update radar
        this.rg.objects.radar.update();
    }

    updateCar(carSprite) {
        const car = carSprite.rg;
        const bestRoadLane = this.getClearestRoadLaneByCar(car);
        if (bestRoadLane !== car.roadLane) {
            car.moveToY(
                this.rg.objects.road.getLaneCenter(bestRoadLane),
                bestRoadLane
            );
        }

        car.preUpdate();

        car.update(this.rg.objects.road.getProjection(car.position));
    }

    render() {
        // this.game.debug.text(this.game.time.fps, 2, 14, "#00ff00");
        // this.game.debug.cameraInfo(this.game.camera, 32, 32);
        // this.game.debug.body(this.mz.objects.player.sprite);
        // this.game.debug.spriteBounds(this.rg.objects.radar.mainText);
        // this.game.debug.bodyInfo(this.mz.objects.player.sprite, 0, 100);
    }

    handleTap(pointer) {
        let handled;
        if (pointer.targetObject) {
            if (pointer.targetObject.sprite.name.startsWith('car')) {
                this.handleClickCar(pointer.targetObject.sprite.rg);
                handled = true;
            } else if (pointer.targetObject.sprite.name === 'radar') {
                if (this.rg.objects.radar.mode === RADAR_MODE_FINE) {
                    this.handleFine();
                    handled = true
                }
            }
        }
        if (!handled) {
            this.handleClickField();
        }
    }

    handleClickField() {
        this.rg.objects.radar.setMode(RADAR_MODE_EMPTY);
    }

    handleClickCar(car) {
        if (car.mode === CAR_MODE_FINED) {
            this.rg.objects.radar.setMode(car.isRogue ? RADAR_MODE_ROGUE : RADAR_MODE_ALREADY_FINED);
        } else {
            this.rg.objects.radar.setMode(RADAR_MODE_COMPUTING, { car });
        }
    }

    handleKillCar(car) {
        if (car === this.rg.objects.radar.currentCar) {
            this.rg.objects.radar.setMode(RADAR_MODE_EMPTY);
        }
    }

    handleFine() {
        const car = this.rg.objects.radar.currentCar;
        car.setMode(CAR_MODE_FINED);
        if (car.isRogue) {
            this.rg.objects.score.updateValue(-this.rg.objects.radar.currentFine);
            this.rg.objects.radar.setMode(RADAR_MODE_ROGUE);
        } else {
            this.rg.objects.score.updateValue(this.rg.objects.radar.currentFine);
            this.rg.objects.radar.setMode(RADAR_MODE_FINED);
        }
    }

    resetCarTimer() {
        this.rg.cars.revive = true;
        this.rg.timers.reviveCar.stop(true);
        this.rg.timers.reviveCar.add(
            this.rg.level.cars.frequency * 1000 + this.game.rnd.integerInRange(-1000, 1000),
            this.resetCarTimer,
            this
        );
        this.rg.timers.reviveCar.start();
    }

    createCars(count) {
        // count = 2;
        for (let i = 0; i < count; i++) {
            const car = new Car({
                game: this.game,
                name: `car${i}`,
                rogueSeries: this.rg.level.cars.series,
                onKill: this.handleKillCar.bind(this),
            });
            this.rg.arrays.cars.push(car);
        }
    }

    reviveCar() {
        const deadCar = this.rg.arrays.cars.find(car => !car.sprite.alive);
        if (deadCar) {
            const roadLane = this.game.rnd.integerInRange(0, this.rg.objects.road.lanes - 1);
            const isRogue = this.game.rnd.frac() < this.rg.level.cars.rogue;
            const speed = this.getRandomCarSpeed(isRogue);
            deadCar.revive({
                x: this.rg.level.road.start,
                y: this.rg.objects.road.getLaneCenter(roadLane),
                roadLane,
                speed,
                isRogue,
            });
            this.rg.groups.carsBehind.addAt(deadCar.sprite, 0);
            return true;
        }

        return false;
    }

    getClearestRoadLaneByCar(currentCar) {
        const lanesClearness = {
            [currentCar.roadLane]: Infinity,
        };
        let availableLanesCount = 1;
        if (
            currentCar.roadLane < this.rg.objects.road.lanes - 1 &&
            currentCar.position.y >= currentCar.moveTargetY
        ) {
            lanesClearness[currentCar.roadLane + 1] = Infinity;
            availableLanesCount++;
        }
        if (
            currentCar.roadLane > 0 &&
            currentCar.position.y <= currentCar.moveTargetY
        ) {
            lanesClearness[currentCar.roadLane - 1] = Infinity;
            availableLanesCount++;
        }
        let lanesFoundCount = 0;
        if (currentCar.position.x < 0) {
            for (let i = currentCar.sprite.z + 1; i < this.rg.groups.carsBehind.length; i++) {
                const carSprite = this.rg.groups.carsBehind.getChildAt(i);
                const car = carSprite.rg;
                if (
                    !carSprite.alive ||
                    currentCar.velocity.x < car.velocity.x ||
                    Math.abs(car.position.y - currentCar.position.y) > 1
                ) {
                    continue;
                }
                if (lanesClearness[car.roadLane] === Infinity) {
                    lanesClearness[car.roadLane] = car.position.x - currentCar.position.x;
                    lanesFoundCount++;
                    if (lanesFoundCount === availableLanesCount) {
                        return this.getClearestRoadLaneByObj(lanesClearness, currentCar.roadLane);
                    }
                }
            }
        }
        for (
            let i = currentCar.position.x < 0 ?
                0 :
                currentCar.sprite.z + 1;
            i < this.rg.groups.cars.length;
            i++
        ) {
            const carSprite = this.rg.groups.cars.getChildAt(i);
            const car = carSprite.rg;
            if (
                !carSprite.alive ||
                currentCar.velocity.x < car.velocity.x ||
                Math.abs(car.roadLane - currentCar.roadLane) > 1
            ) {
                continue;
            }
            if (lanesClearness[car.roadLane] === Infinity) {
                lanesClearness[car.roadLane] = car.position.x - currentCar.position.x;
                lanesFoundCount++;
                if (lanesFoundCount === availableLanesCount) {
                    return this.getClearestRoadLaneByObj(lanesClearness, currentCar.roadLane);
                }
            }
        }

        return this.getClearestRoadLaneByObj(lanesClearness, currentCar.roadLane);
    }

    getClearestRoadLaneByObj(obj, currentRoadLane) {
        let maxValue = -Infinity;
        let resultIndexes = [];
        currentRoadLane = String(currentRoadLane);
        let hasCurrentRoadLane = false;
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                if (obj[key] === maxValue) {
                    resultIndexes.push(key);
                    if (key === currentRoadLane) {
                        hasCurrentRoadLane = true;
                    }
                } else if (obj[key] > maxValue) {
                    maxValue = obj[key];
                    resultIndexes = [key];
                    hasCurrentRoadLane = key === currentRoadLane;
                }
            }
        }
        if (hasCurrentRoadLane) {
            return Number(currentRoadLane);
        }
        if (resultIndexes.length === 1) {
            return Number(resultIndexes[0]);
        }
        return Number(this.game.rnd.pick(resultIndexes));
    }

    getRandomCarSpeed(isRogue) {
        if (isRogue) {
            let minDisallowedSpeed = this.rg.level.money.fines[1][0];
            let maxDisallowedSpeed = this.rg.level.money.fines[this.rg.level.money.fines.length - 1][0];
            return this.game.rnd.integerInRange(minDisallowedSpeed, maxDisallowedSpeed - 1);
        } else {
            const randomNumber = this.game.rnd.integerInRange(1, 100);
            let cummulativeProbability = 0;
            for (let i = 0; i < this.rg.level.money.fines.length; i++) {
                const [speedExcess, fine, probability] = this.rg.level.money.fines[i];
                cummulativeProbability += probability;
                if (randomNumber <= cummulativeProbability) {
                    const prevSpeedExcess = (this.rg.level.money.fines[i - 1] || [0])[0];
                    return this.rg.level.speed.limit + this.game.rnd.integerInRange(prevSpeedExcess, speedExcess - 1);
                }
            }
            return this.rg.level.speed.limit;
        }
    }

    sortCars(car1, car2) {
        return car1.rg.position.x - car2.rg.position.x;
    }
}

export default Game;
