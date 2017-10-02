import levels from './levels';

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

export function getLevel(levelId = getNextLevelId()) {
    return levels[levelId];
}

export function getNextLevelId(currentLevel = 'level0') {
    const currentLevelNumber = Number(currentLevel.substr(5));
    const nextLevelId = 'level' + (currentLevelNumber + 1);
    if (levels.hasOwnProperty(nextLevelId)) {
        return nextLevelId;
    } else {
        return null;
    }
}
