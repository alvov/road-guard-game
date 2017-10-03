import Car from '../classes/Car';
import Road from '../classes/Road';
import Radar from '../classes/Radar';
import RoadSign from '../classes/RoadSign';
import Score from '../classes/Score';
import LevelTimer from '../classes/LevelTimer';
import EndLevel from '../classes/screens/EndLevel';
import { getLevel, getNextLevelId } from '../utils';

import {
    UI_OFFSET,
    CAR_MODE_FINED,
    RADAR_MODE_COMPUTING,
    RADAR_MODE_FINE,
    RADAR_MODE_ALREADY_FINED,
    RADAR_MODE_EMPTY,
    RADAR_MODE_ROGUE,
    RADAR_MODE_FINED,
    END_GAME_TIME_OUT, END_GAME_WIN, I18N_UI_BUTTON_QUIT, STATE_MENU, I18N_UI_BUTTON_NEXT, STATE_GAME,
    I18N_UI_BUTTON_REPLAY, I18N_UI_BUTTON_FINE,
    COLOR_HEX,
} from '../constants';

class Game {
    init(level) {
        this.rg = {
            level,
            levelEnded: false,
            stats: {
                fines: {
                    count: 0,
                    sum: 0,
                },
                wrong: {
                    count: 0,
                    sum: 0,
                },
                missed: {
                    count: 0,
                    sum: 0,
                },
            },
            cars: {
                revive: false,
                count: (level.road.end - level.road.start) / level.speed.limit / level.cars.frequency
            },
            objects: {
                road: null,
                roadSign: null,
                interface: null,
                score: null,
                timer: null,
                radar: null,
            },
            screens: {
                endLevel: null,
            },
            arrays: {
                cars: [],
            },
            groups: {
                cars: null,
                carsBehind: null,
            },
            timers: {
                reviveCar: null,
            },
            input: {
                keys: {
                    space: null,
                },
            },
        };
    }

    create() {
        // background
        this.game.stage.backgroundColor = COLOR_HEX.SKY;

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
        this.rg.objects.score = new Score({
            game: this.game,
            x: UI_OFFSET,
            y: UI_OFFSET,
            goal: this.rg.level.money.goal,
        });

        this.rg.objects.timer = new LevelTimer({
            game: this.game,
            duration: this.rg.level.duration,
        });

        this.rg.objects.radar = new Radar({
            game: this.game,
            x: UI_OFFSET,
            y: this.game.height - UI_OFFSET,
            width: this.rg.objects.road.roadOffsetLeft - UI_OFFSET * 2,
            ...this.rg.level.radar,
            fines: this.rg.level.money.fines,
            speedLimit: this.rg.level.speed.limit,
            onFine: this.handleFine.bind(this)
        });

        // screens
        this.rg.screens.endLevel = new EndLevel({
            game: this.game,
        });

        // events
        this.game.input.onDown.add(this.handleTap, this);
        this.rg.input.keys.space = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
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

        // update score
        this.rg.objects.score.update();

        // check end game
        if (!this.rg.levelEnded) {
            this.checkLevelEnd();
        }

        // input
        if (this.rg.input.keys.space.justDown) {
            if (this.rg.objects.radar.mode === RADAR_MODE_FINE) {
                this.handleFine();
            }
        }
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
            if (!this.rg.levelEnded) {
                if (pointer.targetObject.sprite.name.startsWith('car')) {
                    this.handleClickCar(pointer.targetObject.sprite.rg);
                    handled = true;
                } else if (pointer.targetObject.sprite.name === I18N_UI_BUTTON_FINE) {
                    if (this.rg.objects.radar.mode === RADAR_MODE_FINE) {
                        this.handleFine();
                        handled = true
                    }
                }
            } else {
                if (pointer.targetObject.sprite.name === I18N_UI_BUTTON_QUIT) {
                    this.handleClickQuit();
                    handled = true;
                } else if (pointer.targetObject.sprite.name === I18N_UI_BUTTON_NEXT) {
                    this.handleClickNext();
                    handled = true;
                } else if (pointer.targetObject.sprite.name === I18N_UI_BUTTON_REPLAY) {
                    this.handleClickReplay();
                    handled = true;
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

    handleClickQuit() {
        this.state.start(STATE_MENU);
    }

    handleClickNext() {
        const nextLevel = getNextLevelId(this.rg.level.id);
        this.state.start(STATE_GAME, true, false, getLevel(nextLevel));
    }

    handleClickReplay() {
        this.state.start(STATE_GAME, true, false, getLevel(this.rg.level.id));
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
        if (!this.rg.levelEnded && car.mode !== CAR_MODE_FINED && !car.isRogue) {
            const fine = this.rg.objects.radar.getFine(car.velocity.x);
            if (fine !== 0) {
                this.rg.stats.missed.count++;
                this.rg.stats.missed.sum += fine;
            }
        }
    }

    handleFine() {
        const car = this.rg.objects.radar.currentCar;
        car.setMode(CAR_MODE_FINED);
        if (car.isRogue) {
            this.rg.stats.wrong.count++;
            this.rg.stats.wrong.sum -= this.rg.objects.radar.currentFine;
            this.rg.objects.score.updateValue(-this.rg.objects.radar.currentFine);
            this.rg.objects.radar.setMode(RADAR_MODE_ROGUE);
        } else {
            this.rg.stats.fines.count++;
            this.rg.stats.fines.sum += this.rg.objects.radar.currentFine;
            this.rg.objects.score.updateValue(this.rg.objects.radar.currentFine);
            this.rg.objects.radar.setMode(RADAR_MODE_FINED);
        }
    }

    checkLevelEnd() {
        if (this.rg.objects.timer.isExpired) {
            this.endLevel(END_GAME_TIME_OUT);
        } else if (this.rg.objects.score.reachedGoal) {
            this.endLevel(END_GAME_WIN);
        }
    }

    endLevel(mode) {
        this.rg.levelEnded = true;
        this.rg.objects.timer.kill();

        this.rg.screens.endLevel.show({
            mode,
            stats: {
                time: this.rg.objects.timer.secondsElapsed,
                ...this.rg.stats,
            },
            nextLevel: getNextLevelId(this.rg.level.id),
        });
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
