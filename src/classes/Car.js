import PlateNumber from './PlateNumber';
import {
    CAR_COLORS,
    CAR_SPRITE_KEYS,
    CAR_ALLOWED_PLATE_LETTERS,
    CAR_MODE_NORMAL, CAR_MODE_FINED,
} from '../constants';

const CAR_STEERING_SPEED_COEFF = 1.5;
const CAR_ROGUE_FINED_COLOR = 0xF23B3B;
const CAR_ROGUE_FINED_BLINK_DURATION = 400;
const CAR_ROGUE_FINED_BLINK_REPEAT = 4;

class Car {
    constructor({ game, name, rogueSeries, onKill, }) {
        this.game = game;
        this.rogueSeries = rogueSeries;
        this.onKill = onKill;

        const spriteKey = this.game.rnd.pick(CAR_SPRITE_KEYS);
        this.sprite = this.game.add.sprite(0, 0, spriteKey, 0);
        this.sprite.anchor.set(0.5, 1);
        this.sprite.name = name;
        this.sprite.rg = this;
        this.sprite.inputEnabled = true;
        // initially dead
        this.sprite.kill();

        this.detailsSprite = this.game.add.sprite(-this.sprite.width / 2, -this.sprite.height, spriteKey, 1);
        this.sprite.addChild(this.detailsSprite);

        this.position = new Phaser.Point(0, 0);
        this.velocity = new Phaser.Point(0, 0);
        this.moveTargetY = 0;

        this.roadLane = null;
        this.color = null;
        this.isRogue = false;

        this.rogueFinedTimer = this.game.time.create(false);

        this.plateNumber = new PlateNumber({
            game: this.game,
            x: 0,
            y: -13,
            ...this.plateNumber,
        });
        this.sprite.addChild(this.plateNumber.group);

        this.mode = CAR_MODE_NORMAL;
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
        if (this.rogueFinedTimer.running) {
            this.sprite.tint = Math.floor(this.rogueFinedTimer.ms / CAR_ROGUE_FINED_BLINK_DURATION) % 2 ?
                this.color :
                CAR_ROGUE_FINED_COLOR;
        }
    }

    handleRogueFinedTimerComplete() {
        this.rogueFinedTimer.stop();
        this.sprite.tint = this.color;
    }

    setMode(mode) {
        switch (mode) {
            case CAR_MODE_FINED: {
                if (this.isRogue) {
                    this.rogueFinedTimer.add(
                        CAR_ROGUE_FINED_BLINK_DURATION * 2 * CAR_ROGUE_FINED_BLINK_REPEAT,
                        this.handleRogueFinedTimerComplete,
                        this
                    );
                    this.rogueFinedTimer.start();
                }
                break;
            }
        }
        this.mode = mode;
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
        this.setMode(CAR_MODE_NORMAL);

        this.isRogue = isRogue;

        this.plateNumber.setText(this.generatePlateNumber());

        this.position.set(x, y);
        this.moveToY(y, roadLane);
        this.velocity.x = speed;
        this.color = this.generateBodyColor();
        this.sprite.tint = this.color;
        this.sprite.revive();
    }

    kill() {
        this.sprite.kill();
        this.onKill(this);
    }
}

export default Car;
