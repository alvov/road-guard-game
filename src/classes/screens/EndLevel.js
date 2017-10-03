import UIScreen from '../UIScreen';
import UIButton from '../UIButton';

import {
    getFormattedCurrency,
    getFormattedTime
} from '../../utils';

import {
    COLOR,
    COLOR_HEX,
    END_GAME_WIN, I18N_CURRENCY, I18N_END_LOOSE, I18N_END_WIN,
    I18N_STATS_FINES, I18N_STATS_MISSED, I18N_STATS_TIME, I18N_STATS_WRONG,
    I18N_UI_BUTTON_NEXT, I18N_UI_BUTTON_QUIT, I18N_UI_BUTTON_REPLAY,
} from '../../constants';

class EndLevel extends UIScreen {
    constructor({ game }) {
        super({ game });

        const verticalPadding = 20;
        const horizontalPadding = 40;

        this.textMode = this.game.add.text(
            this.width / 2,
            verticalPadding,
            '',
            {
                font: '26px Arial',
                fontWeight: 'bold',
            },
        );
        this.textMode.anchor.set(0.5, 0);
        this.contentGroup.add(this.textMode);

        const statsLineSpacing = Math.round(Math.min(10, this.height / 43));
        const statsFontStyle = {
            font: '16px "Press Start 2P", Arial'
        };
        this.textStatsLeft = this.game.add.text(
            horizontalPadding,
            2 * verticalPadding + this.textMode.height,
            '',
            statsFontStyle
        );
        this.textStatsLeft.lineSpacing = statsLineSpacing;
        this.contentGroup.add(this.textStatsLeft);

        this.textStatsRight = this.game.add.text(
            0,
            2 * verticalPadding + this.textMode.height,
            '',
            statsFontStyle
        );
        this.textStatsRight.lineSpacing = statsLineSpacing;
        this.contentGroup.add(this.textStatsRight);

        const buttonsHeight = 40;
        const buttonsWidth = 140;
        const buttonsMargin = 40;
        this.nextButton = new UIButton({
            game: this.game,
            name: I18N_UI_BUTTON_NEXT,
            x: (this.width - buttonsMargin) / 2 - buttonsWidth,
            y: this.height - verticalPadding - buttonsHeight,
            width: buttonsWidth,
            height: buttonsHeight,
            bg: COLOR.GREEN,
            text: this.game.rg.i18n.getTranslation(I18N_UI_BUTTON_NEXT),
        });
        this.contentGroup.add(this.nextButton.group);

        this.replayButton = new UIButton({
            game: this.game,
            name: I18N_UI_BUTTON_REPLAY,
            x: (this.width - buttonsMargin) / 2 - buttonsWidth,
            y: this.height - verticalPadding - buttonsHeight,
            width: buttonsWidth,
            height: buttonsHeight,
            bg: COLOR.GREEN,
            text: this.game.rg.i18n.getTranslation(I18N_UI_BUTTON_REPLAY),
        });
        this.contentGroup.add(this.replayButton.group);

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

    handleOverlayTweenComplete(point, tween, { mode, stats, nextLevel }) {
        this.textMode.fill = mode === END_GAME_WIN ? COLOR_HEX.GREEN : COLOR_HEX.MAROON;
        this.textMode.setText(this.game.rg.i18n.getTranslation(
            mode === END_GAME_WIN ? I18N_END_WIN : I18N_END_LOOSE
        ));

        const statsList = [
            [I18N_STATS_FINES, stats.fines],
            [I18N_STATS_WRONG, stats.wrong],
            [I18N_STATS_MISSED, stats.missed],
        ].map(([label, { count, sum }]) => {
            return [
                label,
                sum === 0 ?
                    String(count) :
                    `${count} (${getFormattedCurrency(sum, this.game.rg.i18n.getTranslation(I18N_CURRENCY))})`
            ]
        });

        if (mode === END_GAME_WIN) {
            statsList.unshift([I18N_STATS_TIME, String(getFormattedTime(stats.time))]);
        }
        this.textStatsLeft.setText(
            statsList.map(([label]) => this.game.rg.i18n.getTranslation(label) + ':')
                .join("\n")
        );

        this.textStatsRight.x = this.textStatsLeft.width + 2 * this.textStatsLeft.x;
        this.textStatsRight.setText(
            statsList.map(([_, value]) => value).join("\n")
        );

        if (mode === END_GAME_WIN && nextLevel !== null) {
            this.nextButton.visible = true;
            this.replayButton.visible = false;
        } else {
            this.nextButton.visible = false;
            this.replayButton.visible = true;
        }

        super.handleOverlayTweenComplete();
    }
}

export default EndLevel;
