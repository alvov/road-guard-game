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
        this.game.rg.i18n = new i18n({
            game: this.game
        });

        this.state.onStateChange.add(this.handleStateChange, this);

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
}

export default Boot;
