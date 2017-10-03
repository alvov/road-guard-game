import Car from '../Car';

class Sedan1 extends Car {
    constructor(props) {
        super({
            ...props,
            spriteKey: 'car01',
            plateNumberPosition: {
                x: 0,
                y: -13,
            },
            rogueSignsPosition: {
                light: [22, -101],
                pass: [-43, -78],
            },
        });
    }
}

export default Sedan1;
