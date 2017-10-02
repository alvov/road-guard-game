import { getFormattedTime } from '../utils';
import {
    COLOR_DARK_RED,
    UI_OFFSET,
} from '../constants';

const TIME_RUNNING_OUT = 10;

class LevelTimer {
    constructor({ game, x = game.width - UI_OFFSET, y = UI_OFFSET, duration, }) {
        this.game = game;
        this.duration = duration;

        this.timer = this.game.time.create();
        this.timer.loop(Phaser.Timer.SECOND, this.updateTimer, this);
        this.timer.start();

        this.secondsElapsed = 0;

        this.textTimer = this.game.add.text(
            x,
            y,
            '',
        );
        this.textTimer.font = '"Press Start 2P", Arial';
        this.textTimer.fontSize = 20;
        this.textTimer.fill = '#fff';
        this.textTimer.anchor.set(1, 0);
        this.textTimer.setShadow(2, 2, 'rgba(0, 0, 0, .8)', 0);
    }

    get isExpired() {
        return this.secondsElapsed >= this.duration;
    }

    updateTimer() {
        this.secondsElapsed++;
        const secondsLeft = this.duration - this.secondsElapsed;

        if (secondsLeft < TIME_RUNNING_OUT) {
            this.textTimer.fill = COLOR_DARK_RED;
        }

        this.textTimer.setText(getFormattedTime(secondsLeft));
    }

    kill() {
        this.timer.stop(true);
    }
}

export default LevelTimer;
