import pack from '../assets/pack.js';

import {
    LANG_RU,
    LANG_EN,
    I18N_GAME_TITLE,
    I18N_MENU_START, STATE_LOADING, STATE_GAME,
    UI_OFFSET,
    COLOR_HEX,
} from '../constants';

import { getLevel } from '../utils';

class StartMenu {
    preload() {
        this.game.stage.backgroundColor = COLOR_HEX.MAIN;
    }

    create() {
        this.game.world.resize(this.game.width, this.game.height);

        this.title = this.game.rg.i18n.createText(
            0,
            0,
            I18N_GAME_TITLE,
            {
                fill: '#fff'
            }
        );
        this.title.anchor.set(0.5);

        this.menu = [
            [I18N_MENU_START, this.handleClickPlay.bind(this)],
        ].map(([itemTitle, callback], i) => {
            return [
                this.game.rg.i18n.createText(
                    0,
                    0,
                    itemTitle,
                    {
                        font: '18px "Press Start 2P", Arial',
                        fill: '#fff'
                    }
                ),
                callback
            ];
        });

        this.langButton = this.game.add.button(
            0,
            0,
            'langButtons',
            this.handleClickLang.bind(this)
        );
        this.langButton.anchor.set(1, 0);

        this.setObjectsPosition();

        // events
        this.game.input.onDown.add(this.handleClickMenu, this);
        this.scale.onSizeChange.add(this.setObjectsPosition, this);
    }

    update() {
        this.langButton.frame = this.game.rg.i18n.currentLang === LANG_RU ? 1 : 0;
    }

    shutdown() {
        this.game.input.onDown.remove(this.handleClickMenu, this);
        this.scale.onSizeChange.remove(this.setObjectsPosition, this);
    }

    handleClickPlay() {
        this.state.start(STATE_LOADING, true, false, {
            assets: [
                ['pack', 'game', null, pack],
            ],
            nextState: [
                STATE_GAME, getLevel()
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

    setObjectsPosition() {
        this.title.position.set(
            this.game.width / 2,
            this.game.height / 6,
        );

        const menuOffsetLeft = 40;
        const menuOffset = this.game.height / 3;
        const menuVerticalSpacing = Math.min(this.game.height / 7, 70);
        this.menu.forEach(([item], i) => {
            item.position.set(
                menuOffsetLeft,
                i * menuVerticalSpacing + menuOffset,
            );
        });
        this.langButton.position.set(
            this.game.width - UI_OFFSET,
            0,
        );
    }
}

export default StartMenu;
