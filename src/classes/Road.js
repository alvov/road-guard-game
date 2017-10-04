import {
    CAR_RELATIVE_WIDTH,
    COLOR,
} from '../constants';

class Road {
    constructor({ game, length, lanes, laneWidth, }) {
        this.game = game;
        this.length = length;
        this.lanes = lanes;
        this.laneWidth = laneWidth;
        this.width = this.laneWidth * this.lanes;

        this.group = this.game.add.group();

        this.groundHeight = this.game.height * 4 / 5;
        const groundTile = this.game.add.tileSprite(
            0,
            this.game.height - this.groundHeight,
            this.game.width,
            this.groundHeight,
            'ground'
        );
        this.group.add(groundTile);

        this.roadWidthTop = this.game.width / 3;
        this.roadOffsetLeft = (this.game.width - this.roadWidthTop) / 2;
        this.roadWidthBottom = (this.game.width - this.roadOffsetLeft) / (this.lanes * 2 - 1) * (this.lanes * 2);
        this.mainRatio = this.roadWidthBottom / this.roadWidthTop;

        this.topLeft = new Phaser.Point(this.roadOffsetLeft, this.game.height - this.groundHeight);

        this.roadGraphics = this.game.add.graphics(0, 0, this.group);
        this.roadGraphics.beginFill(COLOR.ROAD);
        this.roadGraphics.drawPolygon([
            this.topLeft,
            { x: this.roadOffsetLeft + this.roadWidthTop, y: this.topLeft.y },
            { x: this.roadOffsetLeft + this.roadWidthBottom, y: this.game.height },
            { x: this.roadOffsetLeft, y: this.game.height },
        ]);
        this.roadGraphics.endFill();
    }

    getProjection({ x, y }) {
        const ratioX = x / this.length;
        const relativeY = (this.roadWidthTop - y / this.width * this.roadWidthTop);
        return {
            x: this.topLeft.x + relativeY * (1 + ratioX * (this.mainRatio - 1)),
            y: this.topLeft.y + Math.abs(ratioX) * this.groundHeight,
            scale: (this.roadWidthTop + ratioX * (this.roadWidthBottom - this.roadWidthTop))
                / this.lanes / CAR_RELATIVE_WIDTH,
        };
    }

    getLaneCenter(index) {
        return this.laneWidth * (0.5 + index);
    }
}

export default Road;
