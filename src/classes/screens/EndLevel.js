import {
    COLOR_DARK_RED, COLOR_GREEN, END_GAME_WIN, I18N_CURRENCY, I18N_END_LOOSE, I18N_END_WIN,
    I18N_STATS_FINES, I18N_STATS_MISSED, I18N_STATS_TIME, I18N_STATS_WRONG,
    I18N_UI_BUTTON_NEXT, I18N_UI_BUTTON_QUIT, I18N_UI_BUTTON_REPLAY, STATE_MENU
} from '../../constants';
import {
    getFormattedCurrency,
    getFormattedTime
} from '../../utils';
import UIButton from '../UIButton';

const OVERLAY_TWEEN_DURATION = 200;

class EndLevel {
    constructor({ game }) {
        this.game = game;

        this.leftOffset = this.game.width / 15;
        this.topOffset = this.game.height / 10;
        this.width = this.game.width - 2 * this.leftOffset;
        this.height = this.game.height - 2 * this.topOffset;

        const verticalPadding = 20;
        const horizontalPadding = 40;

        this.group = this.game.add.group();
        this.group.x = this.leftOffset;
        this.group.y = this.topOffset;

        this.overlay = this.game.add.graphics();
        this.overlay.beginFill(0xffffff);
        this.overlay.drawRoundedRect(0, 0, this.width, this.height, 20);
        this.overlay.endFill();
        this.overlay.scale.set(0);
        this.group.add(this.overlay);

        this.overlayTween = this.game.add.tween(this.overlay.scale)
            .to({
                x: 1,
                y: 1
            }, OVERLAY_TWEEN_DURATION);

        this.textGroup = this.game.add.group();
        this.group.add(this.textGroup);

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
        this.textGroup.add(this.textMode);

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
        this.textGroup.add(this.textStatsLeft);

        this.textStatsRight = this.game.add.text(
            0,
            2 * verticalPadding + this.textMode.height,
            '',
            statsFontStyle
        );
        this.textStatsRight.lineSpacing = statsLineSpacing;
        this.textGroup.add(this.textStatsRight);

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
            bg: Phaser.Color.hexToRGB(COLOR_GREEN),
            text: this.game.rg.i18n.getTranslation(I18N_UI_BUTTON_NEXT),
        });
        this.textGroup.add(this.nextButton.group);

        this.replayButton = new UIButton({
            game: this.game,
            name: I18N_UI_BUTTON_REPLAY,
            x: (this.width - buttonsMargin) / 2 - buttonsWidth,
            y: this.height - verticalPadding - buttonsHeight,
            width: buttonsWidth,
            height: buttonsHeight,
            bg: Phaser.Color.hexToRGB(COLOR_GREEN),
            text: this.game.rg.i18n.getTranslation(I18N_UI_BUTTON_REPLAY),
        });
        this.textGroup.add(this.replayButton.group);

        this.quitButton = new UIButton({
            game: this.game,
            name: I18N_UI_BUTTON_QUIT,
            x: (this.width + buttonsMargin) / 2,
            y: this.height - verticalPadding - buttonsHeight,
            width: buttonsWidth,
            height: buttonsHeight,
            bg: Phaser.Color.hexToRGB(COLOR_DARK_RED),
            text: this.game.rg.i18n.getTranslation(I18N_UI_BUTTON_QUIT),
        });
        this.textGroup.add(this.quitButton.group);

        this.hide();
    }

    handleOverlayTweenComplete(point, tween, { mode, stats, nextLevel }) {
        this.textMode.fill = mode === END_GAME_WIN ? COLOR_GREEN : COLOR_DARK_RED;
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

        this.textGroup.visible = true;
    }

    show(...args) {
        this.overlay.visible = true;

        this.overlayTween.onComplete.addOnce(this.handleOverlayTweenComplete, this, 0, ...args);
        this.overlayTween.start();
    }

    hide() {
        this.overlay.visible = false;
        this.textGroup.visible = false;
    }
}

export default EndLevel;
