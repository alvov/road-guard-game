import { SKY_COLORS } from '../constants';
import {
    interpolateColor
} from '../utils';

class Sky {
    constructor({ game, height, dayTime, }) {
        this.game = game;
        this.height = height;
        this.dayTime = dayTime;

        this.graphics = this.game.add.graphics();
        this.drawSky(this.dayTime);
    }

    update({ dayTime, }) {
        if (dayTime !== this.dayTime) {
            this.dayTime = dayTime;
            this.drawSky(this.dayTime);
        }
    }

    drawSky(dayTime = 1) {
        const color = Sky.getSkyColorByDayTime(dayTime);
        this.graphics.beginFill(color);
        this.graphics.drawRect(0, 0, this.game.width, this.height,);
        this.graphics.endFill();
    }

    static getSkyColorByDayTime(dayTime) {
        let startColor;
        let endColor;
        let colorStep;
        if (dayTime === 0) {
            return 0;
        }
        for (let i = 1; i < SKY_COLORS.length; i++) {
            const [color, period] = SKY_COLORS[i];
            if (dayTime > period) {
                startColor = SKY_COLORS[i - 1][0];
                endColor = color;
                colorStep = (dayTime - SKY_COLORS[i - 1][1]) / (period - SKY_COLORS[i - 1][1]);
                return interpolateColor(
                    startColor,
                    endColor,
                    colorStep,
                );
            }
        }
        return SKY_COLORS[0][0];
    }
}

export default Sky;
