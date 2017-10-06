import UIScreen from '../UIScreen';
import UIColumns from '../UIColumns';
import UIButton from '../UIButton';

import {
    getFormattedCurrency,
} from '../../utils'

import {
    COLOR, COLOR_HEX,
    I18N_CURRENCY,
    I18N_RULES_AUTHORITIES,
    I18N_RULES_GOAL,
    I18N_UI_BUTTON_PLAY,
    I18N_UI_BUTTON_QUIT,
    I18N_UI_LEVEL,
} from '../../constants';

class StartLevel extends UIScreen {
    constructor({ game, height, }) {
        super({ game, height, });

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

        this.rules = new UIColumns({
            game: this.game,
            x: horizontalPadding,
            y: this.height / 2 - 30,
            style: {
                font: '16px "Press Start 2P", Arial',
            },
            lineSpacing: Math.round(Math.max(20, this.height / 20)),
            columnSpacing: horizontalPadding,
        });
        this.contentGroup.add(this.rules.group);

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
            bg: 0xffffff,
            text: this.game.rg.i18n.getTranslation(I18N_UI_BUTTON_QUIT),
            style: {
                font: `${buttonsHeight / 2}px Arial`,
                fill: COLOR_HEX.MAROON,
            },
        });
        this.contentGroup.add(this.quitButton.group);
    }

    handleOverlayTweenComplete(point, tween, { levelNumber, goal, series, }) {
        this.textTitle.setText(this.game.rg.i18n.getTranslation(I18N_UI_LEVEL) + ' ' + levelNumber);

        const rulesList = [
            [[I18N_RULES_GOAL], [getFormattedCurrency(goal, this.game.rg.i18n.getTranslation(I18N_CURRENCY))]],
            [[I18N_RULES_AUTHORITIES], [series.join(', '), COLOR_HEX.RED]],
        ];

        this.rules.setText(
            rulesList.map(([left, right]) => {
                return [
                    [this.game.rg.i18n.getTranslation(left[0]) + ':', left[1]],
                    right,
                ];
            })
        );

        super.handleOverlayTweenComplete();
    }
}

export default StartLevel;
