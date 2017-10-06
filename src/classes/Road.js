import {
    CAR_RELATIVE_WIDTH,
    COLOR,
} from '../constants';

class Road {
    constructor({ game, length, lanes, laneWidth, height, }) {
        this.game = game;
        this.length = length;
        this.lanes = lanes;
        this.laneWidth = laneWidth;
        this.width = this.laneWidth * this.lanes;
        this.dayTime = null;

        this.group = this.game.add.group();

        this.groundHeight = height;
        this.groundTile = this.game.add.tileSprite(
            0,
            this.game.height - this.groundHeight,
            this.game.width,
            this.groundHeight,
            'ground'
        );
        this.group.add(this.groundTile);

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

        this.drawRoadMarking();
    }

    update({ dayTime, }) {
        if (dayTime !== this.dayTime) {
            this.dayTime = dayTime;
            const greyShade = this.dayTime * 255;
            const tint = Phaser.Color.getColor(greyShade, greyShade, greyShade);
            this.roadGraphics.tint = tint;
            this.groundTile.tint = tint;
        }
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

    drawRoadMarking() {
        const roadMarkingWidth = this.laneWidth / 15;
        const roadMarkingWidthHalf = roadMarkingWidth / 2;
        const roadMarkingLength = roadMarkingWidth * 10;
        const roadMarkingGap = 3 * roadMarkingLength;
        const roadMarkingGroup = this.game.add.group();
        for (let i = 1; i < this.lanes; i++) {
            const roadMarkingY = i * this.laneWidth;
            let roadMarkingX = 0;
            while (roadMarkingX < this.length) {
                const topPointProjection = this.getProjection({ x: roadMarkingX, y: roadMarkingY });
                const bottomPointProjection = this.getProjection({
                    x: roadMarkingX + roadMarkingLength * topPointProjection.scale, y: roadMarkingY
                });

                const stroke = this.game.add.graphics();
                stroke.beginFill(0xffffff, 0.8);
                stroke.drawPolygon([
                    {
                        x: topPointProjection.x - roadMarkingWidthHalf * topPointProjection.scale,
                        y: topPointProjection.y,
                    },
                    {
                        x: topPointProjection.x + roadMarkingWidthHalf * topPointProjection.scale,
                        y: topPointProjection.y,
                    },
                    {
                        x: bottomPointProjection.x + roadMarkingWidthHalf * bottomPointProjection.scale,
                        y: bottomPointProjection.y,
                    },
                    {
                        x: bottomPointProjection.x - roadMarkingWidthHalf * bottomPointProjection.scale,
                        y: bottomPointProjection.y,
                    },
                ]);
                stroke.endFill();
                roadMarkingGroup.add(stroke);
                roadMarkingX += (roadMarkingLength + roadMarkingGap) * bottomPointProjection.scale;
            }
        }
        roadMarkingGroup.cacheAsBitmap = true;
        this.group.add(roadMarkingGroup);
    }
}

export default Road;
