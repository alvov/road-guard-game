import Car from '../Car';

class Offroad1 extends Car {
    constructor(props) {
        super({
            ...props,
            spriteKey: 'car02',
            plateNumberPosition: {
                x: 0,
                y: -40,
            },
            rogueSignsPosition: {
                light: [23, -140],
                pass: [-45, -103],
            },
        });
    }
}

export default Offroad1;
