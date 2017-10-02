class UIProgressBar {
    constructor({ game, x, y, width, height, color, radius = 0, }) {
        this.game = game;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.radius = radius;
        this.color = color;

        this.graphics = this.game.add.graphics();
    }

    update({ percent, color = this.color, }) {
        percent = this.game.math.clamp(percent, 0, 1);
        this.graphics.clear();
        this.graphics.lineStyle(1, color);
        this.graphics.drawRoundedRect(this.x, this.y, this.width, this.height, this.radius);
        this.graphics.beginFill(color);
        this.graphics.drawRoundedRect(this.x, this.y, this.width * percent, this.height, this.radius);
        this.graphics.endFill();
    }
}

export default UIProgressBar;
