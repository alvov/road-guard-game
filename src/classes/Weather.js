import {
    COLOR,
    WEATHER_FOG,
    WEATHER_THUNDER,
} from '../constants';

const RAIN_FREQUENCY = 400;
const RAIN_TWEEN_DURATION = 300;
const RAIN_TILE_HEIGHT = 256;
const FLASH_TIMING = [
    [
        25500,
        400,
    ],
    [
        50000,
        500,
    ],
];

const FOG_FREQUENCY = 100;
const FOG_OPACITY = 0.3;

class Weather {
    constructor({ game, weather, road, bgGroup, onFlash, }) {
        this.game = game;
        this.weather = weather;
        this.road = road;

        this.onFlash = onFlash;
        this.isFlash = false;
        this.flashTimers = [];
        this.rainSky = null;

        this.curtains = [];

        if (this.weather === WEATHER_FOG) {
            let x = 0;
            while (x < this.road.length) {
                const curtain = this.createFogCurtain(x);
                this.curtains.push(curtain);
                x += FOG_FREQUENCY;
            }
        } else if (this.weather === WEATHER_THUNDER) {
            this.rainSky = this.game.add.graphics();
            this.drawRainSky();
            bgGroup.add(this.rainSky);

            let x = 0;
            while (x <= this.road.length) {
                x += RAIN_FREQUENCY;
                const curtain = this.createRainCurtain(x);
                this.curtains.push(curtain);
            }
        }
    }

    update() {
        if (
            this.isFlash &&
            this.flashTimers.every(([timer, period, duration]) =>
                timer.duration < period - duration
            )
        ) {
            this.isFlash = false;
            this.handleFlashEnd();
        }
    }

    handleFlashStart() {
        if (!this.isFlash) {
            this.drawRainSky(COLOR.FLORAL_WHITE);
        }
        this.isFlash = true;
        this.onFlash(true);
    }

    handleFlashEnd() {
        this.drawRainSky();
        this.onFlash(false);
    }

    createFogCurtain(x) {
        const curtain = this.game.add.graphics();
        // for sorting issues
        curtain.rg = {
            position: new Phaser.Point(x, 0),
        };

        curtain.beginFill(COLOR.STEEL, FOG_OPACITY);
        curtain.drawRect(
            0,
            0,
            this.game.width,
            this.road.getProjection({ x, y: 0 }).y,
        );
        curtain.endFill();

        return curtain;
    }

    createRainCurtain(x) {
        const projection = this.road.getProjection({ x, y: 0 });
        const curtain = this.game.add.tileSprite(
            0,
            -10,
            this.game.width,
            projection.y,
            'rain'
        );
        curtain.tileScale.set(projection.scale);
        this.game.add.tween(curtain.tilePosition)
            .to(
                {
                    y: RAIN_TILE_HEIGHT,
                },
                RAIN_TWEEN_DURATION * curtain.tileScale.y,
                null,
                true,
                0,
                -1,
            );
        curtain.rg = {
            // for sorting issues
            position: new Phaser.Point(x, 0),
        };
        return curtain;
    }

    drawRainSky(color = COLOR.STEEL) {
        this.rainSky.beginFill(color);
        this.rainSky.drawRect(0, 0, this.game.width, this.road.topLeft.y);
        this.rainSky.endFill();
    }

    startFlashTimers() {
        if (this.weather === WEATHER_THUNDER) {
            this.flashTimers = FLASH_TIMING.map(([period, duration]) => {
                const timer = this.game.time.create(false);
                timer.loop(period, this.handleFlashStart, this);
                timer.start();
                return [timer, period, duration];
            });
        }
    }
}

export default Weather;
