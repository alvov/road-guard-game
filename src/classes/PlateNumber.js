const PLATE_NUMBER_WIDTH = 54;
const PLATE_NUMBER_HEIGHT = 14;

class PlateNumber {
    constructor({ game, x, y, width = PLATE_NUMBER_WIDTH, height = PLATE_NUMBER_HEIGHT, }) {
        this.game = game;
        this.group = this.game.add.group();
        this.group.x = x - width / 2;
        this.group.y = y;

        this.letters = '';
        this.numbers = '';

        this.plateGraphics = this.game.add.graphics();
        this.plateGraphics.beginFill(0xffffff);
        this.plateGraphics.drawRoundedRect(
            0,
            -height,
            width,
            height,
            2,
        );
        this.plateGraphics.endFill();
        this.group.add(this.plateGraphics);

        this.text = this.game.add.text(
            width / 2,
            -height,
            '',
            {
                font: `${height - 1}px Arial`,
                fontVariant: 'small-caps',
                fill: '#000',
            }
        );
        this.text.anchor.set(0.5, 0);
        this.text.cacheAsBitmap = true;
        this.group.add(this.text);
    }

    setText({ letters, numbers, }) {
        this.letters = letters;
        this.numbers = numbers;

        this.text.setText([
            this.letters[0].toLowerCase(),
            this.numbers,
            this.letters.substr(1).toLowerCase()
        ].join('.'));
        this.text.addColor('#fff', 1);
        this.text.addColor('#000', 2);
        this.text.addColor('#fff', 5);
        this.text.addColor('#000', 6);
        this.text.updateCache();
    }
}

export default PlateNumber;
