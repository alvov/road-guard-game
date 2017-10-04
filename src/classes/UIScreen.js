const OVERLAY_TWEEN_DURATION = 200;

class UIScreen {
    constructor({ game, height, }) {
        this.game = game;

        this.leftOffset = this.game.width / 15;
        this.width = this.game.width - 2 * this.leftOffset;
        this.height = height;
        this.topOffset = (this.game.height - height) / 2;

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

        this.contentGroup = this.game.add.group();
        this.group.add(this.contentGroup);

        this.hide();
    }

    handleOverlayTweenComplete() {
        this.contentGroup.visible = true;
    }

    show(...args) {
        this.overlayTween.onComplete.addOnce(this.handleOverlayTweenComplete, this, 0, ...args);
        this.overlayTween.start();

        this.overlay.visible = true;
    }

    hide() {
        this.overlay.visible = false;
        this.contentGroup.visible = false;
    }
}

export default UIScreen;
