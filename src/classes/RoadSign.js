class RoadSign {
    constructor({ game, x, y, position, speedLimit }) {
        this.group = game.add.group();
        this.group.x = x;
        this.group.y = y;
        this.group.rg = this;

        this.position = new Phaser.Point(position.x, position.y);
        this.dayTime = null;

        this.signSprite = game.add.sprite(0, 0, 'roadSign');
        this.signSprite.anchor.set(0.5, 1);
        this.group.add(this.signSprite);

        this.speedLimitText = game.add.text(
            0,
            -this.signSprite.height + this.signSprite.width / 2 + 3,
            speedLimit,
            {
                align: 'center',
            }
        );
        this.speedLimitText.font = 'Arial';
        this.speedLimitText.fontSize = 30;
        this.speedLimitText.anchor.set(0.5, 0.5);
        this.group.add(this.speedLimitText);
    }

    update({ dayTime, }) {
        if (dayTime !== this.dayTime) {
            this.dayTime = dayTime;
            const greyShade = this.dayTime * 255;
            this.signSprite.tint = Phaser.Color.getColor(greyShade, greyShade, greyShade);
        }
    }
}

export default RoadSign;
