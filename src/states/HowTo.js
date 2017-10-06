import {
    COLOR_HEX,
    STATE_MENU,
    I18N_MENU_BACK, I18N_HOW_TO_FINE, I18N_HOW_TO_GOAL, I18N_HOW_TO_AUTHORITIES, I18N_HOW_TO_SPACEBAR,
} from '../constants';

class HowTo {
    preload() {
        this.game.stage.backgroundColor = COLOR_HEX.MAIN;
    }

    create() {
        const horizontalOffset = this.game.width / 15;

        this.back = this.game.add.text(
            horizontalOffset,
            this.game.height / 15,
            this.game.rg.i18n.getTranslation(I18N_MENU_BACK),
            {
                fill: '#fff',
            }
        );
        this.back.inputEnabled = true;
        this.back.input.useHandCursor = true;

        const textGroup = this.game.add.group();
        let verticalOffset = 0;
        const spacing = this.game.height / 30;
        const fontSize = Math.min(22, Math.round(this.game.height / 19));
        [
            I18N_HOW_TO_GOAL,
            I18N_HOW_TO_FINE,
            Phaser.Device.desktop ? I18N_HOW_TO_SPACEBAR : '',
            I18N_HOW_TO_AUTHORITIES,
        ].forEach((text, i) => {
            if (!text) {
                return;
            }
            const textObject = this.game.add.text(
                horizontalOffset,
                verticalOffset,
                `${i + 1}. ${this.game.rg.i18n.getTranslation(text)}`,
                {
                    font: `${fontSize}px Arial`,
                    fill: '#fff',
                    wordWrap: true,
                    wordWrapWidth: this.game.width - horizontalOffset * 2,
                }
            );
            verticalOffset += textObject.height + spacing;
            textGroup.add(textObject);
        });
        textGroup.y = (this.game.height + this.back.bottom - verticalOffset + spacing) / 2;

        this.game.input.onDown.add(this.handleClickBack, this);
    }

    handleClickBack() {
        if (this.back.getBounds().contains(this.game.input.x, this.game.input.y)) {
            this.game.input.onDown.remove(this.handleClickBack, this);
            this.state.start(STATE_MENU, true, false);
            return true;
        }
    }
}

export default HowTo;
