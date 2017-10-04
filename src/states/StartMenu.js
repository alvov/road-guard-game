import Level from '../classes/Level';
import pack from '../assets/pack.js';

import {
    LANG_RU,
    LANG_EN,
    I18N_GAME_TITLE,
    I18N_MENU_START, STATE_LOADING, STATE_GAME,
    UI_OFFSET,
    COLOR_HEX, I18N_UI_LEVEL, I18N_UI_VER,
} from '../constants';

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

        this.menu = [];
        const maxLevel = this.game.rg.level.maxLevel;
        if (maxLevel > 1) {
            for (let i = 1; i <= maxLevel; i++) {
                this.menu.push([I18N_UI_LEVEL, ` ${i}`, this.handleClickPlay.bind(this, i)]);
            }
        } else {
            this.menu.push([I18N_MENU_START, '', this.handleClickPlay.bind(this)]);
        }

        this.menu = this.menu.map(([itemTitle, postfix, callback], i) => {
            return [
                this.game.rg.i18n.createText(
                    0,
                    0,
                    itemTitle,
                    {
                        font: '22px Arial',
                        fill: '#fff'
                    },
                    postfix,
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

        this.versionText = this.game.rg.i18n.createText(
            0,
            0,
            I18N_UI_VER,
            {
                font: '10px "Press Start 2P", Arial',
                fill: '#fff',
            },
            '1.0.0',
        );
        this.versionText.anchor.set(1, 1);

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

    handleClickPlay(levelNumber = 1) {
        this.state.start(STATE_LOADING, true, false, {
            assets: [
                ['pack', 'game', null, pack],
            ],
            nextState: [
                STATE_GAME, Level.getLevelByNumber(levelNumber)
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

        this.versionText.position.set(
            this.game.width - UI_OFFSET,
            this.game.height - UI_OFFSET
        );
    }
}

export default StartMenu;
