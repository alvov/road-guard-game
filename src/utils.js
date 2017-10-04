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
