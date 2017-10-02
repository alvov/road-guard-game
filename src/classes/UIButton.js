class UIButton {
    constructor({ game, name, x, y, width, height, bg, text, }) {
        this.group = game.add.group();
        this.group.x = x;
        this.group.y = y;

        this.buttonGraphics = game.add.graphics();
        this.buttonGraphics.name = name;
        this.buttonGraphics.beginFill(bg);
        this.buttonGraphics.drawRoundedRect(0, 0, width, height, height / 3);
        this.buttonGraphics.endFill();
        this.buttonGraphics.inputEnabled = true;
        this.buttonGraphics.input.useHandCursor = true;
        this.group.add(this.buttonGraphics);

        const quitButtonText = game.add.text(
            width / 2,
            height / 2 + 3,
            text,
            {
                font: '20px Arial',
                fill: '#fff'
            },
        );
        quitButtonText.anchor.set(0.5);
        this.group.add(quitButtonText);
    }
}

export default UIButton;
