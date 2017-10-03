import pack from '../assets/pack';
import i18n from '../classes/i18n';
import {
    STATE_LOADING,
    STATE_MENU
} from '../constants';

class Boot {
    init() {
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;

        this.game.rg = {};
    }

    create() {
        // events
        this.state.onStateChange.add(this.handleStateChange, this);
        this.scale.onOrientationChange.add(this.handleOrientationChange, this);

        this.game.rg.i18n = new i18n({
            game: this.game
        });

        this.state.start(STATE_LOADING, true, false, {
            assets: [
                ['pack', 'initial', null, pack]
            ],
            nextState: [STATE_MENU]
        });
    }

    handleStateChange() {
        this.game.rg.i18n.clear();
    }

    handleOrientationChange(scale, prevOrientation, wasIncorrect) {
        if (scale.screenOrientation !== prevOrientation && scale.screenOrientation.startsWith('landscape')) {
            setTimeout(() => {
                this.scale.setGameSize(
                    ...window.rgResizeBody()
                );
            }, 500);
        }
    }
}

export default Boot;
