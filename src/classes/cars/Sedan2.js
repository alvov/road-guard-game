import Car from '../Car';

class Sedan2 extends Car {
    constructor(props) {
        super({
            ...props,
            spriteKey: 'car03',
            plateNumberPosition: {
                x: 0,
                y: -22,
            },
            rogueSignsPosition: {
                light: [22, -103],
                pass: [-49, -77],
            },
        });
    }
}

export default Sedan2;
