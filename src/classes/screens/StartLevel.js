import UIScreen from '../UIScreen';
import UIButton from '../UIButton';

import {
    getFormattedCurrency,
} from '../../utils'

import {
    COLOR,
    I18N_CURRENCY,
    I18N_RULES_AUTHORITIES,
    I18N_RULES_GOAL,
    I18N_UI_BUTTON_PLAY,
    I18N_UI_BUTTON_QUIT,
    I18N_UI_LEVEL,
} from '../../constants';

class StartLevel extends UIScreen {
    constructor({ game, }) {
        super({ game, });

        const verticalPadding = 20;
        const horizontalPadding = 40;

        this.textTitle = this.game.add.text(
            this.width / 2,
            verticalPadding,
            '',
            {
                font: '26px Arial',
                fontWeight: 'bold',
            },
        );
        this.textTitle.anchor.set(0.5, 0);
        this.contentGroup.add(this.textTitle);

        const rulesLineSpacing = Math.round(Math.max(20, this.height / 20));
        const rulesFontStyle = {
            font: '16px "Press Start 2P", Arial'
        };
        const rulesY = this.height / 2;
        this.textRulesLeft = this.game.add.text(
            horizontalPadding,
            rulesY,
            '',
            rulesFontStyle
        );
        this.textRulesLeft.anchor.set(0, 0.5);
        this.textRulesLeft.lineSpacing = rulesLineSpacing;
        this.contentGroup.add(this.textRulesLeft);

        this.textRulesRight = this.game.add.text(
            0,
            rulesY,
            '',
            rulesFontStyle
        );
        this.textRulesRight.anchor.set(0, 0.5);
        this.textRulesRight.lineSpacing = rulesLineSpacing;
        this.contentGroup.add(this.textRulesRight);

        const buttonsHeight = 40;
        const buttonsWidth = 140;
        const buttonsMargin = 40;
        this.playButton = new UIButton({
            game: this.game,
            name: I18N_UI_BUTTON_PLAY,
            x: (this.width - buttonsMargin) / 2 - buttonsWidth,
            y: this.height - verticalPadding - buttonsHeight,
            width: buttonsWidth,
            height: buttonsHeight,
            bg: COLOR.GREEN,
            text: this.game.rg.i18n.getTranslation(I18N_UI_BUTTON_PLAY),
        });
        this.contentGroup.add(this.playButton.group);

        this.quitButton = new UIButton({
            game: this.game,
            name: I18N_UI_BUTTON_QUIT,
            x: (this.width + buttonsMargin) / 2,
            y: this.height - verticalPadding - buttonsHeight,
            width: buttonsWidth,
            height: buttonsHeight,
            bg: COLOR.MAROON,
            text: this.game.rg.i18n.getTranslation(I18N_UI_BUTTON_QUIT),
        });
        this.contentGroup.add(this.quitButton.group);
    }

    handleOverlayTweenComplete(point, tween, { levelNumber, goal, series, }) {
        this.textTitle.setText(this.game.rg.i18n.getTranslation(I18N_UI_LEVEL) + ' ' + levelNumber);

        const rulesList = [
            [I18N_RULES_GOAL, getFormattedCurrency(goal, this.game.rg.i18n.getTranslation(I18N_CURRENCY))],
            [I18N_RULES_AUTHORITIES, series.join(', ')],
        ];

        this.textRulesLeft.setText(
            rulesList.map(([label]) => this.game.rg.i18n.getTranslation(label) + ':')
                .join("\n")
        );

        this.textRulesRight.x = this.textRulesLeft.width + 2 * this.textRulesLeft.x;

        this.textRulesRight.setText(
            rulesList.map(([_, value]) => value).join("\n")
        );

        super.handleOverlayTweenComplete();
    }
}

export default StartLevel;
