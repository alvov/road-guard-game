import { getFormattedCurrency } from '../utils';
import {
    I18N_CURRENCY
} from '../constants';

class Score {
    constructor({ game, x, y, score = 0, goal, }) {
        this.game = game;

        this.value = score;
        this.goal = goal;

        this.group = this.game.add.group();
        this.group.x = x;
        this.group.y = y;

        this.scoreText = this.game.add.text(
            0,
            0
        );
        this.scoreText.font = '"Press Start 2P", Arial';
        this.scoreText.fontSize = 16;
        this.scoreText.fill = '#ffffff';
        this.group.add(this.scoreText);

        this.updateValue(0);
        // todo score progress bar
    }

    update() {

    }

    updateValue(sum) {
        this.value += sum;
        this.scoreText.setText(
            getFormattedCurrency(this.value, this.game.rg.i18n.getTranslation(I18N_CURRENCY))
        );
        // todo score +- animation
    }
}

export default Score;
