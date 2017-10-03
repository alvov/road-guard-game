import UIProgressBar from './UIProgressBar';
import { getFormattedCurrency } from '../utils';
import {
    I18N_CURRENCY,
    COLOR_HEX,
} from '../constants';

const UPDATE_TEXT_TWEEN_DURATION = 2000;

class Score {
    constructor({ game, x, y, score = 0, goal, }) {
        this.game = game;

        this.value = score;
        this.goal = goal;

        this.group = this.game.add.group();
        this.group.x = x;
        this.group.y = y;

        this.progressBar = new UIProgressBar({
            game: this.game,
            x: 0,
            y: 0,
            width: this.game.width / 3,
            height: 10,
            color: 0xffffff,
            radius: 5,
        });
        this.group.add(this.progressBar.graphics);

        this.scoreTextFontStyle = {
            font: '16px "Press Start 2P", Arial',
            fill: '#fff',
        };
        this.scoreText = this.game.add.text(
            0,
            this.progressBar.height * 2,
            '',
            this.scoreTextFontStyle
        );
        this.group.add(this.scoreText);

        this.updateText = this.game.add.text(
            0,
            this.scoreText.bottom,
            '',
            this.scoreTextFontStyle
        );
        this.group.add(this.updateText);

        this.updateTextTween = null;

        this.updateValue(0);
    }

    get reachedGoal() {
        return this.value >= this.goal;
    }

    update() {
        this.progressBar.update({ percent: this.value / this.goal });
    }

    updateValue(sum) {
        this.value += sum;

        this.scoreText.setText(
            getFormattedCurrency(this.value, this.game.rg.i18n.getTranslation(I18N_CURRENCY))
        );

        if (sum !== 0) {
            this.updateText.setText(
                (sum > 0 ? '+ ' : '- ') +
                getFormattedCurrency(Math.abs(sum), this.game.rg.i18n.getTranslation(I18N_CURRENCY))
            );
            this.updateText.fill = sum > 0 ? COLOR_HEX.YELLOW : COLOR_HEX.RED;
            this.updateText.alpha = 1;

            if (this.updateTextTween) {
                this.updateTextTween.stop();
            }
            this.updateTextTween = this.game.add.tween(this.updateText)
                .to({ alpha: 0 }, UPDATE_TEXT_TWEEN_DURATION);
            this.updateTextTween.start();
        }
    }
}

export default Score;
