import levels from '../assets/levels';

const LS_KEY = '_rgml';

class Level {
    constructor() {
        this.lsAvailable = Level.lsAvailable();
        this.count = Object.keys(levels).length;
    }

    get maxLevel() {
        if (this.lsAvailable) {
            const maxLevel = window.localStorage.getItem(LS_KEY);
            if (maxLevel) {
                return Number(maxLevel);
            }
        }
        return 1;
    }

    set maxLevel(value) {
        if (this.lsAvailable) {
            if (value > this.maxLevel) {
                window.localStorage.setItem(LS_KEY, value);
            }
        }
    }

    static lsAvailable() {
        const tmp = 'rg_tmp';
        try {
            window.localStorage.setItem(tmp, tmp);
            window.localStorage.removeItem(tmp);
            return true;
        } catch(e) {
            return false;
        }
    }

    static getLevelNumber(levelId) {
        return Number(levelId.substr(5));
    }

    static getNextLevelId(currentLevelId = 'level0') {
        const nextLevelId = 'level' + (Level.getLevelNumber(currentLevelId) + 1);
        if (levels.hasOwnProperty(nextLevelId)) {
            return nextLevelId;
        } else {
            return null;
        }
    }

    static getLevelById(levelId) {
        if (levelId === null || !levels.hasOwnProperty(levelId)) {
            return null;
        }
        return levels[levelId];
    }

    static getLevelByNumber(levelNumber) {
        return Level.getLevelById('level' + levelNumber);
    }

    static getNextLevelById(levelId) {
        return Level.getLevelById(Level.getNextLevelId(levelId));
    }
}

export default Level;
