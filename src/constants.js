export const UI_OFFSET = 10;

export const COLOR_HEX = {
    RED: '#F23B3B',
    YELLOW: '#FFFF00',
    GREEN: '#72C636',
    MAROON: '#800000',
    STEEL: '#AAB0B6',
    SPACE_GREY: '#252525',
    MIDNIGHT_BLUE: '#191970',
    FLORAL_WHITE: '#FFFAF0',
    RADAR_SCREEN: '#B2B7B1',
    RADAR_SCREEN_RED: '#DDAAAA',
    ROAD: '#45454A',
    GRASS: '#517F30',
    SKY: '#87CEFA',
    CAR_WINDOWS: '#778899',
    CAR_LIGHTS: '#FCFF9F',
    MAIN: '#312162',
};

export const COLOR = Object.keys(COLOR_HEX).reduce((result, colorKey) => {
    result[colorKey] = Phaser.Color.hexToRGB(COLOR_HEX[colorKey]);
    return result;
}, {});

export const STATE_BOOT = 'boot';
export const STATE_LOADING = 'loading';
export const STATE_MENU = 'menu';
export const STATE_GAME = 'game';

export const LANG_RU = 'ru';
export const LANG_EN = 'en';

export const END_GAME_TIME_OUT = 'timeOut';
export const END_GAME_WIN = 'win';

export const CAR_MODE_NORMAL = 'normal';
export const CAR_MODE_FINED = 'fined';

export const RADAR_MODE_EMPTY = 'empty';
export const RADAR_MODE_COMPUTING = 'computing';
export const RADAR_MODE_FINE = 'fine';
export const RADAR_MODE_DISMISS = 'dismiss';
export const RADAR_MODE_FINED = 'fined';
export const RADAR_MODE_ROGUE = 'rogue';
export const RADAR_MODE_ALREADY_FINED = 'alreadyFined';
export const RADAR_MODE_ERROR = 'error';

export const I18N_GAME_TITLE = 'gameTitle';
export const I18N_MENU_BACK = 'menuBack';
export const I18N_MENU_START = 'menuStart';
export const I18N_UI_LEVEL = 'uiLevel';
export const I18N_UI_LOADING = 'uiLoading';
export const I18N_UI_PAUSE = 'uiPause';
export const I18N_UI_VER = 'uiVer';
export const I18N_UI_BUTTON_FINE = 'uiBtnFine';
export const I18N_UI_BUTTON_QUIT = 'uiBtnQuit';
export const I18N_UI_BUTTON_NEXT = 'uiBtnNext';
export const I18N_UI_BUTTON_PLAY = 'uiBtnPlay';
export const I18N_UI_BUTTON_REPLAY = 'uiBtnReplay';
export const I18N_CURRENCY = 'currency';
export const I18N_RADAR_EMPTY = 'radarEmpty';
export const I18N_RADAR_METRICS = 'radarMetrics';
export const I18N_RADAR_WAIT = 'radarWait';
export const I18N_RADAR_FINED = 'radarFined';
export const I18N_RADAR_ROGUE = 'radarRogue';
export const I18N_RADAR_ALREADY_FINED = 'radarAlreadyFined';
export const I18N_RADAR_ERROR = 'radarError';
export const I18N_END_WIN = 'endWin';
export const I18N_END_LOOSE = 'endLoose';
export const I18N_STATS_TIME = 'statsTime';
export const I18N_STATS_FINES = 'statsFines';
export const I18N_STATS_WRONG = 'statsWrong';
export const I18N_STATS_MISSED = 'statsMissed';
export const I18N_RULES_GOAL = 'rulesGoal';
export const I18N_RULES_AUTHORITIES = 'rulesAuth';

export const CAR_RELATIVE_WIDTH = 200;
export const CAR_COLORS = [
    COLOR.SPACE_GREY,
    COLOR.MAROON,
    COLOR.STEEL,
    COLOR.MIDNIGHT_BLUE,
    COLOR.FLORAL_WHITE,
];
export const CAR_ALLOWED_PLATE_LETTERS = [
    'A', 'B', 'C', 'E', 'H', 'K', 'M', 'O', 'P', 'T', 'X'
];

export const FINES = [
    [20, 0, 50],
    [40, 500, 30],
    [60, 1500, 10],
    [80, 2500, 8],
    [100, 5000, 2]
];

export const WEATHER_FOG = 'fog';
export const WEATHER_THUNDER = 'thunder';
