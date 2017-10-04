import {I18N_UI_PAUSE} from '../../constants';

class PauseLevel {
    constructor({ game }) {
        this.game = game;

        this.graphics = this.game.add.graphics();
        this.graphics.name = I18N_UI_PAUSE;
        this.graphics.drawRect(0, 0, this.game.width, this.game.height);
        this.graphics.inputEnabled = true;

        this.text = this.game.add.text(
            this.game.width / 2,
            this.game.height / 2,
            this.game.rg.i18n.getTranslation(I18N_UI_PAUSE),
            {
                font: '28px "Press Start 2P", Arial',
                fill: '#fff',
            },
        );
        this.text.anchor.set(0.5);
        this.text.setShadow(4, 4, 'rgba(0, 0, 0, .8)', 0);
        this.graphics.addChild(this.text);

        // initially dead
        this.kill();
    }

    revive() {
        this.graphics.revive();
    }

    kill() {
        this.graphics.kill();
    }
}

export default PauseLevel;
