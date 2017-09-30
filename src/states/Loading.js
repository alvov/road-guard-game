import {
    COLOR_MAIN_BG,
    I18N_UI_LOADING,
} from '../constants';

class Loading {
    init(config) {
        this.rg = {
            config,
            objects: {
                textProgress: null
            }
        };
    }

    preload() {
        this.game.stage.backgroundColor = COLOR_MAIN_BG;

        this.rg.config.assets.forEach(([assetType, ...assetParams]) => {
            switch (assetType) {
                case 'pack':
                    this.load.pack(...assetParams);
                    break;
                case 'spritesheet':
                    this.load.spritesheet(...assetParams);
                    break;
                case 'image':
                    this.load.image(...assetParams);
                    break;
            }
        });

        this.rg.objects.textLoading = this.game.add.text(
            this.game.world.centerX - 5,
            this.game.world.centerY,
            this.game.rg.i18n.getTranslation(I18N_UI_LOADING),
            {
                font: '26px Arial',
                fill: '#fff'
            }
        );
        this.rg.objects.textLoading.anchor.set(1, 0.5);

        this.rg.objects.textProgress = this.game.add.text(
            this.game.world.centerX + 5,
            this.game.world.centerY,
            '0 %',
            {
                font: '26px Arial',
                fill: '#fff'
            }
        );
        this.rg.objects.textProgress.anchor.set(0, 0.5);
    }

    loadUpdate() {
        this.rg.objects.textProgress.setText(`${this.game.load.progress} %`);
    }

    create() {
        this.state.start(this.rg.config.nextState[0], true, false, this.rg.config.nextState[1]);
    }
}

export default Loading;
