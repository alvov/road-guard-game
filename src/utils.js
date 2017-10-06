import { FINES } from './constants';

export function getFormattedTime(seconds) {
    return String(Math.floor(seconds / 60)).padStart(2, '0') + ':' +
        String(seconds % 60).padStart(2, '0');
}

export function getFormattedCurrency(value, currency) {
    const sign = value < 0;
    value = String(Math.abs(value));
    let result = '';
    for (let i = 0; i < value.length; i++) {
        if (i % 3 === 0) {
            result = ' ' + result;
        }
        result = value.charAt(value.length - i - 1) + result;
    }
    return (sign ? '-' : '') + result + currency;
}

export function getFine(speed, speedLimit) {
    let result = 0;
    for (let i = 0; i < FINES.length; i++) {
        const [speedExcess, fine] = FINES[i];
        if (speed < speedExcess + speedLimit) {
            result = fine;
            break;
        }
    }
    return result;
}

export function interpolateColor(color1, color2, percent) {
    const src1 = Phaser.Color.getRGB(color1);
    const src2 = Phaser.Color.getRGB(color2);
    const r = ((src2.red - src1.red) * percent) + src1.red;
    const g = ((src2.green - src1.green) * percent) + src1.green;
    const b = ((src2.blue - src1.blue) * percent) + src1.blue;

    return Phaser.Color.getColor(r, g, b);
}