class UIColumns {
    constructor({ game, x, y, style = {}, lineSpacing, columnSpacing, }) {
        this.game = game;

        this.group = this.game.add.group();
        this.group.x = x;
        this.group.y = y;

        this.style = style;
        this.lineSpacing = lineSpacing;
        this.columnSpacing = columnSpacing;
    }

    setText(text) {
        this.group.removeAll();

        let leftColumnWidth = 0;
        let lineY = 0;

        text.forEach(([[textLeft, fillLeft,],], i) => {
            const label = this.createTextLine(
                0,
                lineY,
                textLeft,
                fillLeft,
            );
            if (label.width > leftColumnWidth) {
                leftColumnWidth = label.width;
            }
            lineY += label.height + this.lineSpacing;
            this.group.addChild(label);
        });

        leftColumnWidth += this.columnSpacing;
        lineY = 0;

        text.forEach(([_, [textRight, fillRight,]], i) => {
            const label = this.createTextLine(
                leftColumnWidth,
                lineY,
                textRight,
                fillRight,
            );
            lineY += label.height + this.lineSpacing;
            this.group.addChild(label);
        });
    }

    createTextLine(x, y, text, fill,) {
        const currentFontStyles = {
            ...this.style
        };
        if (fill) {
            currentFontStyles.fill = fill;
        }
        return this.game.add.text(
            x,
            y,
            text,
            currentFontStyles,
        );
    }
}

export default UIColumns
