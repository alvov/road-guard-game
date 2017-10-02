import {
    COLOR_DARK_RED,
    I18N_CURRENCY,
    I18N_RADAR_ALREADY_FINED,
    I18N_RADAR_EMPTY,
    I18N_RADAR_FINED,
    I18N_RADAR_METRICS, I18N_RADAR_PRESS_TO_FINE, I18N_RADAR_ROGUE, I18N_RADAR_WAIT, RADAR_MODE_ALREADY_FINED,
    RADAR_MODE_COMPUTING, RADAR_MODE_DISMISS,
    RADAR_MODE_EMPTY, RADAR_MODE_FINE, RADAR_MODE_FINED, RADAR_MODE_ROGUE
} from '../constants';
import {getFormattedCurrency} from '../utils';

const TEMPORARY_MODE_DURATION = 2000;

class RadarMonitor {
    constructor({ game, x, y, width, height, computing, fines, speedLimit, onFine, }) {
        this.game = game;
        this.width = width;
        this.height = height;
        this.fines = fines;
        this.speedLimit = speedLimit;
        this.onFine = onFine;

        this.group = this.game.add.group();
        this.group.x = x;
        this.group.y = y;

        this.screen = this.game.add.graphics();
        this.screen.name = 'radar';
        this.screen.inputEnabled = true;
        this.group.add(this.screen);

        this.mainText = this.game.add.text(
            this.width / 2,
            this.height / 2 + 5,
            '',
            {
                align: 'center',
                wordWrap: true,
                wordWrapWidth: this.width
            }
        );
        this.mainText.font = '"Press Start 2P", Arial';
        this.mainText.fontSize = 20;
        this.mainText.anchor.set(0.5, 0.5);
        this.group.add(this.mainText);

        this.secondaryText = this.game.add.text(
            this.width / 2,
            this.height - 10,
            '',
            {
                align: 'center',
            }
        );
        this.secondaryText.font = '"Press Start 2P", Arial';
        this.secondaryText.fontSize = 12;
        this.secondaryText.anchor.set(0.5, 1);
        this.group.add(this.secondaryText);

        this.progressBar = this.game.add.graphics();
        this.group.add(this.progressBar);

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
                this.updateProgressBar(this.computingTimer.ms / this.computingTimerDuration);
            }
        }
    }

    updateProgressBar(percent) {
        const color = 0;
        const offset = this.height / 10;
        const width = this.width - 2 * offset;
        const height = 10;
        const y = this.height - 2 * offset - height / 2;
        this.progressBar.clear();
        this.progressBar.lineStyle(1, color, 1);
        this.progressBar.drawRect(offset, y - height / 2, width, height);
        this.progressBar.lineStyle(height, color, 1);
        this.progressBar.moveTo(offset, y);
        this.progressBar.lineTo(width * percent, y);
    }

    handleCompleteComputing() {
        this.computingTimer.stop(true);
        this.currentFine = 0;
        for (let i = 0; i < this.fines.length; i++) {
            const [speedExcess, fine] = this.fines[i];
            if (this.currentCar.velocity.x < speedExcess + this.speedLimit) {
                this.currentFine = fine;
                break;
            }
        }
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

        this.progressBar.visible = false;
        this.secondaryText.visible = false;

        this.mainText.fill = '#000';
        this.secondaryText.fill = '#000';

        switch (mode) {
            case RADAR_MODE_EMPTY: {
                this.mainText.setText(this.game.rg.i18n.getTranslation(I18N_RADAR_EMPTY));
                this.resetCurrentCar();
                break;
            }
            case RADAR_MODE_DISMISS: {
                this.mainText.setText(
                    `${Math.round(props.speed)} ${this.game.rg.i18n.getTranslation(I18N_RADAR_METRICS)}`
                );
                break;
            }
            case RADAR_MODE_FINE: {
                this.mainText.setText(
                    `${Math.round(props.speed)} ${this.game.rg.i18n.getTranslation(I18N_RADAR_METRICS)}`
                );
                this.secondaryText.setText(this.game.rg.i18n.getTranslation(I18N_RADAR_PRESS_TO_FINE));
                this.secondaryText.visible = true;
                break;
            }
            case RADAR_MODE_COMPUTING: {
                if (this.mode !== RADAR_MODE_COMPUTING || this.currentCar !== props.car) {
                    this.currentCar = props.car;

                    this.mainText.setText(this.game.rg.i18n.getTranslation(I18N_RADAR_WAIT));
                    this.progressBar.visible = true;

                    this.computingTimer.add(this.computingTimerDuration, this.handleCompleteComputing, this);
                    this.computingTimer.start();
                }
                break;
            }
            case RADAR_MODE_FINED: {
                this.mainText.setText(
                    this.game.rg.i18n.getTranslation(I18N_RADAR_FINED) + "\n" +
                    this.currentFine + ' ' + this.game.rg.i18n.getTranslation(I18N_CURRENCY)
                );
                this.resetCurrentCar();
                this.startTemporaryModeTimer();
                break;
            }
            case RADAR_MODE_ROGUE: {
                this.mainText.fill = COLOR_DARK_RED;
                this.mainText.setText(this.game.rg.i18n.getTranslation(I18N_RADAR_ROGUE));
                this.secondaryText.setText(
                    getFormattedCurrency(-this.currentFine, this.game.rg.i18n.getTranslation(I18N_CURRENCY))
                );
                this.secondaryText.fill = COLOR_DARK_RED;
                this.secondaryText.visible = true;
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
        }

        this.mode = mode;

        this.drawScreen();
    }

    drawScreen() {
        let color;
        switch (this.mode) {
            case RADAR_MODE_FINE:
            case RADAR_MODE_ROGUE:
                color = 0xDDAAAA;
                break;
            default:
                color = 0xD1D1D1;
        }
        this.screen.clear();
        this.screen.lineStyle(4, 0);
        this.screen.beginFill(color);
        this.screen.drawRoundedRect(
            0,
            0,
            this.width,
            this.height,
            16
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

export default RadarMonitor;
