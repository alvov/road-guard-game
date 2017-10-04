import UIProgressBar from './UIProgressBar';
import UIButton from '../classes/UIButton';

import { getFine, getFormattedCurrency } from '../utils';
import {
    I18N_CURRENCY,
    I18N_RADAR_ALREADY_FINED,
    I18N_RADAR_EMPTY,
    I18N_RADAR_FINED,
    I18N_RADAR_METRICS,
    I18N_RADAR_ROGUE,
    I18N_RADAR_WAIT,
    I18N_RADAR_ERROR,
    I18N_UI_BUTTON_FINE,
    RADAR_MODE_ALREADY_FINED,
    RADAR_MODE_COMPUTING, RADAR_MODE_DISMISS,
    RADAR_MODE_EMPTY, RADAR_MODE_FINE, RADAR_MODE_FINED, RADAR_MODE_ROGUE,
    RADAR_MODE_ERROR,
    UI_OFFSET,
    COLOR,
    COLOR_HEX,
} from '../constants';

const TEMPORARY_MODE_DURATION = 2000;
const RADAR_SCREEN_HEIGHT = 120;
const RADAR_FINE_BUTTON_HEIGHT = 70;

class Radar {
    constructor({ game, x, y, width, computing, speedLimit, }) {
        this.game = game;
        this.width = width;
        this.height = RADAR_SCREEN_HEIGHT + RADAR_FINE_BUTTON_HEIGHT + 4 * UI_OFFSET;
        this.speedLimit = speedLimit;

        this.radarGroup = this.game.add.group();
        this.radarGroup.x = x;
        this.radarGroup.y = y - this.height;

        this.body = this.game.add.graphics();
        this.body.beginFill(0x252525);
        this.body.drawRoundedRect(0, 0, this.width, this.height, 20);
        this.body.endFill();
        this.radarGroup.add(this.body);

        this.screenGroup = this.game.add.group();
        this.screenGroup.x = UI_OFFSET;
        this.screenGroup.y = 2 * UI_OFFSET;
        this.radarGroup.add(this.screenGroup);

        this.screen = this.game.add.graphics();
        this.screenGroup.add(this.screen);
        this.screenWidth = this.width - 2 * UI_OFFSET;

        this.mainText = this.game.add.text(
            this.screenWidth / 2,
            RADAR_SCREEN_HEIGHT / 2 + 5,
            '',
            {
                align: 'center',
                wordWrap: true,
                wordWrapWidth: this.screenWidth
            }
        );
        this.mainText.font = '"Press Start 2P", Arial';
        this.mainText.fontSize = 18;
        this.mainText.anchor.set(0.5, 0.5);
        this.screenGroup.add(this.mainText);

        this.topText = this.game.add.text(
            this.screenWidth / 2,
            10,
            '',
            {
                align: 'center',
            }
        );
        this.topText.font = '"Press Start 2P", Arial';
        this.topText.fontSize = 14;
        this.topText.fontVariant = 'small-caps';
        this.topText.anchor.set(0.5, 0);
        this.screenGroup.add(this.topText);

        this.bottomText = this.game.add.text(
            this.screenWidth / 2,
            RADAR_SCREEN_HEIGHT - 10,
            '',
            {
                align: 'center',
            }
        );
        this.bottomText.font = '"Press Start 2P", Arial';
        this.bottomText.fontSize = 12;
        this.bottomText.anchor.set(0.5, 1);
        this.screenGroup.add(this.bottomText);

        const progressBarOffset = RADAR_SCREEN_HEIGHT / 10;
        this.progressBar = new UIProgressBar({
            game: this.game,
            x: progressBarOffset,
            y: RADAR_SCREEN_HEIGHT - 2 * progressBarOffset - 5,
            width: this.screenWidth - 2 * progressBarOffset,
            height: 10,
            color: 0,
        });
        this.screenGroup.add(this.progressBar.graphics);

        const fineButtonWidth = this.width / 1.5;
        this.fineButton = new UIButton({
            game: this.game,
            name: I18N_UI_BUTTON_FINE,
            x: (this.width - fineButtonWidth) / 2,
            y: this.height - RADAR_FINE_BUTTON_HEIGHT - UI_OFFSET,
            width: fineButtonWidth,
            height: RADAR_FINE_BUTTON_HEIGHT,
            bg: COLOR.MAROON,
            text: this.game.rg.i18n.getTranslation(I18N_UI_BUTTON_FINE),
            style: {
                font: '24px Arial',
                fontWeight: 'bold',
                fill: '#fff',
            },
            radius: 20,
        });
        this.radarGroup.add(this.fineButton.group);

        this.mode = null;

        this.computingTimer = this.game.time.create(false);
        this.computingTimerDuration = computing;
        this.temporaryModeTimer = this.game.time.create(false);

        this.currentCar = null;
        this.currentFine = 0;

        this.setMode(RADAR_MODE_EMPTY);
    }

    update() {
        if (this.mode === RADAR_MODE_COMPUTING) {
            if (this.computingTimer.running) {
                this.progressBar.update({ percent: this.computingTimer.ms / this.computingTimerDuration });
            }
        }
    }

