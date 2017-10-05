import Car from '../Car';

class Offroad2 extends Car {
    constructor(props) {
        super({
            ...props,
            spriteKey: 'car04',
            plateNumberPosition: {
                x: 0,
                y: -36,
            },
            rogueSignsPosition: {
                light: [20, -132],
                pass: [-52, -99],
            },
        });
    }
}

export default Offroad2;
