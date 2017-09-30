import levels from '../levels.js';
import pack from '../assets/pack.js';

import {
    COLOR_MAIN_BG,
    LANG_RU,
    LANG_EN,
    I18N_GAME_TITLE,
    I18N_MENU_START, STATE_LOADING, STATE_GAME,
} from '../constants';

class StartMenu {
    preload() {
        this.game.stage.backgroundColor = COLOR_MAIN_BG;
    }

    create() {
        this.game.world.resize(this.game.width, this.game.height);

        this.title = this.game.rg.i18n.createText(
            this.game.width / 2,
            this.game.height / 6,
            I18N_GAME_TITLE,
            {
                fill: '#fff'
            }
        );
        this.title.anchor.set(0.5);

        const menuOffset = this.game.height / 3;
        const menuVerticalSpacing = Math.min(this.game.height / 7, 70);
        this.menu = [
            [I18N_MENU_START, this.handleClickPlay.bind(this)],
        ].map(([itemTitle, callback], i) => {
            return [
                this.game.rg.i18n.createText(
                    40,
                    i * menuVerticalSpacing + menuOffset,
                    itemTitle,
                    {
                        font: '22px Arial',
                        fill: '#fff'
                    }
                ),
                callback
            ];
        });

        this.langButton = this.game.add.button(
            this.game.world.width - 10,
            0,
            'langButtons',
            this.handleClickLang.bind(this)
        );
        this.langButton.anchor.set(1, 0);

        this.game.input.onDown.add(this.handleClickMenu, this);
    }

    update() {
        this.langButton.frame = this.game.rg.i18n.currentLang === LANG_RU ? 1 : 0;
    }

    handleClickPlay() {
        this.state.start(STATE_LOADING, true, false, {
            assets: [
                ['pack', 'game', null, pack],
            ],
            nextState: [
                STATE_GAME, levels['level1']
            ]
        });
    }

    handleClickLang() {
        this.game.rg.i18n.setLang(
            this.game.rg.i18n.currentLang === LANG_RU ? LANG_EN : LANG_RU
        );
    }

    handleClickMenu() {
        this.menu.some(([item, callback]) => {
            if (item.getBounds().contains(this.game.input.x, this.game.input.y)) {
                this.game.input.onDown.remove(this.handleClickMenu, this);
                callback();
                return true;
            }
        });
    }
}

export default StartMenu;
