import PlateNumber from './PlateNumber';
import {
    CAR_COLORS,
    CAR_SPRITE_KEYS,
    CAR_ALLOWED_PLATE_LETTERS,
} from '../constants';

const CAR_STEERING_SPEED_COEFF = 1.5;

class Car {
    constructor({ game, name, rogueSeries }) {
        this.game = game;
        this.rogueSeries = rogueSeries;

        const spriteKey = this.game.rnd.pick(CAR_SPRITE_KEYS);
        this.sprite = this.game.add.sprite(0, 0, spriteKey, 0);
        this.sprite.anchor.set(0.5, 1);
        this.sprite.name = name;
        this.sprite.rg = this;
        // initially dead
        this.sprite.kill();

        this.detailsSprite = this.game.add.sprite(-this.sprite.width / 2, -this.sprite.height, spriteKey, 1);
        this.sprite.addChild(this.detailsSprite);

        this.position = new Phaser.Point(0, 0);
        this.velocity = new Phaser.Point(0, 0);
        this.moveTargetY = 0;

        this.roadLane = null;
        this.isRogue = false;

        this.plateNumber = new PlateNumber({
            game: this.game,
            x: 0,
            y: -7,
            ...this.plateNumber,
        });
        this.sprite.addChild(this.plateNumber.group);
    }

    get isSteering() {
        return this.velocity.y !== 0;
    }

    preUpdate() {
        this.position.add(
            this.velocity.x * this.game.time.physicsElapsed,
            this.velocity.y * this.game.time.physicsElapsed
        );

        if (this.moveTargetY !== this.position.y) {
            if (
                this.velocity.y > 0 && this.position.y >= this.moveTargetY ||
                this.velocity.y < 0 && this.position.y <= this.moveTargetY
            ) {
                this.position.y = this.moveTargetY;
                // clear moveTargetY
                this.moveToY(this.position.y);
            }
        }
    }

    update({ x, y, scale }) {
        this.sprite.position.set(x, y);
        this.sprite.scale.set(scale);
    }

    moveToY(y, roadLane = this.roadLane) {
        this.moveTargetY = y;
        this.roadLane = roadLane;
        this.velocity.y = Math.sign(y - this.position.y) * this.velocity.x * CAR_STEERING_SPEED_COEFF;
    }

    generatePlateNumber() {
        let letters = '';
        let numbers = '';
        if (this.isRogue) {
            letters = this.game.rnd.pick(this.rogueSeries);
            numbers = String(this.game.rnd.integerInRange(0, 9)).repeat(3);
        } else {
            for (let i = 0; i < 3; i++) {
                letters += this.game.rnd.pick(CAR_ALLOWED_PLATE_LETTERS);
                numbers += String(this.game.rnd.integerInRange(0, 9));
            }
        }
        return { letters, numbers, };
    }

    generateBodyColor() {
        if (this.isRogue) {
            return CAR_COLORS[0];
        } else {
            return this.game.rnd.pick(CAR_COLORS);
        }
    }

    revive({ x, y, roadLane, speed, isRogue }) {
        console.log(this.sprite.name, speed);
        this.isRogue = isRogue;

        this.plateNumber.setText(this.generatePlateNumber());

        this.position.set(x, y);
        this.moveToY(y, roadLane);
        this.velocity.x = speed;
        this.sprite.tint = this.generateBodyColor();
        this.sprite.revive();
    }

    kill() {
        this.sprite.kill();
    }
}

export default Car;
