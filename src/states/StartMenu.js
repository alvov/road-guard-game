import Level from '../classes/Level';
import pack from '../assets/pack.js';

import {
    UI_OFFSET,
    COLOR_HEX,
    LANG_RU,
    LANG_EN,
    STATE_LOADING, STATE_GAME, STATE_HOW_TO,
    I18N_GAME_TITLE,
    I18N_UI_VER, I18N_MENU_HOW_TO,
} from '../constants';

class StartMenu {
    preload() {
        this.game.stage.backgroundColor = COLOR_HEX.MAIN;
    }

    create() {
        this.title = this.game.rg.i18n.createText(
            0,
            0,
            I18N_GAME_TITLE,
            {
                fill: '#fff',
            }
        );
        this.title.anchor.set(0.5);

        const maxLevel = this.game.rg.level.maxLevel;
        this.levelsGroup = this.game.add.group();
        for (let i = 1; i <= this.game.rg.level.count; i++) {
            const isLocked = i > maxLevel;
            const levelSprite = this.game.add.sprite(
                0,
                0,
                'levels',
                isLocked ? this.game.rg.level.count : i - 1,
            );
            levelSprite.name = isLocked ? 'locked' : ('level' + i);
            if (!isLocked) {
                levelSprite.inputEnabled = true;
                levelSprite.input.useHandCursor = true;
            }
            this.levelsGroup.add(levelSprite);
        }

        this.menuHowTo = this.game.rg.i18n.createText(
            0,
            0,
            I18N_MENU_HOW_TO,
            {
                font: '22px Arial',
                fill: '#fff'
            },
        );
        this.menuHowTo.anchor.set(0.5);
        this.menuHowTo.name = I18N_MENU_HOW_TO;
        this.menuHowTo.inputEnabled = true;
        this.menuHowTo.input.useHandCursor = true;

        this.langButton = this.game.add.button(
            0,
            0,
            'langButtons',
            this.handleClickLang.bind(this)
        );

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
        this.game.input.onDown.add(this.handleTap, this);
        this.scale.onSizeChange.add(this.setObjectsPosition, this);
    }

    update() {
        this.langButton.frame = this.game.rg.i18n.currentLang === LANG_RU ? 1 : 0;
    }

    shutdown() {
        this.game.input.onDown.remove(this.handleTap, this);
        this.scale.onSizeChange.remove(this.setObjectsPosition, this);
    }

    handleTap(pointer) {
        if (pointer.targetObject) {
            if (pointer.targetObject.sprite.name.startsWith('level')) {
                this.handleClickLevel(pointer.targetObject.sprite.name);
            } else if (pointer.targetObject.sprite.name === I18N_MENU_HOW_TO) {
                this.handleClickHowTo();
            }
        }
    }

    handleClickLevel(levelId) {
        this.state.start(STATE_LOADING, true, false, {
            assets: [
                ['pack', 'game', null, pack],
            ],
            nextState: [
                STATE_GAME, Level.getLevelById(levelId),
            ],
        });
    }

    handleClickHowTo() {
        this.state.start(STATE_HOW_TO, true, false);
    }

    handleClickLang() {
        this.game.rg.i18n.setLang(
            this.game.rg.i18n.currentLang === LANG_RU ? LANG_EN : LANG_RU
        );
    }

    setObjectsPosition() {
        this.title.position.set(
            this.game.width / 2,
            this.game.height / 6,
        );

        this.menuHowTo.position.set(this.game.width / 2, 5 * this.game.height / 6);

        const levelSpriteHeight = this.levelsGroup.getChildAt(0).height;
        const levelsMargin = (this.game.width - this.game.rg.level.count * levelSpriteHeight) /
            (this.game.rg.level.count + 3);
        this.levelsGroup.x = 2 * levelsMargin;
        this.levelsGroup.y = (this.game.height - levelSpriteHeight) / 2;
        let i = 0;
        this.levelsGroup.forEach(levelSprite => {
            levelSprite.x = i * (levelSprite.width + levelsMargin);
            i++;
        });

        this.langButton.position.set(
            UI_OFFSET,
            0,
        );

        this.versionText.position.set(
            this.game.width - UI_OFFSET,
            this.game.height - UI_OFFSET
        );
    }
}

export default StartMenu;