    handleCompleteComputing() {
        this.computingTimer.stop(true);
        this.currentFine = getFine(this.currentCar.velocity.x, this.speedLimit);
        if (this.currentFine === 0) {
            this.setMode(RADAR_MODE_DISMISS, { speed: this.currentCar.velocity.x });
        } else {
            this.setMode(RADAR_MODE_FINE, { speed: this.currentCar.velocity.x });
        }
    }

    handleCompleteTemporaryMode() {
        this.temporaryModeTimer.stop(true);
        this.setMode(RADAR_MODE_EMPTY);
    }

    setMode(mode, props = {}) {
        this.computingTimer.stop(true);
        this.temporaryModeTimer.stop(true);

        this.progressBar.graphics.visible = false;
        this.topText.visible = false;
        this.bottomText.visible = false;

        this.mainText.fill = '#000';
        this.topText.fill = '#000';
        this.bottomText.fill = '#000';

        this.fineButton.update({ text: '...' });

        switch (mode) {
            case RADAR_MODE_EMPTY: {
                this.mainText.setText(this.game.rg.i18n.getTranslation(I18N_RADAR_EMPTY));
                this.resetCurrentCar();
                break;
            }
            case RADAR_MODE_DISMISS: {
                this.topText.setText(this.currentCar.plateNumber.getText());
                this.topText.visible = true;

                this.mainText.setText(
                    `${Math.round(props.speed)} ${this.game.rg.i18n.getTranslation(I18N_RADAR_METRICS)}`
                );
                break;
            }
            case RADAR_MODE_FINE: {
                this.topText.setText(this.currentCar.plateNumber.getText());
                this.topText.visible = true;

                this.mainText.setText(
                    `${Math.round(props.speed)} ${this.game.rg.i18n.getTranslation(I18N_RADAR_METRICS)}`
                );

                this.fineButton.reset();
                break;
            }
            case RADAR_MODE_COMPUTING: {
                if (this.mode !== RADAR_MODE_COMPUTING || this.currentCar !== props.car) {
                    this.currentCar = props.car;

                    this.mainText.setText(this.game.rg.i18n.getTranslation(I18N_RADAR_WAIT));
                    this.progressBar.graphics.visible = true;

                    this.computingTimer.add(this.computingTimerDuration, this.handleCompleteComputing, this);
                    this.computingTimer.start();
                }
                break;
            }
            case RADAR_MODE_FINED: {
                this.topText.setText(this.currentCar.plateNumber.getText());
                this.topText.visible = true;

                this.mainText.setText(
                    this.game.rg.i18n.getTranslation(I18N_RADAR_FINED) + "\n" +
                    this.currentFine + ' ' + this.game.rg.i18n.getTranslation(I18N_CURRENCY)
                );
                this.resetCurrentCar();
                this.startTemporaryModeTimer();
                break;
            }
            case RADAR_MODE_ROGUE: {
                if (this.currentCar !== null) {
                    this.topText.setText(this.currentCar.plateNumber.getText());
                    this.topText.fill = COLOR_HEX.MAROON;
                    this.topText.visible = true;
                }

                this.mainText.fill = COLOR_HEX.MAROON;
                this.mainText.setText(this.game.rg.i18n.getTranslation(I18N_RADAR_ROGUE));
                this.bottomText.setText(
                    getFormattedCurrency(-this.currentFine, this.game.rg.i18n.getTranslation(I18N_CURRENCY))
                );
                this.bottomText.fill = COLOR_HEX.MAROON;
                this.bottomText.visible = true;
                this.resetCurrentCar();
                this.startTemporaryModeTimer();
                break;
            }
            case RADAR_MODE_ALREADY_FINED: {
                this.mainText.setText(this.game.rg.i18n.getTranslation(I18N_RADAR_ALREADY_FINED));
                this.resetCurrentCar();
                this.startTemporaryModeTimer();
                break;
            }
            case RADAR_MODE_ERROR: {
                this.mainText.fill = COLOR_HEX.MAROON;
                this.mainText.setText(this.game.rg.i18n.getTranslation(I18N_RADAR_ERROR));
                this.resetCurrentCar();
                break;
            }
        }

        this.mode = mode;

        this.drawScreen();
    }

    drawScreen() {
        let color;
        switch (this.mode) {
            case RADAR_MODE_FINE:
            case RADAR_MODE_ROGUE:
            case RADAR_MODE_ERROR:
                color = COLOR.RADAR_SCREEN_RED;
                break;
            default:
                color = COLOR.RADAR_SCREEN;
        }
        this.screen.clear();
        this.screen.beginFill(color);
        this.screen.drawRect(
            0,
            0,
            this.screenWidth,
            RADAR_SCREEN_HEIGHT
        );
        this.screen.endFill();
    }

    startTemporaryModeTimer() {
        this.temporaryModeTimer.add(TEMPORARY_MODE_DURATION, this.handleCompleteTemporaryMode, this);
        this.temporaryModeTimer.start();
    }

    resetCurrentCar() {
        this.currentCar = null;
        this.currentFine = 0;
    }
}

export default Radar;
