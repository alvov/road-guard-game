const PLATE_NUMBER_WIDTH = 21;
const PLATE_NUMBER_HEIGHT = 6;

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
            1,
        );
        this.plateGraphics.endFill();
        this.group.add(this.plateGraphics);

        this.leftLetter = this.game.add.text(
            1,
            -height + 1,
            '',
            {
                font: `${height - 2}px Arial`,
                fill: '#000'
            }
        );
        this.leftLetter.lineSpacing = 0;
        this.group.add(this.leftLetter);

        this.rightLetters = this.game.add.text(
            width - 1,
            -height + 1,
            '',
            {
                font: `${height - 2}px Arial`,
                fill: '#000'
            }
        );
        this.rightLetters.anchor.set(1, 0);
        this.leftLetter.lineSpacing = 0;
        this.group.add(this.rightLetters);

        this.numbersText = this.game.add.text(
            height - 1,
            -height,
            '',
            {
                font: `${height - 1}px Arial`,
                fill: '#000'
            }
        );
        this.group.add(this.numbersText);
    }

    setText({ letters, numbers, }) {
        console.log(letters, numbers);
        this.letters = letters;
        this.numbers = numbers;

        this.leftLetter.setText(this.letters[0]);
        this.rightLetters.setText(this.letters.substr(1));
        this.numbersText.setText(this.numbers);
    }
}

export default PlateNumber;
