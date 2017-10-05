import Level from '../classes/Level';
import cars from '../classes/cars/cars';
import Road from '../classes/Road';
import Radar from '../classes/Radar';
import RoadSign from '../classes/RoadSign';
import Score from '../classes/Score';
import LevelTimer from '../classes/LevelTimer';
import StartLevel from '../classes/screens/StartLevel';
import EndLevel from '../classes/screens/EndLevel';
import PauseLevel from '../classes/screens/PauseLevel';
import Weather from '../classes/Weather';

import { getFine, } from '../utils';
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
    COLOR_HEX, I18N_UI_BUTTON_PLAY, RADAR_MODE_ERROR,
    FINES, I18N_UI_PAUSE,
} from '../constants';

class Game {
    init(level) {
        this.rg = {
            level,
            levelStarted: false,
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
                weather: null,
                score: null,
                timer: null,
                radar: null,
            },
            screens: {
                startLevel: null,
                endLevel: null,
            },
            arrays: {
                cars: [],
            },
            groups: {
                bg: null,
                behindRoad: null,
                onRoad: null,
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

        // background group
        this.rg.groups.bg = this.game.add.group();

        // cars behind the road
        this.rg.groups.behindRoad = this.game.add.group();

        // road
        this.rg.objects.road = new Road({
            game: this.game,
            ...this.rg.level.road,
        });

        this.rg.groups.onRoad = this.game.add.group();

        const roadSignX = this.rg.objects.road.length / 2;
        const roadSignY = -UI_OFFSET;
        this.rg.objects.roadSign = new RoadSign({
            game: this.game,
            position: {
                x: roadSignX,
                y: roadSignY,
            },
            ...this.rg.objects.road.getProjection({
                x: this.rg.objects.road.length / 2,
                y: -UI_OFFSET,
            }),
            speedLimit: this.rg.level.speed.limit,
        });

        this.rg.groups.onRoad.add(this.rg.objects.roadSign.group);

        if (this.rg.level.weather) {
            this.rg.objects.weather = new Weather({
                game: this.game,
                weather: this.rg.level.weather,
                road: this.rg.objects.road,
                bgGroup: this.rg.groups.bg,
                onFlash: this.handleFlash.bind(this),
            });

            this.rg.groups.onRoad.addMultiple(this.rg.objects.weather.curtains);
        }

        // cars
        this.rg.timers.reviveCar = this.game.time.create(false);

        this.createCars(this.rg.cars.count);

        // ui
        this.rg.objects.score = new Score({
            game: this.game,
            x: UI_OFFSET,
            y: UI_OFFSET,
            goal: this.rg.level.goal,
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
            speedLimit: this.rg.level.speed.limit,
        });

        // screens
        this.rg.screens.startLevel = new StartLevel({
            game: this.game,
            height: 270,
        });
        this.rg.screens.startLevel.show({
            levelNumber: Level.getLevelNumber(this.rg.level.id),
            goal: this.rg.level.goal,
            series: this.rg.level.cars.series,
        });

        this.rg.screens.endLevel = new EndLevel({
            game: this.game,
            height: 4 * this.game.height / 5,
        });

        this.rg.objects.pause = new PauseLevel({
            game: this.game,
        });

        // events
        this.game.onPause.add(this.handlePause, this);
        this.game.onResume.add(this.handlePause, this);
        this.game.input.onDown.add(this.handleTap, this);
        this.rg.input.keys.space = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    }

    update() {
        if (!this.rg.levelStarted) {
            return;
        }

        // update road objects starting from the closest to the player
        for (let i = this.rg.groups.onRoad.length - 1; i >= 0; i--) {
            const sprite = this.rg.groups.onRoad.getChildAt(i);
            if (!sprite.alive) {
                continue;
            }
            if (sprite.name.startsWith('car')) {
                this.updateCar(sprite.rg);

                if (sprite.rg.position.x > this.rg.level.road.end) {
                    sprite.rg.kill();
                }
            }
        }

        for (let i = this.rg.groups.behindRoad.length - 1; i >= 0; i--) {
            const carSprite = this.rg.groups.behindRoad.getChildAt(i);
            if (!carSprite.alive) {
                continue;
            }
            this.updateCar(carSprite.rg);

            if (carSprite.rg.position.x > 0) {
                this.rg.groups.onRoad.add(carSprite);
            }
        }

        this.rg.groups.behindRoad.customSort(this.sortRoadObjects, this);
        this.rg.groups.onRoad.customSort(this.sortRoadObjects, this);

        if (this.rg.cars.revive) {
            this.rg.cars.revive = !this.reviveCar();
        }

        // update weather
        if (this.rg.objects.weather) {
            this.rg.objects.weather.update();
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

    updateCar(car) {
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

    shutdown() {
        this.game.onPause.remove(this.handlePause, this);
        this.game.onResume.remove(this.handlePause, this);
        this.game.input.onDown.remove(this.handleTap, this);
        this.game.input.keyboard.removeKey(Phaser.Keyboard.SPACEBAR);
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
                } else if (pointer.targetObject.sprite.name === I18N_UI_BUTTON_PLAY) {
                    this.startLevel();
                    handled = true
                } else if (pointer.targetObject.sprite.name === I18N_UI_BUTTON_QUIT) {
                    this.handleClickQuit();
                } else if (pointer.targetObject.sprite.name === I18N_UI_PAUSE) {
                    this.handlePause();
                }
            } else {
                if (pointer.targetObject.sprite.name === I18N_UI_BUTTON_QUIT) {
                    this.handleClickQuit();
                } else if (pointer.targetObject.sprite.name === I18N_UI_BUTTON_NEXT) {
                    this.handleClickNext();
                } else if (pointer.targetObject.sprite.name === I18N_UI_BUTTON_REPLAY) {
                    this.handleClickReplay();
                }
            }
        }
        if (!handled) {
            this.handleClickField();
        }
    }

    handleClickField() {
        if (this.rg.objects.radar.mode !== RADAR_MODE_ERROR) {
            this.rg.objects.radar.setMode(RADAR_MODE_EMPTY);
        }
    }

    handleClickQuit() {
        this.state.start(STATE_MENU);
    }

    handleClickNext() {
        this.state.start(STATE_GAME, true, false, Level.getNextLevelById(this.rg.level.id));
    }

    handleClickReplay() {
        this.state.start(STATE_GAME, true, false, Level.getLevelById(this.rg.level.id));
    }

    handleClickCar(car) {
        if (this.rg.objects.radar.mode !== RADAR_MODE_ERROR) {
            if (car.mode === CAR_MODE_FINED) {
                this.rg.objects.radar.setMode(car.isRogue ? RADAR_MODE_ROGUE : RADAR_MODE_ALREADY_FINED);
            } else if (
                this.rg.objects.radar.mode !== RADAR_MODE_COMPUTING ||
                this.rg.objects.radar.currentCar !== car
            ) {
                this.rg.objects.radar.setMode(RADAR_MODE_COMPUTING, { car });
            }
        }
    }

    handleKillCar(car) {
        this.rg.groups.onRoad.removeChild(car.sprite);

        if (car === this.rg.objects.radar.currentCar) {
            this.rg.objects.radar.setMode(RADAR_MODE_EMPTY);
        }
        if (!this.rg.levelEnded && car.mode !== CAR_MODE_FINED && !car.isRogue) {
            const fine = getFine(car.velocity.x, this.rg.level.speed.limit);
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

    handleFlash(on) {
        if (on) {
            this.rg.objects.radar.setMode(RADAR_MODE_ERROR);
        } else {
            this.rg.objects.radar.setMode(RADAR_MODE_EMPTY);
        }
    }

    handlePause() {
        if (!this.rg.levelEnded) {
            if (this.game.paused) {
                this.rg.objects.pause.revive();
            } else {
                this.rg.objects.pause.kill();
            }
        }
    }

    checkLevelEnd() {
        if (this.rg.objects.timer.isExpired) {
            this.endLevel(END_GAME_TIME_OUT);
        } else if (this.rg.objects.score.reachedGoal) {
            this.endLevel(END_GAME_WIN);
        }
    }

    startLevel() {
        this.rg.levelStarted = true;

        this.rg.objects.timer.start();
        this.resetCarTimer();
        if (this.rg.objects.weather) {
            this.rg.objects.weather.startFlashTimers();
        }

        this.rg.screens.startLevel.hide();
    }

    endLevel(mode) {
        this.rg.levelEnded = true;
        this.rg.objects.timer.kill();

        const nextLevel = Level.getNextLevelById(this.rg.level.id);
        if (nextLevel) {
            this.game.rg.level.maxLevel = Level.getLevelNumber(nextLevel.id);
        }
        this.rg.screens.endLevel.show({
            mode,
            stats: {
                time: this.rg.objects.timer.secondsElapsed,
                ...this.rg.stats,
            },
            nextLevel: nextLevel ? nextLevel.id : null,
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
        for (let i = 0; i < count; i++) {
            const randomNumber = this.game.rnd.integerInRange(0, 100);
            let cummulativeProbability = 0;
            const [Ctr] = cars.find(([Ctr, probability]) => {
                cummulativeProbability += probability;
                return randomNumber <= cummulativeProbability;
            });
            const car = new Ctr({
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
            this.rg.groups.behindRoad.addAt(deadCar.sprite, 0);
            return true;
        }

        return false;
    }

    getClearestRoadLaneByCar(currentCar) {
        const lanesClearness = {
            [currentCar.roadLane]: Infinity,
        };
        const currentCarRoadLaneY = this.rg.objects.road.getLaneCenter(currentCar.roadLane);
        let availableLanesCount = 1;
        if (
            currentCar.roadLane < this.rg.objects.road.lanes - 1 &&
            currentCar.position.y >= currentCarRoadLaneY
        ) {
            lanesClearness[currentCar.roadLane + 1] = Infinity;
            availableLanesCount++;
        }
        if (
            currentCar.roadLane > 0 &&
            currentCar.position.y <= currentCarRoadLaneY
        ) {
            lanesClearness[currentCar.roadLane - 1] = Infinity;
            availableLanesCount++;
        }
        let lanesFoundCount = 0;
        if (currentCar.position.x < 0) {
            for (let i = currentCar.sprite.z + 1; i < this.rg.groups.behindRoad.length; i++) {
                const carSprite = this.rg.groups.behindRoad.getChildAt(i);
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
            i < this.rg.groups.onRoad.length;
            i++
        ) {
            const sprite = this.rg.groups.onRoad.getChildAt(i);
            if (
                !sprite.alive ||
                !sprite.name.startsWith('car')
            ) {
                continue;
            }

            const car = sprite.rg;
            if (
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
            let minDisallowedSpeed = this.rg.level.speed.limit + FINES[1][0];
            let maxDisallowedSpeed = this.rg.level.speed.limit + FINES[FINES.length - 1][0];
            return this.game.rnd.integerInRange(minDisallowedSpeed, maxDisallowedSpeed - 1);
        } else {
            const randomNumber = this.game.rnd.integerInRange(1, 100);
            let cummulativeProbability = 0;
            for (let i = 0; i < FINES.length; i++) {
                const [speedExcess, fine, probability] = FINES[i];
                cummulativeProbability += probability;
                if (randomNumber <= cummulativeProbability) {
                    const prevSpeedExcess = (FINES[i - 1] || [0])[0];
                    return this.rg.level.speed.limit + this.game.rnd.integerInRange(prevSpeedExcess, speedExcess - 1);
                }
            }
            return this.rg.level.speed.limit;
        }
    }

    sortRoadObjects(obj1, obj2) {
        return obj1.rg.position.x - obj2.rg.position.x;
    }
}

export default Game;
