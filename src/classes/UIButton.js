class UIButton {
    constructor({ game, name, x, y, width, height, bg, text, style, radius = height / 3 }) {
        this.group = game.add.group();
        this.group.x = x;
        this.group.y = y;

        this.width = width;
        this.height = height;
        this.radius = radius;

        this.initialBg = bg;
        this.initialFontStyle = style || {
            font: `${height / 2}px Arial`,
            fill: '#fff',
        };
        this.initialText = text;

        this.buttonGraphics = game.add.graphics();
        this.buttonGraphics.name = name;
        this.buttonGraphics.inputEnabled = true;
        this.buttonGraphics.input.useHandCursor = true;
        this.group.add(this.buttonGraphics);

        this.quitButtonText = game.add.text(
            width / 2,
            height / 2 + height / 13,
        );
        this.quitButtonText.anchor.set(0.5);
        this.group.add(this.quitButtonText);

        this.reset();
    }

    update({ bg, style, text, } = {}) {
        if (text !== undefined) {
            this.quitButtonText.setText(text);
        }
        if (style) {
            this.quitButtonText.setStyle({
                ...this.initialFontStyle,
                ...style,
            });
        }
        if (bg !== undefined) {
            this.drawGraphics({ bg, });
        }
    }

    reset() {
        this.update({
            bg: this.initialBg,
            style: {},
            text: this.initialText,
        });
    }

    drawGraphics({ bg, }) {
        this.buttonGraphics.beginFill(bg);
        this.buttonGraphics.drawRoundedRect(0, 0, this.width, this.height, this.radius);
        this.buttonGraphics.endFill();
    }
}

export default UIButton;
