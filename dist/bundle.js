/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_6", function() { return UI_OFFSET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return COLOR_HEX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_1", function() { return STATE_BOOT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_4", function() { return STATE_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_5", function() { return STATE_MENU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_3", function() { return STATE_HOW_TO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_2", function() { return STATE_GAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return LANG_RU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "R", function() { return LANG_EN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return END_GAME_TIME_OUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return END_GAME_WIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return CAR_MODE_NORMAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CAR_MODE_FINED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "W", function() { return RADAR_MODE_EMPTY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "U", function() { return RADAR_MODE_COMPUTING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Y", function() { return RADAR_MODE_FINE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "V", function() { return RADAR_MODE_DISMISS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Z", function() { return RADAR_MODE_FINED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_0", function() { return RADAR_MODE_ROGUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T", function() { return RADAR_MODE_ALREADY_FINED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "X", function() { return RADAR_MODE_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return I18N_GAME_TITLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return I18N_MENU_BACK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return I18N_MENU_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return I18N_MENU_HOW_TO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return I18N_HOW_TO_GOAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return I18N_HOW_TO_FINE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return I18N_HOW_TO_SPACEBAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return I18N_HOW_TO_AUTHORITIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "N", function() { return I18N_UI_LEVEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "O", function() { return I18N_UI_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return I18N_UI_PAUSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Q", function() { return I18N_UI_VER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return I18N_UI_BUTTON_FINE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return I18N_UI_BUTTON_QUIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return I18N_UI_BUTTON_NEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return I18N_UI_BUTTON_PLAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M", function() { return I18N_UI_BUTTON_REPLAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return I18N_CURRENCY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return I18N_RADAR_EMPTY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return I18N_RADAR_METRICS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return I18N_RADAR_WAIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return I18N_RADAR_FINED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return I18N_RADAR_ROGUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return I18N_RADAR_ALREADY_FINED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return I18N_RADAR_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return I18N_END_WIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return I18N_END_LOOSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return I18N_STATS_TIME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return I18N_STATS_FINES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return I18N_STATS_WRONG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return I18N_STATS_MISSED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return I18N_RULES_GOAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return I18N_RULES_AUTHORITIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return CAR_RELATIVE_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CAR_COLORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CAR_ALLOWED_PLATE_LETTERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return FINES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_7", function() { return WEATHER_FOG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_8", function() { return WEATHER_THUNDER; });
var UI_OFFSET = 10;

var COLOR_HEX = {
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
    MAIN: '#312162'
};

var COLOR = Object.keys(COLOR_HEX).reduce(function (result, colorKey) {
    result[colorKey] = Phaser.Color.hexToRGB(COLOR_HEX[colorKey]);
    return result;
}, {});

var STATE_BOOT = 'boot';
var STATE_LOADING = 'loading';
var STATE_MENU = 'menu';
var STATE_HOW_TO = 'howTo';
var STATE_GAME = 'game';

var LANG_RU = 'ru';
var LANG_EN = 'en';

var END_GAME_TIME_OUT = 'timeOut';
var END_GAME_WIN = 'win';

var CAR_MODE_NORMAL = 'normal';
var CAR_MODE_FINED = 'fined';

var RADAR_MODE_EMPTY = 'empty';
var RADAR_MODE_COMPUTING = 'computing';
var RADAR_MODE_FINE = 'fine';
var RADAR_MODE_DISMISS = 'dismiss';
var RADAR_MODE_FINED = 'fined';
var RADAR_MODE_ROGUE = 'rogue';
var RADAR_MODE_ALREADY_FINED = 'alreadyFined';
var RADAR_MODE_ERROR = 'error';

var I18N_GAME_TITLE = 'gameTitle';
var I18N_MENU_BACK = 'menuBack';
var I18N_MENU_START = 'menuStart';
var I18N_MENU_HOW_TO = 'menuHowTo';
var I18N_HOW_TO_GOAL = 'howToGoal';
var I18N_HOW_TO_FINE = 'howToFine';
var I18N_HOW_TO_SPACEBAR = 'howToSpacebar';
var I18N_HOW_TO_AUTHORITIES = 'howToAuth';
var I18N_UI_LEVEL = 'uiLevel';
var I18N_UI_LOADING = 'uiLoading';
var I18N_UI_PAUSE = 'uiPause';
var I18N_UI_VER = 'uiVer';
var I18N_UI_BUTTON_FINE = 'uiBtnFine';
var I18N_UI_BUTTON_QUIT = 'uiBtnQuit';
var I18N_UI_BUTTON_NEXT = 'uiBtnNext';
var I18N_UI_BUTTON_PLAY = 'uiBtnPlay';
var I18N_UI_BUTTON_REPLAY = 'uiBtnReplay';
var I18N_CURRENCY = 'currency';
var I18N_RADAR_EMPTY = 'radarEmpty';
var I18N_RADAR_METRICS = 'radarMetrics';
var I18N_RADAR_WAIT = 'radarWait';
var I18N_RADAR_FINED = 'radarFined';
var I18N_RADAR_ROGUE = 'radarRogue';
var I18N_RADAR_ALREADY_FINED = 'radarAlreadyFined';
var I18N_RADAR_ERROR = 'radarError';
var I18N_END_WIN = 'endWin';
var I18N_END_LOOSE = 'endLoose';
var I18N_STATS_TIME = 'statsTime';
var I18N_STATS_FINES = 'statsFines';
var I18N_STATS_WRONG = 'statsWrong';
var I18N_STATS_MISSED = 'statsMissed';
var I18N_RULES_GOAL = 'rulesGoal';
var I18N_RULES_AUTHORITIES = 'rulesAuth';

var CAR_RELATIVE_WIDTH = 200;
var CAR_COLORS = [COLOR.SPACE_GREY, COLOR.MAROON, COLOR.STEEL, COLOR.MIDNIGHT_BLUE, COLOR.FLORAL_WHITE];
var CAR_ALLOWED_PLATE_LETTERS = ['A', 'B', 'C', 'E', 'H', 'K', 'M', 'O', 'P', 'T', 'X'];

var FINES = [[20, 0, 50], [40, 500, 30], [60, 1500, 10], [80, 2500, 8], [100, 5000, 2]];

var WEATHER_FOG = 'fog';
var WEATHER_THUNDER = 'thunder';

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = getFormattedTime;
/* harmony export (immutable) */ __webpack_exports__["b"] = getFormattedCurrency;
/* harmony export (immutable) */ __webpack_exports__["a"] = getFine;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(0);
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();



function getFormattedTime(seconds) {
    return String(Math.floor(seconds / 60)).padStart(2, '0') + ':' + String(seconds % 60).padStart(2, '0');
}

function getFormattedCurrency(value, currency) {
    var sign = value < 0;
    value = String(Math.abs(value));
    var result = '';
    for (var i = 0; i < value.length; i++) {
        if (i % 3 === 0) {
            result = ' ' + result;
        }
        result = value.charAt(value.length - i - 1) + result;
    }
    return (sign ? '-' : '') + result + currency;
}

function getFine(speed, speedLimit) {
    var result = 0;
    for (var i = 0; i < __WEBPACK_IMPORTED_MODULE_0__constants__["j" /* FINES */].length; i++) {
        var _FINES$i = _slicedToArray(__WEBPACK_IMPORTED_MODULE_0__constants__["j" /* FINES */][i], 2),
            speedExcess = _FINES$i[0],
            fine = _FINES$i[1];

        if (speed < speedExcess + speedLimit) {
            result = fine;
            break;
        }
    }
    return result;
}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assets_levels__ = __webpack_require__(21);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var LS_KEY = '_rgml';

var Level = function () {
    function Level() {
        _classCallCheck(this, Level);

        this.lsAvailable = Level.lsAvailable();
    }

    _createClass(Level, [{
        key: 'maxLevel',
        get: function get() {
            if (this.lsAvailable) {
                var maxLevel = window.localStorage.getItem(LS_KEY);
                if (maxLevel) {
                    return Number(maxLevel);
                }
            }
            return 1;
        },
        set: function set(value) {
            if (this.lsAvailable) {
                if (value > this.maxLevel) {
                    window.localStorage.setItem(LS_KEY, value);
                }
            }
        }
    }], [{
        key: 'lsAvailable',
        value: function lsAvailable() {
            var tmp = 'rg_tmp';
            try {
                window.localStorage.setItem(tmp, tmp);
                window.localStorage.removeItem(tmp);
                return true;
            } catch (e) {
                return false;
            }
        }
    }, {
        key: 'getLevelNumber',
        value: function getLevelNumber(levelId) {
            return Number(levelId.substr(5));
        }
    }, {
        key: 'getNextLevelId',
        value: function getNextLevelId() {
            var currentLevelId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'level0';

            var nextLevelId = 'level' + (Level.getLevelNumber(currentLevelId) + 1);
            if (__WEBPACK_IMPORTED_MODULE_0__assets_levels__["a" /* default */].hasOwnProperty(nextLevelId)) {
                return nextLevelId;
            } else {
                return null;
            }
        }
    }, {
        key: 'getLevelById',
        value: function getLevelById(levelId) {
            if (levelId === null || !__WEBPACK_IMPORTED_MODULE_0__assets_levels__["a" /* default */].hasOwnProperty(levelId)) {
                return null;
            }
            return __WEBPACK_IMPORTED_MODULE_0__assets_levels__["a" /* default */][levelId];
        }
    }, {
        key: 'getLevelByNumber',
        value: function getLevelByNumber(levelNumber) {
            return Level.getLevelById('level' + levelNumber);
        }
    }, {
        key: 'getNextLevelById',
        value: function getNextLevelById(levelId) {
            return Level.getLevelById(Level.getNextLevelId(levelId));
        }
    }]);

    return Level;
}();

/* harmony default export */ __webpack_exports__["a"] = (Level);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UIButton = function () {
    function UIButton(_ref) {
        var game = _ref.game,
            name = _ref.name,
            x = _ref.x,
            y = _ref.y,
            width = _ref.width,
            height = _ref.height,
            bg = _ref.bg,
            text = _ref.text,
            style = _ref.style,
            _ref$radius = _ref.radius,
            radius = _ref$radius === undefined ? height / 3 : _ref$radius;

        _classCallCheck(this, UIButton);

        this.group = game.add.group();
        this.group.x = x;
        this.group.y = y;

        this.width = width;
        this.height = height;
        this.radius = radius;

        this.initialBg = bg;
        this.initialFontStyle = style || {
            font: height / 2 + 'px Arial',
            fill: '#fff'
        };
        this.initialText = text;

        this.buttonGraphics = game.add.graphics();
        this.buttonGraphics.name = name;
        this.buttonGraphics.inputEnabled = true;
        this.buttonGraphics.input.useHandCursor = true;
        this.group.add(this.buttonGraphics);

        this.quitButtonText = game.add.text(width / 2, height / 2 + height / 13);
        this.quitButtonText.anchor.set(0.5);
        this.group.add(this.quitButtonText);

        this.reset();
    }

    _createClass(UIButton, [{
        key: 'update',
        value: function update() {
            var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                bg = _ref2.bg,
                style = _ref2.style,
                text = _ref2.text;

            if (text !== undefined) {
                this.quitButtonText.setText(text);
            }
            if (style) {
                this.quitButtonText.setStyle(_extends({}, this.initialFontStyle, style));
            }
            if (bg !== undefined) {
                this.drawGraphics({ bg: bg });
            }
        }
    }, {
        key: 'reset',
        value: function reset() {
            this.update({
                bg: this.initialBg,
                style: {},
                text: this.initialText
            });
        }
    }, {
        key: 'drawGraphics',
        value: function drawGraphics(_ref3) {
            var bg = _ref3.bg;

            this.buttonGraphics.beginFill(bg);
            this.buttonGraphics.drawRoundedRect(0, 0, this.width, this.height, this.radius);
            this.buttonGraphics.endFill();
        }
    }]);

    return UIButton;
}();

/* harmony default export */ __webpack_exports__["a"] = (UIButton);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var pack = {
    initial: [{
        type: 'spritesheet',
        key: 'langButtons',
        url: __webpack_require__(11),
        frameWidth: 50,
        frameHeight: 50
    }, {
        type: 'spritesheet',
        key: 'startMenu',
        url: __webpack_require__(12),
        frameWidth: 205,
        frameHeight: 600
    }],
    game: [{
        type: 'image',
        key: 'ground',
        url: __webpack_require__(13),
        overwrite: false
    }, {
        type: 'image',
        key: 'rain',
        url: __webpack_require__(14),
        overwrite: false
    }, {
        type: 'spritesheet',
        key: 'roadSign',
        url: __webpack_require__(15),
        frameWidth: 60,
        frameHeight: 140
    }, {
        type: 'spritesheet',
        key: 'car01',
        url: __webpack_require__(16),
        frameWidth: 152,
        frameHeight: 102
    }, {
        type: 'spritesheet',
        key: 'car02',
        url: __webpack_require__(17),
        frameWidth: 150,
        frameHeight: 141
    }, {
        type: 'spritesheet',
        key: 'rogueSigns',
        url: __webpack_require__(18),
        frameWidth: 11,
        frameHeight: 12
    }]
};

/* harmony default export */ __webpack_exports__["a"] = (JSON.stringify(pack));

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__PlateNumber__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(0);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var CAR_STEERING_DURATION = 600;
var CAR_ROGUE_FINED_BLINK_DURATION = 400;
var CAR_ROGUE_FINED_BLINK_REPEAT = 4;

var Car = function () {
    function Car(_ref) {
        var game = _ref.game,
            name = _ref.name,
            rogueSeries = _ref.rogueSeries,
            onKill = _ref.onKill,
            spriteKey = _ref.spriteKey,
            plateNumberPosition = _ref.plateNumberPosition,
            rogueSignsPosition = _ref.rogueSignsPosition;

        _classCallCheck(this, Car);

        this.game = game;
        this.rogueSeries = rogueSeries;
        this.onKill = onKill;

        this.sprite = this.game.add.sprite(0, 0, spriteKey, 0);
        this.sprite.anchor.set(0.5, 1);
        this.sprite.name = name;
        this.sprite.rg = this;
        this.sprite.inputEnabled = true;
        // initially dead
        this.sprite.kill();

        this.detailsSprite = this.game.add.sprite(-this.sprite.width / 2, -this.sprite.height, spriteKey, 1);
        this.sprite.addChild(this.detailsSprite);

        this.rogueSignsPosition = rogueSignsPosition;
        this.rogueSignSprite = this.game.add.sprite(0, 0, 'rogueSigns');
        this.rogueSignSprite.anchor.set(0, 1);
        this.sprite.addChild(this.rogueSignSprite);

        this.position = new Phaser.Point(0, 0);
        this.velocity = new Phaser.Point(0, 0);
        this.steeringTween = null;

        this.roadLane = null;
        this.color = null;
        this.isRogue = false;

        this.rogueFinedTimer = this.game.time.create(false);

        this.plateNumber = new __WEBPACK_IMPORTED_MODULE_0__PlateNumber__["a" /* default */](_extends({
            game: this.game
        }, plateNumberPosition, this.plateNumber));
        this.sprite.addChild(this.plateNumber.group);

        this.mode = __WEBPACK_IMPORTED_MODULE_1__constants__["d" /* CAR_MODE_NORMAL */];
    }

    _createClass(Car, [{
        key: 'preUpdate',
        value: function preUpdate() {
            this.position.add(this.velocity.x * this.game.time.physicsElapsed, this.velocity.y * this.game.time.physicsElapsed);
        }
    }, {
        key: 'update',
        value: function update(_ref2) {
            var x = _ref2.x,
                y = _ref2.y,
                scale = _ref2.scale;

            this.sprite.position.set(x, y);
            this.sprite.scale.set(scale);
            if (this.rogueFinedTimer.running) {
                this.sprite.tint = Math.floor(this.rogueFinedTimer.ms / CAR_ROGUE_FINED_BLINK_DURATION) % 2 ? this.color : __WEBPACK_IMPORTED_MODULE_1__constants__["f" /* COLOR */].RED;
            }
        }
    }, {
        key: 'handleRogueFinedTimerComplete',
        value: function handleRogueFinedTimerComplete() {
            this.rogueFinedTimer.stop();
            this.sprite.tint = this.color;
        }
    }, {
        key: 'setMode',
        value: function setMode(mode) {
            switch (mode) {
                case __WEBPACK_IMPORTED_MODULE_1__constants__["c" /* CAR_MODE_FINED */]:
                    {
                        if (this.isRogue) {
                            this.rogueFinedTimer.add(CAR_ROGUE_FINED_BLINK_DURATION * 2 * CAR_ROGUE_FINED_BLINK_REPEAT, this.handleRogueFinedTimerComplete, this);
                            this.rogueFinedTimer.start();
                        }
                        break;
                    }
            }
            this.mode = mode;
        }
    }, {
        key: 'moveToY',
        value: function moveToY(y, roadLane) {
            this.roadLane = roadLane;
            if (this.steeringTween) {
                this.steeringTween.stop();
            }
            this.steeringTween = this.game.add.tween(this.position).to({ y: y }, CAR_STEERING_DURATION, Phaser.Easing.Quadratic.InOut, true);
        }
    }, {
        key: 'generatePlateNumber',
        value: function generatePlateNumber() {
            var letters = '';
            var numbers = '';
            if (this.isRogue) {
                letters = this.game.rnd.pick(this.rogueSeries);
                numbers = String(this.game.rnd.integerInRange(0, 9)).repeat(3);
            } else {
                for (var i = 0; i < 3; i++) {
                    letters += this.game.rnd.pick(__WEBPACK_IMPORTED_MODULE_1__constants__["a" /* CAR_ALLOWED_PLATE_LETTERS */]);
                    numbers += String(this.game.rnd.integerInRange(0, 9));
                }
            }
            return { letters: letters, numbers: numbers };
        }
    }, {
        key: 'generateBodyColor',
        value: function generateBodyColor() {
            if (this.isRogue) {
                return __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* CAR_COLORS */][0];
            } else {
                return this.game.rnd.pick(__WEBPACK_IMPORTED_MODULE_1__constants__["b" /* CAR_COLORS */]);
            }
        }
    }, {
        key: 'revive',
        value: function revive(_ref3) {
            var x = _ref3.x,
                y = _ref3.y,
                roadLane = _ref3.roadLane,
                speed = _ref3.speed,
                isRogue = _ref3.isRogue;

            this.setMode(__WEBPACK_IMPORTED_MODULE_1__constants__["d" /* CAR_MODE_NORMAL */]);

            this.isRogue = isRogue;

            this.rogueSignSprite.visible = false;
            if (this.isRogue) {
                var rogueSigns = Object.keys(this.rogueSignsPosition);
                var randomNumber = this.game.rnd.integerInRange(0, 2 * rogueSigns.length);

                if (randomNumber < rogueSigns.length) {
                    var _rogueSignSprite$posi;

                    this.rogueSignSprite.frame = randomNumber;
                    (_rogueSignSprite$posi = this.rogueSignSprite.position).set.apply(_rogueSignSprite$posi, _toConsumableArray(this.rogueSignsPosition[rogueSigns[randomNumber]]));
                    this.rogueSignSprite.visible = true;
                }
            }

            this.plateNumber.setText(this.generatePlateNumber());

            this.position.set(x, y);
            this.roadLane = roadLane;
            this.velocity.x = speed;
            this.color = this.generateBodyColor();
            this.sprite.tint = this.color;
            this.sprite.revive();
        }
    }, {
        key: 'kill',
        value: function kill() {
            this.sprite.kill();
            this.onKill(this);
        }
    }]);

    return Car;
}();

/* harmony default export */ __webpack_exports__["a"] = (Car);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UIProgressBar = function () {
    function UIProgressBar(_ref) {
        var game = _ref.game,
            x = _ref.x,
            y = _ref.y,
            width = _ref.width,
            height = _ref.height,
            color = _ref.color,
            _ref$radius = _ref.radius,
            radius = _ref$radius === undefined ? 0 : _ref$radius;

        _classCallCheck(this, UIProgressBar);

        this.game = game;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.radius = radius;
        this.color = color;

        this.graphics = this.game.add.graphics();
    }

    _createClass(UIProgressBar, [{
        key: "update",
        value: function update(_ref2) {
            var percent = _ref2.percent,
                _ref2$color = _ref2.color,
                color = _ref2$color === undefined ? this.color : _ref2$color;

            percent = this.game.math.clamp(percent, 0, 1);
            this.graphics.clear();
            this.graphics.lineStyle(1, color);
            if (this.radius === 0) {
                this.graphics.drawRect(this.x, this.y, this.width, this.height);
            } else {
                this.graphics.drawRoundedRect(this.x, this.y, this.width, this.height, this.radius);
            }
            this.graphics.beginFill(color);
            this.graphics.drawRoundedRect(this.x, this.y, this.width * percent, this.height, this.radius);
            this.graphics.endFill();
        }
    }]);

    return UIProgressBar;
}();

/* harmony default export */ __webpack_exports__["a"] = (UIProgressBar);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var OVERLAY_TWEEN_DURATION = 200;

var UIScreen = function () {
    function UIScreen(_ref) {
        var game = _ref.game,
            height = _ref.height;

        _classCallCheck(this, UIScreen);

        this.game = game;

        this.leftOffset = this.game.width / 15;
        this.width = this.game.width - 2 * this.leftOffset;
        this.height = height;
        this.topOffset = (this.game.height - height) / 2;

        this.group = this.game.add.group();
        this.group.x = this.leftOffset;
        this.group.y = this.topOffset;

        this.overlay = this.game.add.graphics();
        this.overlay.beginFill(0xffffff);
        this.overlay.drawRoundedRect(0, 0, this.width, this.height, 20);
        this.overlay.endFill();
        this.overlay.scale.set(0);
        this.group.add(this.overlay);

        this.overlayTween = this.game.add.tween(this.overlay.scale).to({
            x: 1,
            y: 1
        }, OVERLAY_TWEEN_DURATION);

        this.contentGroup = this.game.add.group();
        this.group.add(this.contentGroup);

        this.hide();
    }

    _createClass(UIScreen, [{
        key: "handleOverlayTweenComplete",
        value: function handleOverlayTweenComplete() {
            this.contentGroup.visible = true;
        }
    }, {
        key: "show",
        value: function show() {
            var _overlayTween$onCompl;

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            (_overlayTween$onCompl = this.overlayTween.onComplete).addOnce.apply(_overlayTween$onCompl, [this.handleOverlayTweenComplete, this, 0].concat(args));
            this.overlayTween.start();

            this.overlay.visible = true;
        }
    }, {
        key: "hide",
        value: function hide() {
            this.overlay.visible = false;
            this.contentGroup.visible = false;
        }
    }]);

    return UIScreen;
}();

/* harmony default export */ __webpack_exports__["a"] = (UIScreen);

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_css__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__index_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__states_Boot__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__states_Loading__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__states_StartMenu__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__states_HowTo__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__states_Game__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__constants__ = __webpack_require__(0);
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();











window.WebFontConfig = {
    google: {
        families: ['Press Start 2P:400:latin,cyrillic']
    },
    active: function active() {
        // this fixes mobile browser 100% height issue with address bar and tabs
        setTimeout(function () {
            initGame();
        }, 50);
    }
};

var script = document.createElement('script');
script.src = 'dist/webfontloader.js';
document.head.appendChild(script);

var containerNode = document.querySelector('.js-game-container');

function initGame() {
    var _rgResizeBody = rgResizeBody(),
        _rgResizeBody2 = _slicedToArray(_rgResizeBody, 2),
        gameWidth = _rgResizeBody2[0],
        gameHeight = _rgResizeBody2[1];

    var game = new Phaser.Game({
        width: gameWidth,
        height: gameHeight,
        parent: containerNode,
        antialias: true,
        renderer: Phaser.CANVAS
    });

    game.state.add(__WEBPACK_IMPORTED_MODULE_6__constants__["_1" /* STATE_BOOT */], __WEBPACK_IMPORTED_MODULE_1__states_Boot__["a" /* default */]);
    game.state.add(__WEBPACK_IMPORTED_MODULE_6__constants__["_4" /* STATE_LOADING */], __WEBPACK_IMPORTED_MODULE_2__states_Loading__["a" /* default */]);
    game.state.add(__WEBPACK_IMPORTED_MODULE_6__constants__["_5" /* STATE_MENU */], __WEBPACK_IMPORTED_MODULE_3__states_StartMenu__["a" /* default */]);
    game.state.add(__WEBPACK_IMPORTED_MODULE_6__constants__["_3" /* STATE_HOW_TO */], __WEBPACK_IMPORTED_MODULE_4__states_HowTo__["a" /* default */]);
    game.state.add(__WEBPACK_IMPORTED_MODULE_6__constants__["_2" /* STATE_GAME */], __WEBPACK_IMPORTED_MODULE_5__states_Game__["a" /* default */]);

    game.state.start(__WEBPACK_IMPORTED_MODULE_6__constants__["_1" /* STATE_BOOT */]);
}

window.rgResizeBody = function rgResizeBody() {
    var windowInnerHeight = window.innerHeight;
    if (document.body.clientHeight > windowInnerHeight) {
        document.body.style.height = windowInnerHeight + 'px';
        document.documentElement.style.height = windowInnerHeight + 'px';
    }

    return [containerNode.clientWidth, containerNode.clientHeight];
};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assets_pack__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_i18n__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__classes_Level__ = __webpack_require__(2);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }






var Boot = function () {
    function Boot() {
        _classCallCheck(this, Boot);
    }

    _createClass(Boot, [{
        key: 'init',
        value: function init() {
            this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.scale.pageAlignHorizontally = true;
            this.scale.pageAlignVertically = true;

            this.game.rg = {
                level: null,
                i18n: null
            };
        }
    }, {
        key: 'create',
        value: function create() {
            // events
            this.state.onStateChange.add(this.handleStateChange, this);
            this.scale.onOrientationChange.add(this.handleOrientationChange, this);

            this.game.rg.level = new __WEBPACK_IMPORTED_MODULE_3__classes_Level__["a" /* default */]();

            this.game.rg.i18n = new __WEBPACK_IMPORTED_MODULE_1__classes_i18n__["a" /* default */]({
                game: this.game
            });

            this.state.start(__WEBPACK_IMPORTED_MODULE_2__constants__["_4" /* STATE_LOADING */], true, false, {
                assets: [['pack', 'initial', null, __WEBPACK_IMPORTED_MODULE_0__assets_pack__["a" /* default */]]],
                nextState: [__WEBPACK_IMPORTED_MODULE_2__constants__["_5" /* STATE_MENU */]]
            });
        }
    }, {
        key: 'handleStateChange',
        value: function handleStateChange() {
            this.game.rg.i18n.clear();
        }
    }, {
        key: 'handleOrientationChange',
        value: function handleOrientationChange(scale, prevOrientation, wasIncorrect) {
            var _this = this;

            if (scale.screenOrientation !== prevOrientation && scale.screenOrientation.startsWith('landscape')) {
                setTimeout(function () {
                    var _scale;

                    (_scale = _this.scale).setGameSize.apply(_scale, _toConsumableArray(window.rgResizeBody()));
                }, 500);
            }
        }
    }]);

    return Boot;
}();

/* harmony default export */ __webpack_exports__["a"] = (Boot);

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/66dd3dd498c059b331146e5fe01f17dd.png";

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/133be446d25cf1aa18e900f6617fe882.png";

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/1ba6b0551aff85ce5e09affdb9bbba1d.png";

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/2664e616704ca8545da5897fbd66e2d7.png";

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/75410de91275760b3ce7d204a47f2113.png";

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/d7de3abe4ed1952a2dbfe47bf1cb8356.png";

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/7a77547ddc9e3c11356eca3c2debd9ea.png";

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/f2ffea272ee005bfe9b6c83c53aba816.png";

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assets_i18n__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var i18n = function () {
    function i18n(_ref) {
        var game = _ref.game;

        _classCallCheck(this, i18n);

        this.game = game;
        this.textObjects = [];
        this.currentLang = navigator.language === __WEBPACK_IMPORTED_MODULE_1__constants__["S" /* LANG_RU */] ? __WEBPACK_IMPORTED_MODULE_1__constants__["S" /* LANG_RU */] : __WEBPACK_IMPORTED_MODULE_1__constants__["R" /* LANG_EN */];
        this.translations = __WEBPACK_IMPORTED_MODULE_0__assets_i18n__["a" /* default */];
    }

    _createClass(i18n, [{
        key: 'setLang',
        value: function setLang(lang) {
            var _this = this;

            this.currentLang = lang;
            this.textObjects.forEach(function (_ref2) {
                var inst = _ref2.inst,
                    text = _ref2.text,
                    postfix = _ref2.postfix;

                inst.setText(_this.getTranslation(text) + postfix);
            });
        }
    }, {
        key: 'createText',
        value: function createText(x, y, text, font) {
            var postfix = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';

            var textObject = this.game.add.text(x, y, this.getTranslation(text) + postfix, font);
            this.textObjects.push({
                inst: textObject,
                text: text,
                postfix: postfix
            });
            return textObject;
        }
    }, {
        key: 'getTranslation',
        value: function getTranslation(text) {
            return this.translations[text][this.currentLang];
        }
    }, {
        key: 'clear',
        value: function clear() {
            this.textObjects = [];
        }
    }]);

    return i18n;
}();

/* harmony default export */ __webpack_exports__["a"] = (i18n);

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_js__ = __webpack_require__(0);
var _cnst$I18N_GAME_TITLE;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/* harmony default export */ __webpack_exports__["a"] = (_cnst$I18N_GAME_TITLE = {}, _defineProperty(_cnst$I18N_GAME_TITLE, __WEBPACK_IMPORTED_MODULE_0__constants_js__["n" /* I18N_GAME_TITLE */], {
    en: 'Road Guard',
    ru: 'Дорожный Дозор'
}), _defineProperty(_cnst$I18N_GAME_TITLE, __WEBPACK_IMPORTED_MODULE_0__constants_js__["s" /* I18N_MENU_BACK */], {
    en: '<   Back',
    ru: '<   Назад'
}), _defineProperty(_cnst$I18N_GAME_TITLE, __WEBPACK_IMPORTED_MODULE_0__constants_js__["u" /* I18N_MENU_START */], {
    en: 'Start',
    ru: 'Начать'
}), _defineProperty(_cnst$I18N_GAME_TITLE, __WEBPACK_IMPORTED_MODULE_0__constants_js__["t" /* I18N_MENU_HOW_TO */], {
    en: 'How to play',
    ru: 'Как играть'
}), _defineProperty(_cnst$I18N_GAME_TITLE, __WEBPACK_IMPORTED_MODULE_0__constants_js__["q" /* I18N_HOW_TO_GOAL */], {
    en: 'Reach the needed amount of issued fines (in rubles) before your shift is over.',
    ru: 'Выполните норму по выписанным штрафам, пока не закончилась ваша смена.'
}), _defineProperty(_cnst$I18N_GAME_TITLE, __WEBPACK_IMPORTED_MODULE_0__constants_js__["p" /* I18N_HOW_TO_FINE */], {
    en: 'Choose a car on the road and press \'Fine!\' if its speed is higher than allowed.',
    ru: 'Выберите автомобиль из потока, и если его скорость окажется выше предельно допустимой, нажмите «Штраф!»'
}), _defineProperty(_cnst$I18N_GAME_TITLE, __WEBPACK_IMPORTED_MODULE_0__constants_js__["r" /* I18N_HOW_TO_SPACEBAR */], {
    en: 'You can also use \'spacebar\' key on your keyboard instead of the \'Fine!\' button.',
    ru: 'Вместо кнопки «Штраф!» можно нажимать на «Пробел» на клавиатуре.'
}), _defineProperty(_cnst$I18N_GAME_TITLE, __WEBPACK_IMPORTED_MODULE_0__constants_js__["o" /* I18N_HOW_TO_AUTHORITIES */], {
    en: 'BE CAREFUL! Issuing fines to the cars of the authorities leads to your own penalty!',
    ru: 'БУДЬТЕ ОСТОРОЖНЫ! Штрафы, выписанные «привилегированным» авто, вычтутся из вашей нормы!'
}), _defineProperty(_cnst$I18N_GAME_TITLE, __WEBPACK_IMPORTED_MODULE_0__constants_js__["N" /* I18N_UI_LEVEL */], {
    en: 'Level',
    ru: 'Уровень'
}), _defineProperty(_cnst$I18N_GAME_TITLE, __WEBPACK_IMPORTED_MODULE_0__constants_js__["O" /* I18N_UI_LOADING */], {
    en: 'Loading',
    ru: 'Загрузка'
}), _defineProperty(_cnst$I18N_GAME_TITLE, __WEBPACK_IMPORTED_MODULE_0__constants_js__["P" /* I18N_UI_PAUSE */], {
    en: 'Paused',
    ru: 'Пауза'
}), _defineProperty(_cnst$I18N_GAME_TITLE, __WEBPACK_IMPORTED_MODULE_0__constants_js__["Q" /* I18N_UI_VER */], {
    en: 'ver.',
    ru: 'вер.'
}), _defineProperty(_cnst$I18N_GAME_TITLE, __WEBPACK_IMPORTED_MODULE_0__constants_js__["L" /* I18N_UI_BUTTON_QUIT */], {
    en: 'Quit',
    ru: 'Выход'
}), _defineProperty(_cnst$I18N_GAME_TITLE, __WEBPACK_IMPORTED_MODULE_0__constants_js__["J" /* I18N_UI_BUTTON_NEXT */], {
    en: 'Next',
    ru: 'Дальше'
}), _defineProperty(_cnst$I18N_GAME_TITLE, __WEBPACK_IMPORTED_MODULE_0__constants_js__["K" /* I18N_UI_BUTTON_PLAY */], {
    en: 'Play',
    ru: 'Играть'
}), _defineProperty(_cnst$I18N_GAME_TITLE, __WEBPACK_IMPORTED_MODULE_0__constants_js__["M" /* I18N_UI_BUTTON_REPLAY */], {
    en: 'Try again',
    ru: 'Еще раз'
}), _defineProperty(_cnst$I18N_GAME_TITLE, __WEBPACK_IMPORTED_MODULE_0__constants_js__["I" /* I18N_UI_BUTTON_FINE */], {
    en: 'FINE!',
    ru: 'ШТРАФ!'
}), _defineProperty(_cnst$I18N_GAME_TITLE, __WEBPACK_IMPORTED_MODULE_0__constants_js__["k" /* I18N_CURRENCY */], {
    en: 'rub.',
    ru: 'руб.'
}), _defineProperty(_cnst$I18N_GAME_TITLE, __WEBPACK_IMPORTED_MODULE_0__constants_js__["z" /* I18N_RADAR_METRICS */], {
    en: 'km/h',
    ru: 'км/ч'
}), _defineProperty(_cnst$I18N_GAME_TITLE, __WEBPACK_IMPORTED_MODULE_0__constants_js__["w" /* I18N_RADAR_EMPTY */], {
    en: 'POINT A CAR',
    ru: 'УКАЖИТЕ МАШИНУ'
}), _defineProperty(_cnst$I18N_GAME_TITLE, __WEBPACK_IMPORTED_MODULE_0__constants_js__["B" /* I18N_RADAR_WAIT */], {
    en: 'wait...',
    ru: 'ждите...'
}), _defineProperty(_cnst$I18N_GAME_TITLE, __WEBPACK_IMPORTED_MODULE_0__constants_js__["y" /* I18N_RADAR_FINED */], {
    en: 'Fine',
    ru: 'Штраф'
}), _defineProperty(_cnst$I18N_GAME_TITLE, __WEBPACK_IMPORTED_MODULE_0__constants_js__["A" /* I18N_RADAR_ROGUE */], {
    en: 'AUTHORITY!',
    ru: 'БЛАТНОЙ!'
}), _defineProperty(_cnst$I18N_GAME_TITLE, __WEBPACK_IMPORTED_MODULE_0__constants_js__["v" /* I18N_RADAR_ALREADY_FINED */], {
    en: 'ALREADY FINED!',
    ru: 'ШТРАФ ВЫПИСАН!'
}), _defineProperty(_cnst$I18N_GAME_TITLE, __WEBPACK_IMPORTED_MODULE_0__constants_js__["x" /* I18N_RADAR_ERROR */], {
    en: 'ERROR!',
    ru: 'СБОЙ!'
}), _defineProperty(_cnst$I18N_GAME_TITLE, __WEBPACK_IMPORTED_MODULE_0__constants_js__["l" /* I18N_END_LOOSE */], {
    en: 'You lost!',
    ru: 'Вы проиграли!'
}), _defineProperty(_cnst$I18N_GAME_TITLE, __WEBPACK_IMPORTED_MODULE_0__constants_js__["m" /* I18N_END_WIN */], {
    en: 'You won!',
    ru: 'Вы выиграли!'
}), _defineProperty(_cnst$I18N_GAME_TITLE, __WEBPACK_IMPORTED_MODULE_0__constants_js__["D" /* I18N_RULES_GOAL */], {
    en: 'Goal',
    ru: 'Цель'
}), _defineProperty(_cnst$I18N_GAME_TITLE, __WEBPACK_IMPORTED_MODULE_0__constants_js__["C" /* I18N_RULES_AUTHORITIES */], {
    en: 'Authorities',
    ru: 'Блатные номера'
}), _defineProperty(_cnst$I18N_GAME_TITLE, __WEBPACK_IMPORTED_MODULE_0__constants_js__["G" /* I18N_STATS_TIME */], {
    en: 'Time',
    ru: 'Время'
}), _defineProperty(_cnst$I18N_GAME_TITLE, __WEBPACK_IMPORTED_MODULE_0__constants_js__["E" /* I18N_STATS_FINES */], {
    en: 'Fines',
    ru: 'Штрафов'
}), _defineProperty(_cnst$I18N_GAME_TITLE, __WEBPACK_IMPORTED_MODULE_0__constants_js__["H" /* I18N_STATS_WRONG */], {
    en: 'Authorities',
    ru: 'Блатных'
}), _defineProperty(_cnst$I18N_GAME_TITLE, __WEBPACK_IMPORTED_MODULE_0__constants_js__["F" /* I18N_STATS_MISSED */], {
    en: 'Missed',
    ru: 'Пропущено'
}), _cnst$I18N_GAME_TITLE);

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = ({
    level1: {
        id: 'level1',
        duration: 3 * 60, // s
        goal: 20000,
        speed: {
            limit: 40
        },
        road: {
            start: -100,
            end: 1200,
            length: 800,
            lanes: 3,
            laneWidth: 100
        },
        radar: {
            computing: 1200 // ms
        },
        cars: {
            frequency: 2, // s
            series: ['AMP'],
            rogue: 0.1
        }
    },
    level2: {
        id: 'level2',
        duration: 3 * 60, // s
        goal: 30000,
        speed: {
            limit: 50
        },
        road: {
            start: -100,
            end: 1200,
            length: 800,
            lanes: 3,
            laneWidth: 100
        },
        weather: __WEBPACK_IMPORTED_MODULE_0__constants__["_8" /* WEATHER_THUNDER */],
        radar: {
            computing: 1000 // ms
        },
        cars: {
            frequency: 2, // s
            series: ['AAA', 'AMP'],
            rogue: 0.1
        }
    },
    level3: {
        id: 'level3',
        duration: 3 * 60, // s
        goal: 40000,
        speed: {
            limit: 60
        },
        road: {
            start: -100,
            end: 1200,
            length: 800,
            lanes: 3,
            laneWidth: 100
        },
        weather: __WEBPACK_IMPORTED_MODULE_0__constants__["_7" /* WEATHER_FOG */],
        radar: {
            computing: 900 // ms
        },
        cars: {
            frequency: 2, // s
            series: ['AAA', 'AMP', 'EKX'],
            rogue: 0.15
        }
    }
});

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Loading = function () {
    function Loading() {
        _classCallCheck(this, Loading);
    }

    _createClass(Loading, [{
        key: 'init',
        value: function init(config) {
            this.rg = {
                config: config,
                objects: {
                    textProgress: null
                }
            };
        }
    }, {
        key: 'preload',
        value: function preload() {
            var _this = this;

            this.game.stage.backgroundColor = __WEBPACK_IMPORTED_MODULE_0__constants__["g" /* COLOR_HEX */].MAIN;

            this.rg.config.assets.forEach(function (_ref) {
                var _load, _load2, _load3;

                var _ref2 = _toArray(_ref),
                    assetType = _ref2[0],
                    assetParams = _ref2.slice(1);

                switch (assetType) {
                    case 'pack':
                        (_load = _this.load).pack.apply(_load, _toConsumableArray(assetParams));
                        break;
                    case 'spritesheet':
                        (_load2 = _this.load).spritesheet.apply(_load2, _toConsumableArray(assetParams));
                        break;
                    case 'image':
                        (_load3 = _this.load).image.apply(_load3, _toConsumableArray(assetParams));
                        break;
                }
            });

            this.rg.objects.textLoading = this.game.add.text(this.game.world.centerX - 5, this.game.world.centerY, this.game.rg.i18n.getTranslation(__WEBPACK_IMPORTED_MODULE_0__constants__["O" /* I18N_UI_LOADING */]), {
                font: '26px Arial',
                fill: '#fff'
            });
            this.rg.objects.textLoading.anchor.set(1, 0.5);

            this.rg.objects.textProgress = this.game.add.text(this.game.world.centerX + 5, this.game.world.centerY, '0 %', {
                font: '26px Arial',
                fill: '#fff'
            });
            this.rg.objects.textProgress.anchor.set(0, 0.5);
        }
    }, {
        key: 'loadUpdate',
        value: function loadUpdate() {
            this.rg.objects.textProgress.setText(this.game.load.progress + ' %');
        }
    }, {
        key: 'create',
        value: function create() {
            this.state.start(this.rg.config.nextState[0], true, false, this.rg.config.nextState[1]);
        }
    }]);

    return Loading;
}();

/* harmony default export */ __webpack_exports__["a"] = (Loading);

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__classes_Level__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_pack_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(0);
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }






var StartMenu = function () {
    function StartMenu() {
        _classCallCheck(this, StartMenu);
    }

    _createClass(StartMenu, [{
        key: 'preload',
        value: function preload() {
            this.game.stage.backgroundColor = '#fff';
        }
    }, {
        key: 'create',
        value: function create() {
            var _this = this;

            this.bgSprite = this.game.add.sprite(0, 0, 'startMenu');
            this.bgSprite.anchor.set(1, 0);

            this.title = this.game.rg.i18n.createText(0, 0, __WEBPACK_IMPORTED_MODULE_2__constants__["n" /* I18N_GAME_TITLE */], {
                fill: __WEBPACK_IMPORTED_MODULE_2__constants__["g" /* COLOR_HEX */].MAIN
            });
            this.title.anchor.set(0.5);

            this.menu = [];

            var maxLevel = this.game.rg.level.maxLevel;
            if (maxLevel > 1) {
                for (var i = 1; i <= maxLevel; i++) {
                    this.menu.push([__WEBPACK_IMPORTED_MODULE_2__constants__["N" /* I18N_UI_LEVEL */], this.handleClickPlay.bind(this, i), ' ' + i]);
                }
            } else {
                this.menu.push([__WEBPACK_IMPORTED_MODULE_2__constants__["u" /* I18N_MENU_START */], this.handleClickPlay.bind(this)]);
            }

            this.menu.push([__WEBPACK_IMPORTED_MODULE_2__constants__["t" /* I18N_MENU_HOW_TO */], this.handleClickHowTo.bind(this)]);

            this.menu = this.menu.map(function (_ref) {
                var _ref2 = _slicedToArray(_ref, 3),
                    itemTitle = _ref2[0],
                    callback = _ref2[1],
                    postfix = _ref2[2];

                return [_this.game.rg.i18n.createText(0, 0, itemTitle, {
                    font: '22px Arial',
                    fill: __WEBPACK_IMPORTED_MODULE_2__constants__["g" /* COLOR_HEX */].MAIN
                }, postfix), callback];
            });

            this.langButton = this.game.add.button(0, 0, 'langButtons', this.handleClickLang.bind(this));

            this.versionText = this.game.rg.i18n.createText(0, 0, __WEBPACK_IMPORTED_MODULE_2__constants__["Q" /* I18N_UI_VER */], {
                font: '10px "Press Start 2P", Arial',
                fill: __WEBPACK_IMPORTED_MODULE_2__constants__["g" /* COLOR_HEX */].MAIN
            }, '1.0.0');
            this.versionText.anchor.set(1, 1);

            this.setObjectsPosition();

            // events
            this.game.input.onDown.add(this.handleClickMenu, this);
            this.scale.onSizeChange.add(this.setObjectsPosition, this);
        }
    }, {
        key: 'update',
        value: function update() {
            this.langButton.frame = this.game.rg.i18n.currentLang === __WEBPACK_IMPORTED_MODULE_2__constants__["S" /* LANG_RU */] ? 1 : 0;
        }
    }, {
        key: 'shutdown',
        value: function shutdown() {
            this.game.input.onDown.remove(this.handleClickMenu, this);
            this.scale.onSizeChange.remove(this.setObjectsPosition, this);
        }
    }, {
        key: 'handleClickMenu',
        value: function handleClickMenu() {
            var _this2 = this;

            this.menu.some(function (_ref3) {
                var _ref4 = _slicedToArray(_ref3, 2),
                    item = _ref4[0],
                    callback = _ref4[1];

                if (item.getBounds().contains(_this2.game.input.x, _this2.game.input.y)) {
                    _this2.game.input.onDown.remove(_this2.handleClickMenu, _this2);
                    callback();
                    return true;
                }
            });
        }
    }, {
        key: 'handleClickPlay',
        value: function handleClickPlay() {
            var levelNumber = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

            this.state.start(__WEBPACK_IMPORTED_MODULE_2__constants__["_4" /* STATE_LOADING */], true, false, {
                assets: [['pack', 'game', null, __WEBPACK_IMPORTED_MODULE_1__assets_pack_js__["a" /* default */]]],
                nextState: [__WEBPACK_IMPORTED_MODULE_2__constants__["_2" /* STATE_GAME */], __WEBPACK_IMPORTED_MODULE_0__classes_Level__["a" /* default */].getLevelByNumber(levelNumber)]
            });
        }
    }, {
        key: 'handleClickHowTo',
        value: function handleClickHowTo() {
            this.state.start(__WEBPACK_IMPORTED_MODULE_2__constants__["_3" /* STATE_HOW_TO */], true, false);
        }
    }, {
        key: 'handleClickLang',
        value: function handleClickLang() {
            this.game.rg.i18n.setLang(this.game.rg.i18n.currentLang === __WEBPACK_IMPORTED_MODULE_2__constants__["S" /* LANG_RU */] ? __WEBPACK_IMPORTED_MODULE_2__constants__["R" /* LANG_EN */] : __WEBPACK_IMPORTED_MODULE_2__constants__["S" /* LANG_RU */]);
        }
    }, {
        key: 'setObjectsPosition',
        value: function setObjectsPosition() {
            this.bgSprite.scale.set(this.game.height / this.bgSprite.height);
            this.bgSprite.position.set(this.game.width, 0);

            this.title.position.set(this.game.width / 2, this.game.height / 6);

            var menuOffsetLeft = 40;
            var menuOffset = this.game.height / 3;
            var menuVerticalSpacing = Math.min(this.game.height / 7, 70);
            this.menu.forEach(function (_ref5, i) {
                var _ref6 = _slicedToArray(_ref5, 1),
                    item = _ref6[0];

                item.position.set(menuOffsetLeft, i * menuVerticalSpacing + menuOffset);
            });

            this.langButton.position.set(__WEBPACK_IMPORTED_MODULE_2__constants__["_6" /* UI_OFFSET */], 0);

            this.versionText.position.set(this.game.width - __WEBPACK_IMPORTED_MODULE_2__constants__["_6" /* UI_OFFSET */], this.game.height - __WEBPACK_IMPORTED_MODULE_2__constants__["_6" /* UI_OFFSET */]);
        }
    }]);

    return StartMenu;
}();

/* harmony default export */ __webpack_exports__["a"] = (StartMenu);

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var HowTo = function () {
    function HowTo() {
        _classCallCheck(this, HowTo);
    }

    _createClass(HowTo, [{
        key: 'preload',
        value: function preload() {
            this.game.stage.backgroundColor = '#fff';
        }
    }, {
        key: 'create',
        value: function create() {
            var _this = this;

            var horizontalOffset = this.game.width / 15;

            this.bgSprite = this.game.add.sprite(this.game.width, 0, 'startMenu');
            this.bgSprite.anchor.set(1, 0);
            this.bgSprite.scale.set(this.game.height / this.bgSprite.height);

            this.back = this.game.add.text(horizontalOffset, this.game.height / 15, this.game.rg.i18n.getTranslation(__WEBPACK_IMPORTED_MODULE_0__constants__["s" /* I18N_MENU_BACK */]), {
                fill: __WEBPACK_IMPORTED_MODULE_0__constants__["g" /* COLOR_HEX */].MAIN
            });

            var textGroup = this.game.add.group();
            var verticalOffset = 0;
            var spacing = this.game.height / 30;
            var fontSize = Math.min(22, Math.round(this.game.height / 19));
            [__WEBPACK_IMPORTED_MODULE_0__constants__["q" /* I18N_HOW_TO_GOAL */], __WEBPACK_IMPORTED_MODULE_0__constants__["p" /* I18N_HOW_TO_FINE */], Phaser.Device.desktop ? __WEBPACK_IMPORTED_MODULE_0__constants__["r" /* I18N_HOW_TO_SPACEBAR */] : '', __WEBPACK_IMPORTED_MODULE_0__constants__["o" /* I18N_HOW_TO_AUTHORITIES */]].forEach(function (text, i) {
                if (!text) {
                    return;
                }
                var textObject = _this.game.add.text(horizontalOffset, verticalOffset, i + 1 + '. ' + _this.game.rg.i18n.getTranslation(text), {
                    font: fontSize + 'px Arial',
                    fill: __WEBPACK_IMPORTED_MODULE_0__constants__["g" /* COLOR_HEX */].MAIN,
                    wordWrap: true,
                    wordWrapWidth: _this.game.width - horizontalOffset * 2
                });
                verticalOffset += textObject.height + spacing;
                textGroup.add(textObject);
            });
            textGroup.y = (this.game.height + this.back.bottom - verticalOffset + spacing) / 2;

            this.game.input.onDown.add(this.handleClickBack, this);
        }
    }, {
        key: 'handleClickBack',
        value: function handleClickBack() {
            if (this.back.getBounds().contains(this.game.input.x, this.game.input.y)) {
                this.game.input.onDown.remove(this.handleClickBack, this);
                this.state.start(__WEBPACK_IMPORTED_MODULE_0__constants__["_5" /* STATE_MENU */], true, false);
                return true;
            }
        }
    }]);

    return HowTo;
}();

/* harmony default export */ __webpack_exports__["a"] = (HowTo);

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__classes_Level__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_cars_cars__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classes_Road__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__classes_Radar__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__classes_RoadSign__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__classes_Score__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__classes_LevelTimer__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__classes_screens_StartLevel__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__classes_screens_EndLevel__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__classes_screens_PauseLevel__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__classes_Weather__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__constants__ = __webpack_require__(0);
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
















var Game = function () {
    function Game() {
        _classCallCheck(this, Game);
    }

    _createClass(Game, [{
        key: 'init',
        value: function init(level) {
            this.rg = {
                level: level,
                levelStarted: false,
                levelEnded: false,
                stats: {
                    fines: {
                        count: 0,
                        sum: 0
                    },
                    wrong: {
                        count: 0,
                        sum: 0
                    },
                    missed: {
                        count: 0,
                        sum: 0
                    }
                },
                cars: {
                    revive: false,
                    count: (level.road.end - level.road.start) / level.speed.limit / level.cars.frequency
                },
                objects: {
                    road: null,
                    roadSign: null,
                    weather: null,
                    score: null,
                    timer: null,
                    radar: null
                },
                screens: {
                    startLevel: null,
                    endLevel: null
                },
                arrays: {
                    cars: []
                },
                groups: {
                    bg: null,
                    behindRoad: null,
                    onRoad: null
                },
                timers: {
                    reviveCar: null
                },
                input: {
                    keys: {
                        space: null
                    }
                }
            };
        }
    }, {
        key: 'create',
        value: function create() {
            // background
            this.game.stage.backgroundColor = __WEBPACK_IMPORTED_MODULE_12__constants__["g" /* COLOR_HEX */].SKY;

            // background group
            this.rg.groups.bg = this.game.add.group();

            // cars behind the road
            this.rg.groups.behindRoad = this.game.add.group();

            // road
            this.rg.objects.road = new __WEBPACK_IMPORTED_MODULE_2__classes_Road__["a" /* default */](_extends({
                game: this.game
            }, this.rg.level.road));

            this.rg.groups.onRoad = this.game.add.group();

            var roadSignX = this.rg.objects.road.length / 2;
            var roadSignY = -__WEBPACK_IMPORTED_MODULE_12__constants__["_6" /* UI_OFFSET */];
            this.rg.objects.roadSign = new __WEBPACK_IMPORTED_MODULE_4__classes_RoadSign__["a" /* default */](_extends({
                game: this.game,
                position: {
                    x: roadSignX,
                    y: roadSignY
                }
            }, this.rg.objects.road.getProjection({
                x: this.rg.objects.road.length / 2,
                y: -__WEBPACK_IMPORTED_MODULE_12__constants__["_6" /* UI_OFFSET */]
            }), {
                speedLimit: this.rg.level.speed.limit
            }));

            this.rg.groups.onRoad.add(this.rg.objects.roadSign.group);

            if (this.rg.level.weather) {
                this.rg.objects.weather = new __WEBPACK_IMPORTED_MODULE_10__classes_Weather__["a" /* default */]({
                    game: this.game,
                    weather: this.rg.level.weather,
                    road: this.rg.objects.road,
                    bgGroup: this.rg.groups.bg,
                    onFlash: this.handleFlash.bind(this)
                });

                this.rg.groups.onRoad.addMultiple(this.rg.objects.weather.curtains);
            }

            // cars
            this.rg.timers.reviveCar = this.game.time.create(false);

            this.createCars(this.rg.cars.count);

            // ui
            this.rg.objects.score = new __WEBPACK_IMPORTED_MODULE_5__classes_Score__["a" /* default */]({
                game: this.game,
                x: __WEBPACK_IMPORTED_MODULE_12__constants__["_6" /* UI_OFFSET */],
                y: __WEBPACK_IMPORTED_MODULE_12__constants__["_6" /* UI_OFFSET */],
                goal: this.rg.level.goal
            });

            this.rg.objects.timer = new __WEBPACK_IMPORTED_MODULE_6__classes_LevelTimer__["a" /* default */]({
                game: this.game,
                duration: this.rg.level.duration
            });

            this.rg.objects.radar = new __WEBPACK_IMPORTED_MODULE_3__classes_Radar__["a" /* default */](_extends({
                game: this.game,
                x: __WEBPACK_IMPORTED_MODULE_12__constants__["_6" /* UI_OFFSET */],
                y: this.game.height - __WEBPACK_IMPORTED_MODULE_12__constants__["_6" /* UI_OFFSET */],
                width: this.rg.objects.road.roadOffsetLeft - __WEBPACK_IMPORTED_MODULE_12__constants__["_6" /* UI_OFFSET */] * 2
            }, this.rg.level.radar, {
                speedLimit: this.rg.level.speed.limit
            }));

            // screens
            this.rg.screens.startLevel = new __WEBPACK_IMPORTED_MODULE_7__classes_screens_StartLevel__["a" /* default */]({
                game: this.game,
                height: 270
            });
            this.rg.screens.startLevel.show({
                levelNumber: __WEBPACK_IMPORTED_MODULE_0__classes_Level__["a" /* default */].getLevelNumber(this.rg.level.id),
                goal: this.rg.level.goal,
                series: this.rg.level.cars.series
            });

            this.rg.screens.endLevel = new __WEBPACK_IMPORTED_MODULE_8__classes_screens_EndLevel__["a" /* default */]({
                game: this.game,
                height: 4 * this.game.height / 5
            });

            this.rg.objects.pause = new __WEBPACK_IMPORTED_MODULE_9__classes_screens_PauseLevel__["a" /* default */]({
                game: this.game
            });

            // events
            this.game.onPause.add(this.handlePause, this);
            this.game.onResume.add(this.handlePause, this);
            this.game.input.onDown.add(this.handleTap, this);
            this.rg.input.keys.space = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        }
    }, {
        key: 'update',
        value: function update() {
            if (!this.rg.levelStarted) {
                return;
            }

            // update road objects starting from the closest to the player
            for (var i = this.rg.groups.onRoad.length - 1; i >= 0; i--) {
                var sprite = this.rg.groups.onRoad.getChildAt(i);
                if (!sprite.alive) {
                    continue;
                }
                if (sprite.name.startsWith('car')) {
                    this.updateCar(sprite.rg);

                    if (sprite.rg.position.x > this.rg.level.road.end) {
                        sprite.rg.kill();
                    }
                }
            }

            for (var _i = this.rg.groups.behindRoad.length - 1; _i >= 0; _i--) {
                var carSprite = this.rg.groups.behindRoad.getChildAt(_i);
                if (!carSprite.alive) {
                    continue;
                }
                this.updateCar(carSprite.rg);

                if (carSprite.rg.position.x > 0) {
                    this.rg.groups.onRoad.add(carSprite);
                }
            }

            this.rg.groups.behindRoad.customSort(this.sortRoadObjects, this);
            this.rg.groups.onRoad.customSort(this.sortRoadObjects, this);

            if (this.rg.cars.revive) {
                this.rg.cars.revive = !this.reviveCar();
            }

            // update weather
            if (this.rg.objects.weather) {
                this.rg.objects.weather.update();
            }

            // update radar
            this.rg.objects.radar.update();

            // update score
            this.rg.objects.score.update();

            // check end game
            if (!this.rg.levelEnded) {
                this.checkLevelEnd();
            }

            // input
            if (this.rg.input.keys.space.justDown) {
                if (this.rg.objects.radar.mode === __WEBPACK_IMPORTED_MODULE_12__constants__["Y" /* RADAR_MODE_FINE */]) {
                    this.handleFine();
                }
            }
        }
    }, {
        key: 'updateCar',
        value: function updateCar(car) {
            var bestRoadLane = this.getClearestRoadLaneByCar(car);
            if (bestRoadLane !== car.roadLane) {
                car.moveToY(this.rg.objects.road.getLaneCenter(bestRoadLane), bestRoadLane);
            }

            car.preUpdate();

            car.update(this.rg.objects.road.getProjection(car.position));
        }
    }, {
        key: 'render',
        value: function render() {
            // this.game.debug.text(this.game.time.fps, 2, 14, "#00ff00");
            // this.game.debug.cameraInfo(this.game.camera, 32, 32);
            // this.game.debug.body(this.mz.objects.player.sprite);
            // this.game.debug.spriteBounds(this.rg.objects.radar.mainText);
            // this.game.debug.bodyInfo(this.mz.objects.player.sprite, 0, 100);
        }
    }, {
        key: 'shutdown',
        value: function shutdown() {
            this.game.onPause.remove(this.handlePause, this);
            this.game.onResume.remove(this.handlePause, this);
            this.game.input.onDown.remove(this.handleTap, this);
            this.game.input.keyboard.removeKey(Phaser.Keyboard.SPACEBAR);
        }
    }, {
        key: 'handleTap',
        value: function handleTap(pointer) {
            var handled = void 0;

            if (pointer.targetObject) {
                if (!this.rg.levelEnded) {
                    if (pointer.targetObject.sprite.name.startsWith('car')) {
                        this.handleClickCar(pointer.targetObject.sprite.rg);
                        handled = true;
                    } else if (pointer.targetObject.sprite.name === __WEBPACK_IMPORTED_MODULE_12__constants__["I" /* I18N_UI_BUTTON_FINE */]) {
                        if (this.rg.objects.radar.mode === __WEBPACK_IMPORTED_MODULE_12__constants__["Y" /* RADAR_MODE_FINE */]) {
                            this.handleFine();
                            handled = true;
                        }
                    } else if (pointer.targetObject.sprite.name === __WEBPACK_IMPORTED_MODULE_12__constants__["K" /* I18N_UI_BUTTON_PLAY */]) {
                        this.startLevel();
                        handled = true;
                    } else if (pointer.targetObject.sprite.name === __WEBPACK_IMPORTED_MODULE_12__constants__["L" /* I18N_UI_BUTTON_QUIT */]) {
                        this.handleClickQuit();
                    } else if (pointer.targetObject.sprite.name === __WEBPACK_IMPORTED_MODULE_12__constants__["P" /* I18N_UI_PAUSE */]) {
                        this.handlePause();
                    }
                } else {
                    if (pointer.targetObject.sprite.name === __WEBPACK_IMPORTED_MODULE_12__constants__["L" /* I18N_UI_BUTTON_QUIT */]) {
                        this.handleClickQuit();
                    } else if (pointer.targetObject.sprite.name === __WEBPACK_IMPORTED_MODULE_12__constants__["J" /* I18N_UI_BUTTON_NEXT */]) {
                        this.handleClickNext();
                    } else if (pointer.targetObject.sprite.name === __WEBPACK_IMPORTED_MODULE_12__constants__["M" /* I18N_UI_BUTTON_REPLAY */]) {
                        this.handleClickReplay();
                    }
                }
            }
            if (!handled) {
                this.handleClickField();
            }
        }
    }, {
        key: 'handleClickField',
        value: function handleClickField() {
            if (this.rg.objects.radar.mode !== __WEBPACK_IMPORTED_MODULE_12__constants__["X" /* RADAR_MODE_ERROR */]) {
                this.rg.objects.radar.setMode(__WEBPACK_IMPORTED_MODULE_12__constants__["W" /* RADAR_MODE_EMPTY */]);
            }
        }
    }, {
        key: 'handleClickQuit',
        value: function handleClickQuit() {
            this.state.start(__WEBPACK_IMPORTED_MODULE_12__constants__["_5" /* STATE_MENU */]);
        }
    }, {
        key: 'handleClickNext',
        value: function handleClickNext() {
            this.state.start(__WEBPACK_IMPORTED_MODULE_12__constants__["_2" /* STATE_GAME */], true, false, __WEBPACK_IMPORTED_MODULE_0__classes_Level__["a" /* default */].getNextLevelById(this.rg.level.id));
        }
    }, {
        key: 'handleClickReplay',
        value: function handleClickReplay() {
            this.state.start(__WEBPACK_IMPORTED_MODULE_12__constants__["_2" /* STATE_GAME */], true, false, __WEBPACK_IMPORTED_MODULE_0__classes_Level__["a" /* default */].getLevelById(this.rg.level.id));
        }
    }, {
        key: 'handleClickCar',
        value: function handleClickCar(car) {
            if (this.rg.objects.radar.mode !== __WEBPACK_IMPORTED_MODULE_12__constants__["X" /* RADAR_MODE_ERROR */]) {
                if (car.mode === __WEBPACK_IMPORTED_MODULE_12__constants__["c" /* CAR_MODE_FINED */]) {
                    this.rg.objects.radar.setMode(car.isRogue ? __WEBPACK_IMPORTED_MODULE_12__constants__["_0" /* RADAR_MODE_ROGUE */] : __WEBPACK_IMPORTED_MODULE_12__constants__["T" /* RADAR_MODE_ALREADY_FINED */]);
                } else if (this.rg.objects.radar.mode !== __WEBPACK_IMPORTED_MODULE_12__constants__["U" /* RADAR_MODE_COMPUTING */] || this.rg.objects.radar.currentCar !== car) {
                    this.rg.objects.radar.setMode(__WEBPACK_IMPORTED_MODULE_12__constants__["U" /* RADAR_MODE_COMPUTING */], { car: car });
                }
            }
        }
    }, {
        key: 'handleKillCar',
        value: function handleKillCar(car) {
            this.rg.groups.onRoad.removeChild(car.sprite);

            if (car === this.rg.objects.radar.currentCar) {
                this.rg.objects.radar.setMode(__WEBPACK_IMPORTED_MODULE_12__constants__["W" /* RADAR_MODE_EMPTY */]);
            }
            if (!this.rg.levelEnded && car.mode !== __WEBPACK_IMPORTED_MODULE_12__constants__["c" /* CAR_MODE_FINED */] && !car.isRogue) {
                var fine = Object(__WEBPACK_IMPORTED_MODULE_11__utils__["a" /* getFine */])(car.velocity.x, this.rg.level.speed.limit);
                if (fine !== 0) {
                    this.rg.stats.missed.count++;
                    this.rg.stats.missed.sum += fine;
                }
            }
        }
    }, {
        key: 'handleFine',
        value: function handleFine() {
            var car = this.rg.objects.radar.currentCar;
            car.setMode(__WEBPACK_IMPORTED_MODULE_12__constants__["c" /* CAR_MODE_FINED */]);
            if (car.isRogue) {
                this.rg.stats.wrong.count++;
                this.rg.stats.wrong.sum -= this.rg.objects.radar.currentFine;
                this.rg.objects.score.updateValue(-this.rg.objects.radar.currentFine);
                this.rg.objects.radar.setMode(__WEBPACK_IMPORTED_MODULE_12__constants__["_0" /* RADAR_MODE_ROGUE */]);
            } else {
                this.rg.stats.fines.count++;
                this.rg.stats.fines.sum += this.rg.objects.radar.currentFine;
                this.rg.objects.score.updateValue(this.rg.objects.radar.currentFine);
                this.rg.objects.radar.setMode(__WEBPACK_IMPORTED_MODULE_12__constants__["Z" /* RADAR_MODE_FINED */]);
            }
        }
    }, {
        key: 'handleFlash',
        value: function handleFlash(on) {
            if (on) {
                this.rg.objects.radar.setMode(__WEBPACK_IMPORTED_MODULE_12__constants__["X" /* RADAR_MODE_ERROR */]);
            } else {
                this.rg.objects.radar.setMode(__WEBPACK_IMPORTED_MODULE_12__constants__["W" /* RADAR_MODE_EMPTY */]);
            }
        }
    }, {
        key: 'handlePause',
        value: function handlePause() {
            if (!this.rg.levelEnded) {
                if (this.game.paused) {
                    this.rg.objects.pause.revive();
                } else {
                    this.rg.objects.pause.kill();
                }
            }
        }
    }, {
        key: 'checkLevelEnd',
        value: function checkLevelEnd() {
            if (this.rg.objects.timer.isExpired) {
                this.endLevel(__WEBPACK_IMPORTED_MODULE_12__constants__["h" /* END_GAME_TIME_OUT */]);
            } else if (this.rg.objects.score.reachedGoal) {
                this.endLevel(__WEBPACK_IMPORTED_MODULE_12__constants__["i" /* END_GAME_WIN */]);
            }
        }
    }, {
        key: 'startLevel',
        value: function startLevel() {
            this.rg.levelStarted = true;

            this.rg.objects.timer.start();
            this.resetCarTimer();
            if (this.rg.objects.weather) {
                this.rg.objects.weather.startFlashTimers();
            }

            this.rg.screens.startLevel.hide();
        }
    }, {
        key: 'endLevel',
        value: function endLevel(mode) {
            this.rg.levelEnded = true;
            this.rg.objects.timer.kill();

            var nextLevel = __WEBPACK_IMPORTED_MODULE_0__classes_Level__["a" /* default */].getNextLevelById(this.rg.level.id);
            if (nextLevel) {
                this.game.rg.level.maxLevel = __WEBPACK_IMPORTED_MODULE_0__classes_Level__["a" /* default */].getLevelNumber(nextLevel.id);
            }
            this.rg.screens.endLevel.show({
                mode: mode,
                stats: _extends({
                    time: this.rg.objects.timer.secondsElapsed
                }, this.rg.stats),
                nextLevel: nextLevel ? nextLevel.id : null
            });
        }
    }, {
        key: 'resetCarTimer',
        value: function resetCarTimer() {
            this.rg.cars.revive = true;
            this.rg.timers.reviveCar.stop(true);
            this.rg.timers.reviveCar.add(this.rg.level.cars.frequency * 1000 + this.game.rnd.integerInRange(-1000, 1000), this.resetCarTimer, this);
            this.rg.timers.reviveCar.start();
        }
    }, {
        key: 'createCars',
        value: function createCars(count) {
            var _this = this;

            var _loop = function _loop(i) {
                var randomNumber = _this.game.rnd.integerInRange(0, 100);
                var cummulativeProbability = 0;

                var _cars$find = __WEBPACK_IMPORTED_MODULE_1__classes_cars_cars__["a" /* default */].find(function (_ref) {
                    var _ref2 = _slicedToArray(_ref, 2),
                        Ctr = _ref2[0],
                        probability = _ref2[1];

                    cummulativeProbability += probability;
                    return randomNumber <= cummulativeProbability;
                }),
                    _cars$find2 = _slicedToArray(_cars$find, 1),
                    Ctr = _cars$find2[0];

                var car = new Ctr({
                    game: _this.game,
                    name: 'car' + i,
                    rogueSeries: _this.rg.level.cars.series,
                    onKill: _this.handleKillCar.bind(_this)
                });
                _this.rg.arrays.cars.push(car);
            };

            for (var i = 0; i < count; i++) {
                _loop(i);
            }
        }
    }, {
        key: 'reviveCar',
        value: function reviveCar() {
            var deadCar = this.rg.arrays.cars.find(function (car) {
                return !car.sprite.alive;
            });
            if (deadCar) {
                var roadLane = this.game.rnd.integerInRange(0, this.rg.objects.road.lanes - 1);
                var isRogue = this.game.rnd.frac() < this.rg.level.cars.rogue;
                var speed = this.getRandomCarSpeed(isRogue);
                deadCar.revive({
                    x: this.rg.level.road.start,
                    y: this.rg.objects.road.getLaneCenter(roadLane),
                    roadLane: roadLane,
                    speed: speed,
                    isRogue: isRogue
                });
                this.rg.groups.behindRoad.addAt(deadCar.sprite, 0);
                return true;
            }

            return false;
        }
    }, {
        key: 'getClearestRoadLaneByCar',
        value: function getClearestRoadLaneByCar(currentCar) {
            var lanesClearness = _defineProperty({}, currentCar.roadLane, Infinity);
            var currentCarRoadLaneY = this.rg.objects.road.getLaneCenter(currentCar.roadLane);
            var availableLanesCount = 1;
            if (currentCar.roadLane < this.rg.objects.road.lanes - 1 && currentCar.position.y >= currentCarRoadLaneY) {
                lanesClearness[currentCar.roadLane + 1] = Infinity;
                availableLanesCount++;
            }
            if (currentCar.roadLane > 0 && currentCar.position.y <= currentCarRoadLaneY) {
                lanesClearness[currentCar.roadLane - 1] = Infinity;
                availableLanesCount++;
            }
            var lanesFoundCount = 0;
            if (currentCar.position.x < 0) {
                for (var i = currentCar.sprite.z + 1; i < this.rg.groups.behindRoad.length; i++) {
                    var carSprite = this.rg.groups.behindRoad.getChildAt(i);
                    var car = carSprite.rg;
                    if (!carSprite.alive || currentCar.velocity.x < car.velocity.x || Math.abs(car.position.y - currentCar.position.y) > 1) {
                        continue;
                    }
                    if (lanesClearness[car.roadLane] === Infinity) {
                        lanesClearness[car.roadLane] = car.position.x - currentCar.position.x;
                        lanesFoundCount++;
                        if (lanesFoundCount === availableLanesCount) {
                            return this.getClearestRoadLaneByObj(lanesClearness, currentCar.roadLane);
                        }
                    }
                }
            }
            for (var _i2 = currentCar.position.x < 0 ? 0 : currentCar.sprite.z + 1; _i2 < this.rg.groups.onRoad.length; _i2++) {
                var sprite = this.rg.groups.onRoad.getChildAt(_i2);
                if (!sprite.alive || !sprite.name.startsWith('car')) {
                    continue;
                }

                var _car = sprite.rg;
                if (currentCar.velocity.x < _car.velocity.x || Math.abs(_car.roadLane - currentCar.roadLane) > 1) {
                    continue;
                }
                if (lanesClearness[_car.roadLane] === Infinity) {
                    lanesClearness[_car.roadLane] = _car.position.x - currentCar.position.x;
                    lanesFoundCount++;
                    if (lanesFoundCount === availableLanesCount) {
                        return this.getClearestRoadLaneByObj(lanesClearness, currentCar.roadLane);
                    }
                }
            }

            return this.getClearestRoadLaneByObj(lanesClearness, currentCar.roadLane);
        }
    }, {
        key: 'getClearestRoadLaneByObj',
        value: function getClearestRoadLaneByObj(obj, currentRoadLane) {
            var maxValue = -Infinity;
            var resultIndexes = [];
            currentRoadLane = String(currentRoadLane);
            var hasCurrentRoadLane = false;
            for (var key in obj) {
                if (obj.hasOwnProperty(key)) {
                    if (obj[key] === maxValue) {
                        resultIndexes.push(key);
                        if (key === currentRoadLane) {
                            hasCurrentRoadLane = true;
                        }
                    } else if (obj[key] > maxValue) {
                        maxValue = obj[key];
                        resultIndexes = [key];
                        hasCurrentRoadLane = key === currentRoadLane;
                    }
                }
            }
            if (hasCurrentRoadLane) {
                return Number(currentRoadLane);
            }
            if (resultIndexes.length === 1) {
                return Number(resultIndexes[0]);
            }
            return Number(this.game.rnd.pick(resultIndexes));
        }
    }, {
        key: 'getRandomCarSpeed',
        value: function getRandomCarSpeed(isRogue) {
            if (isRogue) {
                var minDisallowedSpeed = this.rg.level.speed.limit + __WEBPACK_IMPORTED_MODULE_12__constants__["j" /* FINES */][1][0];
                var maxDisallowedSpeed = this.rg.level.speed.limit + __WEBPACK_IMPORTED_MODULE_12__constants__["j" /* FINES */][__WEBPACK_IMPORTED_MODULE_12__constants__["j" /* FINES */].length - 1][0];
                return this.game.rnd.integerInRange(minDisallowedSpeed, maxDisallowedSpeed - 1);
            } else {
                var _randomNumber = this.game.rnd.integerInRange(1, 100);
                var _cummulativeProbability = 0;
                for (var i = 0; i < __WEBPACK_IMPORTED_MODULE_12__constants__["j" /* FINES */].length; i++) {
                    var _FINES$i = _slicedToArray(__WEBPACK_IMPORTED_MODULE_12__constants__["j" /* FINES */][i], 3),
                        speedExcess = _FINES$i[0],
                        fine = _FINES$i[1],
                        probability = _FINES$i[2];

                    _cummulativeProbability += probability;
                    if (_randomNumber <= _cummulativeProbability) {
                        var prevSpeedExcess = (__WEBPACK_IMPORTED_MODULE_12__constants__["j" /* FINES */][i - 1] || [0])[0];
                        return this.rg.level.speed.limit + this.game.rnd.integerInRange(prevSpeedExcess, speedExcess - 1);
                    }
                }
                return this.rg.level.speed.limit;
            }
        }
    }, {
        key: 'sortRoadObjects',
        value: function sortRoadObjects(obj1, obj2) {
            return obj1.rg.position.x - obj2.rg.position.x;
        }
    }]);

    return Game;
}();

/* harmony default export */ __webpack_exports__["a"] = (Game);

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Sedan1__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Offroad1__ = __webpack_require__(29);



/* harmony default export */ __webpack_exports__["a"] = ([[__WEBPACK_IMPORTED_MODULE_0__Sedan1__["a" /* default */], 80], [__WEBPACK_IMPORTED_MODULE_1__Offroad1__["a" /* default */], 20]]);

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Car__ = __webpack_require__(5);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Sedan1 = function (_Car) {
    _inherits(Sedan1, _Car);

    function Sedan1(props) {
        _classCallCheck(this, Sedan1);

        return _possibleConstructorReturn(this, (Sedan1.__proto__ || Object.getPrototypeOf(Sedan1)).call(this, _extends({}, props, {
            spriteKey: 'car01',
            plateNumberPosition: {
                x: 0,
                y: -13
            },
            rogueSignsPosition: {
                light: [22, -101],
                pass: [-43, -78]
            }
        })));
    }

    return Sedan1;
}(__WEBPACK_IMPORTED_MODULE_0__Car__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Sedan1);

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PLATE_NUMBER_WIDTH = 54;
var PLATE_NUMBER_HEIGHT = 14;

var PlateNumber = function () {
    function PlateNumber(_ref) {
        var game = _ref.game,
            x = _ref.x,
            y = _ref.y,
            _ref$width = _ref.width,
            width = _ref$width === undefined ? PLATE_NUMBER_WIDTH : _ref$width,
            _ref$height = _ref.height,
            height = _ref$height === undefined ? PLATE_NUMBER_HEIGHT : _ref$height;

        _classCallCheck(this, PlateNumber);

        this.game = game;
        this.group = this.game.add.group();
        this.group.x = x - width / 2;
        this.group.y = y;

        this.letters = '';
        this.numbers = '';

        this.plateGraphics = this.game.add.graphics();
        this.plateGraphics.beginFill(0xffffff);
        this.plateGraphics.drawRoundedRect(0, -height, width, height, 2);
        this.plateGraphics.endFill();
        this.group.add(this.plateGraphics);

        this.text = this.game.add.text(width / 2, -height, '', {
            font: height - 1 + 'px Arial',
            fontVariant: 'small-caps',
            fill: '#000'
        });
        this.text.anchor.set(0.5, 0);
        this.text.cacheAsBitmap = true;
        this.group.add(this.text);
    }

    _createClass(PlateNumber, [{
        key: 'setText',
        value: function setText(_ref2) {
            var letters = _ref2.letters,
                numbers = _ref2.numbers;

            this.letters = letters;
            this.numbers = numbers;

            this.text.setText(this.getText('.'));
            // white dots stand for spaces
            this.text.addColor('#fff', 1);
            this.text.addColor('#000', 2);
            this.text.addColor('#fff', 5);
            this.text.addColor('#000', 6);
            this.text.updateCache();
        }
    }, {
        key: 'getText',
        value: function getText() {
            var spacer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

            return [this.letters[0].toLowerCase(), this.numbers, this.letters.substr(1).toLowerCase()].join(spacer);
        }
    }]);

    return PlateNumber;
}();

/* harmony default export */ __webpack_exports__["a"] = (PlateNumber);

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Car__ = __webpack_require__(5);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Offroad1 = function (_Car) {
    _inherits(Offroad1, _Car);

    function Offroad1(props) {
        _classCallCheck(this, Offroad1);

        return _possibleConstructorReturn(this, (Offroad1.__proto__ || Object.getPrototypeOf(Offroad1)).call(this, _extends({}, props, {
            spriteKey: 'car02',
            plateNumberPosition: {
                x: 0,
                y: -40
            },
            rogueSignsPosition: {
                light: [23, -140],
                pass: [-45, -103]
            }
        })));
    }

    return Offroad1;
}(__WEBPACK_IMPORTED_MODULE_0__Car__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Offroad1);

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Road = function () {
    function Road(_ref) {
        var game = _ref.game,
            length = _ref.length,
            lanes = _ref.lanes,
            laneWidth = _ref.laneWidth;

        _classCallCheck(this, Road);

        this.game = game;
        this.length = length;
        this.lanes = lanes;
        this.laneWidth = laneWidth;
        this.width = this.laneWidth * this.lanes;

        this.group = this.game.add.group();

        this.groundHeight = this.game.height * 4 / 5;
        var groundTile = this.game.add.tileSprite(0, this.game.height - this.groundHeight, this.game.width, this.groundHeight, 'ground');
        this.group.add(groundTile);

        this.roadWidthTop = this.game.width / 3;
        this.roadOffsetLeft = (this.game.width - this.roadWidthTop) / 2;
        this.roadWidthBottom = (this.game.width - this.roadOffsetLeft) / (this.lanes * 2 - 1) * (this.lanes * 2);
        this.mainRatio = this.roadWidthBottom / this.roadWidthTop;

        this.topLeft = new Phaser.Point(this.roadOffsetLeft, this.game.height - this.groundHeight);

        this.roadGraphics = this.game.add.graphics(0, 0, this.group);
        this.roadGraphics.beginFill(__WEBPACK_IMPORTED_MODULE_0__constants__["f" /* COLOR */].ROAD);
        this.roadGraphics.drawPolygon([this.topLeft, { x: this.roadOffsetLeft + this.roadWidthTop, y: this.topLeft.y }, { x: this.roadOffsetLeft + this.roadWidthBottom, y: this.game.height }, { x: this.roadOffsetLeft, y: this.game.height }]);
        this.roadGraphics.endFill();

        this.drawRoadMarking();
    }

    _createClass(Road, [{
        key: 'getProjection',
        value: function getProjection(_ref2) {
            var x = _ref2.x,
                y = _ref2.y;

            var ratioX = x / this.length;
            var relativeY = this.roadWidthTop - y / this.width * this.roadWidthTop;
            return {
                x: this.topLeft.x + relativeY * (1 + ratioX * (this.mainRatio - 1)),
                y: this.topLeft.y + Math.abs(ratioX) * this.groundHeight,
                scale: (this.roadWidthTop + ratioX * (this.roadWidthBottom - this.roadWidthTop)) / this.lanes / __WEBPACK_IMPORTED_MODULE_0__constants__["e" /* CAR_RELATIVE_WIDTH */]
            };
        }
    }, {
        key: 'getLaneCenter',
        value: function getLaneCenter(index) {
            return this.laneWidth * (0.5 + index);
        }
    }, {
        key: 'drawRoadMarking',
        value: function drawRoadMarking() {
            var roadMarkingWidth = this.laneWidth / 15;
            var roadMarkingWidthHalf = roadMarkingWidth / 2;
            var roadMarkingLength = roadMarkingWidth * 10;
            var roadMarkingGap = 3 * roadMarkingLength;
            var roadMarkingGroup = this.game.add.group();
            for (var i = 1; i < this.lanes; i++) {
                var roadMarkingY = i * this.laneWidth;
                var roadMarkingX = 0;
                while (roadMarkingX < this.length) {
                    var topPointProjection = this.getProjection({ x: roadMarkingX, y: roadMarkingY });
                    var bottomPointProjection = this.getProjection({
                        x: roadMarkingX + roadMarkingLength * topPointProjection.scale, y: roadMarkingY
                    });

                    var stroke = this.game.add.graphics();
                    stroke.beginFill(0xffffff, 0.8);
                    stroke.drawPolygon([{
                        x: topPointProjection.x - roadMarkingWidthHalf * topPointProjection.scale,
                        y: topPointProjection.y
                    }, {
                        x: topPointProjection.x + roadMarkingWidthHalf * topPointProjection.scale,
                        y: topPointProjection.y
                    }, {
                        x: bottomPointProjection.x + roadMarkingWidthHalf * bottomPointProjection.scale,
                        y: bottomPointProjection.y
                    }, {
                        x: bottomPointProjection.x - roadMarkingWidthHalf * bottomPointProjection.scale,
                        y: bottomPointProjection.y
                    }]);
                    stroke.endFill();
                    roadMarkingGroup.add(stroke);
                    roadMarkingX += (roadMarkingLength + roadMarkingGap) * bottomPointProjection.scale;
                }
            }
            roadMarkingGroup.cacheAsBitmap = true;
            this.group.add(roadMarkingGroup);
        }
    }]);

    return Road;
}();

/* harmony default export */ __webpack_exports__["a"] = (Road);

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UIProgressBar__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_UIButton__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }







var TEMPORARY_MODE_DURATION = 2000;
var RADAR_SCREEN_HEIGHT = 120;
var RADAR_FINE_BUTTON_HEIGHT = 70;

var Radar = function () {
    function Radar(_ref) {
        var game = _ref.game,
            x = _ref.x,
            y = _ref.y,
            width = _ref.width,
            computing = _ref.computing,
            speedLimit = _ref.speedLimit;

        _classCallCheck(this, Radar);

        this.game = game;
        this.width = width;
        this.height = RADAR_SCREEN_HEIGHT + RADAR_FINE_BUTTON_HEIGHT + 4 * __WEBPACK_IMPORTED_MODULE_3__constants__["_6" /* UI_OFFSET */];
        this.speedLimit = speedLimit;

        this.radarGroup = this.game.add.group();
        this.radarGroup.x = x;
        this.radarGroup.y = y - this.height;

        this.body = this.game.add.graphics();
        this.body.beginFill(0x252525);
        this.body.drawRoundedRect(0, 0, this.width, this.height, 20);
        this.body.endFill();
        this.radarGroup.add(this.body);

        this.screenGroup = this.game.add.group();
        this.screenGroup.x = __WEBPACK_IMPORTED_MODULE_3__constants__["_6" /* UI_OFFSET */];
        this.screenGroup.y = 2 * __WEBPACK_IMPORTED_MODULE_3__constants__["_6" /* UI_OFFSET */];
        this.radarGroup.add(this.screenGroup);

        this.screen = this.game.add.graphics();
        this.screenGroup.add(this.screen);
        this.screenWidth = this.width - 2 * __WEBPACK_IMPORTED_MODULE_3__constants__["_6" /* UI_OFFSET */];

        this.mainText = this.game.add.text(this.screenWidth / 2, RADAR_SCREEN_HEIGHT / 2 + 5, '', {
            align: 'center',
            wordWrap: true,
            wordWrapWidth: this.screenWidth
        });
        this.mainText.font = '"Press Start 2P", Arial';
        this.mainText.fontSize = 18;
        this.mainText.anchor.set(0.5, 0.5);
        this.screenGroup.add(this.mainText);

        this.topText = this.game.add.text(this.screenWidth / 2, 10, '', {
            align: 'center'
        });
        this.topText.font = '"Press Start 2P", Arial';
        this.topText.fontSize = 14;
        this.topText.fontVariant = 'small-caps';
        this.topText.anchor.set(0.5, 0);
        this.screenGroup.add(this.topText);

        this.bottomText = this.game.add.text(this.screenWidth / 2, RADAR_SCREEN_HEIGHT - 10, '', {
            align: 'center'
        });
        this.bottomText.font = '"Press Start 2P", Arial';
        this.bottomText.fontSize = 12;
        this.bottomText.anchor.set(0.5, 1);
        this.screenGroup.add(this.bottomText);

        var progressBarOffset = RADAR_SCREEN_HEIGHT / 10;
        this.progressBar = new __WEBPACK_IMPORTED_MODULE_0__UIProgressBar__["a" /* default */]({
            game: this.game,
            x: progressBarOffset,
            y: RADAR_SCREEN_HEIGHT - 2 * progressBarOffset - 5,
            width: this.screenWidth - 2 * progressBarOffset,
            height: 10,
            color: 0
        });
        this.screenGroup.add(this.progressBar.graphics);

        var fineButtonWidth = this.width / 1.5;
        this.fineButton = new __WEBPACK_IMPORTED_MODULE_1__classes_UIButton__["a" /* default */]({
            game: this.game,
            name: __WEBPACK_IMPORTED_MODULE_3__constants__["I" /* I18N_UI_BUTTON_FINE */],
            x: (this.width - fineButtonWidth) / 2,
            y: this.height - RADAR_FINE_BUTTON_HEIGHT - __WEBPACK_IMPORTED_MODULE_3__constants__["_6" /* UI_OFFSET */],
            width: fineButtonWidth,
            height: RADAR_FINE_BUTTON_HEIGHT,
            bg: __WEBPACK_IMPORTED_MODULE_3__constants__["f" /* COLOR */].MAROON,
            text: this.game.rg.i18n.getTranslation(__WEBPACK_IMPORTED_MODULE_3__constants__["I" /* I18N_UI_BUTTON_FINE */]),
            style: {
                font: '24px Arial',
                fontWeight: 'bold',
                fill: '#fff'
            },
            radius: 20
        });
        this.radarGroup.add(this.fineButton.group);

        this.mode = null;

        this.computingTimer = this.game.time.create(false);
        this.computingTimerDuration = computing;
        this.temporaryModeTimer = this.game.time.create(false);

        this.currentCar = null;
        this.currentFine = 0;

        this.setMode(__WEBPACK_IMPORTED_MODULE_3__constants__["W" /* RADAR_MODE_EMPTY */]);
    }

    _createClass(Radar, [{
        key: 'update',
        value: function update() {
            if (this.mode === __WEBPACK_IMPORTED_MODULE_3__constants__["U" /* RADAR_MODE_COMPUTING */]) {
                if (this.computingTimer.running) {
                    this.progressBar.update({ percent: this.computingTimer.ms / this.computingTimerDuration });
                }
            }
        }
    }, {
        key: 'handleCompleteComputing',
        value: function handleCompleteComputing() {
            this.computingTimer.stop(true);
            this.currentFine = Object(__WEBPACK_IMPORTED_MODULE_2__utils__["a" /* getFine */])(this.currentCar.velocity.x, this.speedLimit);
            if (this.currentFine === 0) {
                this.setMode(__WEBPACK_IMPORTED_MODULE_3__constants__["V" /* RADAR_MODE_DISMISS */], { speed: this.currentCar.velocity.x });
            } else {
                this.setMode(__WEBPACK_IMPORTED_MODULE_3__constants__["Y" /* RADAR_MODE_FINE */], { speed: this.currentCar.velocity.x });
            }
        }
    }, {
        key: 'handleCompleteTemporaryMode',
        value: function handleCompleteTemporaryMode() {
            this.temporaryModeTimer.stop(true);
            this.setMode(__WEBPACK_IMPORTED_MODULE_3__constants__["W" /* RADAR_MODE_EMPTY */]);
        }
    }, {
        key: 'setMode',
        value: function setMode(mode) {
            var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            this.computingTimer.stop(true);
            this.temporaryModeTimer.stop(true);

            this.progressBar.graphics.visible = false;
            this.topText.visible = false;
            this.bottomText.visible = false;

            this.mainText.fill = '#000';
            this.topText.fill = '#000';
            this.bottomText.fill = '#000';

            this.fineButton.update({ text: '...' });

            switch (mode) {
                case __WEBPACK_IMPORTED_MODULE_3__constants__["W" /* RADAR_MODE_EMPTY */]:
                    {
                        this.mainText.setText(this.game.rg.i18n.getTranslation(__WEBPACK_IMPORTED_MODULE_3__constants__["w" /* I18N_RADAR_EMPTY */]));
                        this.resetCurrentCar();
                        break;
                    }
                case __WEBPACK_IMPORTED_MODULE_3__constants__["V" /* RADAR_MODE_DISMISS */]:
                    {
                        this.topText.setText(this.currentCar.plateNumber.getText());
                        this.topText.visible = true;

                        this.mainText.setText(Math.round(props.speed) + ' ' + this.game.rg.i18n.getTranslation(__WEBPACK_IMPORTED_MODULE_3__constants__["z" /* I18N_RADAR_METRICS */]));
                        break;
                    }
                case __WEBPACK_IMPORTED_MODULE_3__constants__["Y" /* RADAR_MODE_FINE */]:
                    {
                        this.topText.setText(this.currentCar.plateNumber.getText());
                        this.topText.visible = true;

                        this.mainText.setText(Math.round(props.speed) + ' ' + this.game.rg.i18n.getTranslation(__WEBPACK_IMPORTED_MODULE_3__constants__["z" /* I18N_RADAR_METRICS */]));

                        this.fineButton.reset();
                        break;
                    }
                case __WEBPACK_IMPORTED_MODULE_3__constants__["U" /* RADAR_MODE_COMPUTING */]:
                    {
                        this.currentCar = props.car;

                        this.mainText.setText(this.game.rg.i18n.getTranslation(__WEBPACK_IMPORTED_MODULE_3__constants__["B" /* I18N_RADAR_WAIT */]));
                        this.progressBar.graphics.visible = true;

                        this.computingTimer.add(this.computingTimerDuration, this.handleCompleteComputing, this);
                        this.computingTimer.start();
                        break;
                    }
                case __WEBPACK_IMPORTED_MODULE_3__constants__["Z" /* RADAR_MODE_FINED */]:
                    {
                        this.topText.setText(this.currentCar.plateNumber.getText());
                        this.topText.visible = true;

                        this.mainText.setText(this.game.rg.i18n.getTranslation(__WEBPACK_IMPORTED_MODULE_3__constants__["y" /* I18N_RADAR_FINED */]) + "\n" + this.currentFine + ' ' + this.game.rg.i18n.getTranslation(__WEBPACK_IMPORTED_MODULE_3__constants__["k" /* I18N_CURRENCY */]));
                        this.resetCurrentCar();
                        this.startTemporaryModeTimer();
                        break;
                    }
                case __WEBPACK_IMPORTED_MODULE_3__constants__["_0" /* RADAR_MODE_ROGUE */]:
                    {
                        if (this.currentCar !== null) {
                            this.topText.setText(this.currentCar.plateNumber.getText());
                            this.topText.fill = __WEBPACK_IMPORTED_MODULE_3__constants__["g" /* COLOR_HEX */].MAROON;
                            this.topText.visible = true;
                        }

                        this.mainText.fill = __WEBPACK_IMPORTED_MODULE_3__constants__["g" /* COLOR_HEX */].MAROON;
                        this.mainText.setText(this.game.rg.i18n.getTranslation(__WEBPACK_IMPORTED_MODULE_3__constants__["A" /* I18N_RADAR_ROGUE */]));
                        this.bottomText.setText(Object(__WEBPACK_IMPORTED_MODULE_2__utils__["b" /* getFormattedCurrency */])(-this.currentFine, this.game.rg.i18n.getTranslation(__WEBPACK_IMPORTED_MODULE_3__constants__["k" /* I18N_CURRENCY */])));
                        this.bottomText.fill = __WEBPACK_IMPORTED_MODULE_3__constants__["g" /* COLOR_HEX */].MAROON;
                        this.bottomText.visible = true;
                        this.resetCurrentCar();
                        this.startTemporaryModeTimer();
                        break;
                    }
                case __WEBPACK_IMPORTED_MODULE_3__constants__["T" /* RADAR_MODE_ALREADY_FINED */]:
                    {
                        this.mainText.setText(this.game.rg.i18n.getTranslation(__WEBPACK_IMPORTED_MODULE_3__constants__["v" /* I18N_RADAR_ALREADY_FINED */]));
                        this.resetCurrentCar();
                        this.startTemporaryModeTimer();
                        break;
                    }
                case __WEBPACK_IMPORTED_MODULE_3__constants__["X" /* RADAR_MODE_ERROR */]:
                    {
                        this.mainText.fill = __WEBPACK_IMPORTED_MODULE_3__constants__["g" /* COLOR_HEX */].MAROON;
                        this.mainText.setText(this.game.rg.i18n.getTranslation(__WEBPACK_IMPORTED_MODULE_3__constants__["x" /* I18N_RADAR_ERROR */]));
                        this.resetCurrentCar();
                        break;
                    }
            }

            this.mode = mode;

            this.drawScreen();
        }
    }, {
        key: 'drawScreen',
        value: function drawScreen() {
            var color = void 0;
            switch (this.mode) {
                case __WEBPACK_IMPORTED_MODULE_3__constants__["Y" /* RADAR_MODE_FINE */]:
                case __WEBPACK_IMPORTED_MODULE_3__constants__["_0" /* RADAR_MODE_ROGUE */]:
                case __WEBPACK_IMPORTED_MODULE_3__constants__["X" /* RADAR_MODE_ERROR */]:
                    color = __WEBPACK_IMPORTED_MODULE_3__constants__["f" /* COLOR */].RADAR_SCREEN_RED;
                    break;
                default:
                    color = __WEBPACK_IMPORTED_MODULE_3__constants__["f" /* COLOR */].RADAR_SCREEN;
            }
            this.screen.clear();
            this.screen.beginFill(color);
            this.screen.drawRect(0, 0, this.screenWidth, RADAR_SCREEN_HEIGHT);
            this.screen.endFill();
        }
    }, {
        key: 'startTemporaryModeTimer',
        value: function startTemporaryModeTimer() {
            this.temporaryModeTimer.add(TEMPORARY_MODE_DURATION, this.handleCompleteTemporaryMode, this);
            this.temporaryModeTimer.start();
        }
    }, {
        key: 'resetCurrentCar',
        value: function resetCurrentCar() {
            this.currentCar = null;
            this.currentFine = 0;
        }
    }]);

    return Radar;
}();

/* harmony default export */ __webpack_exports__["a"] = (Radar);

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RoadSign = function RoadSign(_ref) {
    var game = _ref.game,
        x = _ref.x,
        y = _ref.y,
        position = _ref.position,
        speedLimit = _ref.speedLimit;

    _classCallCheck(this, RoadSign);

    this.group = game.add.group();
    this.group.x = x;
    this.group.y = y;
    this.group.rg = this;

    this.position = new Phaser.Point(position.x, position.y);

    this.signSprite = game.add.sprite(0, 0, 'roadSign');
    this.signSprite.anchor.set(0.5, 1);
    this.group.add(this.signSprite);

    this.speedLimitText = game.add.text(0, -this.signSprite.height + this.signSprite.width / 2 + 3, speedLimit, {
        align: 'center'
    });
    this.speedLimitText.font = 'Arial';
    this.speedLimitText.fontSize = 30;
    this.speedLimitText.anchor.set(0.5, 0.5);
    this.group.add(this.speedLimitText);
};

/* harmony default export */ __webpack_exports__["a"] = (RoadSign);

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UIProgressBar__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





var UPDATE_TEXT_TWEEN_DURATION = 2000;

var Score = function () {
    function Score(_ref) {
        var game = _ref.game,
            x = _ref.x,
            y = _ref.y,
            _ref$score = _ref.score,
            score = _ref$score === undefined ? 0 : _ref$score,
            goal = _ref.goal;

        _classCallCheck(this, Score);

        this.game = game;

        this.value = score;
        this.goal = goal;

        this.group = this.game.add.group();
        this.group.x = x;
        this.group.y = y;

        this.progressBar = new __WEBPACK_IMPORTED_MODULE_0__UIProgressBar__["a" /* default */]({
            game: this.game,
            x: 0,
            y: 0,
            width: this.game.width / 3,
            height: 10,
            color: 0xffffff,
            radius: 5
        });
        this.group.add(this.progressBar.graphics);

        this.scoreTextFontStyle = {
            font: '16px "Press Start 2P", Arial',
            fill: '#fff'
        };
        this.scoreText = this.game.add.text(0, this.progressBar.height * 2, '', this.scoreTextFontStyle);
        this.group.add(this.scoreText);

        this.updateText = this.game.add.text(0, this.scoreText.bottom, '', this.scoreTextFontStyle);
        this.group.add(this.updateText);

        this.updateTextTween = null;

        this.updateValue(0);
    }

    _createClass(Score, [{
        key: 'update',
        value: function update() {
            this.progressBar.update({ percent: this.value / this.goal });
        }
    }, {
        key: 'updateValue',
        value: function updateValue(sum) {
            this.value += sum;

            this.scoreText.setText(Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* getFormattedCurrency */])(this.value, this.game.rg.i18n.getTranslation(__WEBPACK_IMPORTED_MODULE_2__constants__["k" /* I18N_CURRENCY */])));

            if (sum !== 0) {
                this.updateText.setText((sum > 0 ? '+ ' : '- ') + Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* getFormattedCurrency */])(Math.abs(sum), this.game.rg.i18n.getTranslation(__WEBPACK_IMPORTED_MODULE_2__constants__["k" /* I18N_CURRENCY */])));
                this.updateText.fill = sum > 0 ? __WEBPACK_IMPORTED_MODULE_2__constants__["g" /* COLOR_HEX */].YELLOW : __WEBPACK_IMPORTED_MODULE_2__constants__["g" /* COLOR_HEX */].RED;
                this.updateText.alpha = 1;

                if (this.updateTextTween) {
                    this.updateTextTween.stop();
                }
                this.updateTextTween = this.game.add.tween(this.updateText).to({ alpha: 0 }, UPDATE_TEXT_TWEEN_DURATION);
                this.updateTextTween.start();
            }
        }
    }, {
        key: 'reachedGoal',
        get: function get() {
            return this.value >= this.goal;
        }
    }]);

    return Score;
}();

/* harmony default export */ __webpack_exports__["a"] = (Score);

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var TIME_RUNNING_OUT = 10;

var LevelTimer = function () {
    function LevelTimer(_ref) {
        var game = _ref.game,
            _ref$x = _ref.x,
            x = _ref$x === undefined ? game.width - __WEBPACK_IMPORTED_MODULE_1__constants__["_6" /* UI_OFFSET */] : _ref$x,
            _ref$y = _ref.y,
            y = _ref$y === undefined ? __WEBPACK_IMPORTED_MODULE_1__constants__["_6" /* UI_OFFSET */] : _ref$y,
            duration = _ref.duration;

        _classCallCheck(this, LevelTimer);

        this.game = game;
        this.duration = duration;

        this.timer = this.game.time.create();
        this.timer.loop(Phaser.Timer.SECOND, this.updateTimer, this);

        this.secondsElapsed = 0;

        this.textTimer = this.game.add.text(x, y, '');
        this.textTimer.font = '"Press Start 2P", Arial';
        this.textTimer.fontSize = 20;
        this.textTimer.fill = '#fff';
        this.textTimer.anchor.set(1, 0);
        this.textTimer.setShadow(2, 2, 'rgba(0, 0, 0, .8)', 0);
    }

    _createClass(LevelTimer, [{
        key: 'updateTimer',
        value: function updateTimer() {
            this.secondsElapsed++;
            var secondsLeft = this.duration - this.secondsElapsed;

            if (secondsLeft < TIME_RUNNING_OUT) {
                this.textTimer.fill = __WEBPACK_IMPORTED_MODULE_1__constants__["g" /* COLOR_HEX */].RED;
            }

            this.textTimer.setText(Object(__WEBPACK_IMPORTED_MODULE_0__utils__["c" /* getFormattedTime */])(secondsLeft));
        }
    }, {
        key: 'start',
        value: function start() {
            this.timer.start();
        }
    }, {
        key: 'kill',
        value: function kill() {
            this.timer.stop(true);
        }
    }, {
        key: 'isExpired',
        get: function get() {
            return this.secondsElapsed >= this.duration;
        }
    }]);

    return LevelTimer;
}();

/* harmony default export */ __webpack_exports__["a"] = (LevelTimer);

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UIScreen__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__UIColumns__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__UIButton__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants__ = __webpack_require__(0);
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var StartLevel = function (_UIScreen) {
    _inherits(StartLevel, _UIScreen);

    function StartLevel(_ref) {
        var game = _ref.game,
            height = _ref.height;

        _classCallCheck(this, StartLevel);

        var _this = _possibleConstructorReturn(this, (StartLevel.__proto__ || Object.getPrototypeOf(StartLevel)).call(this, { game: game, height: height }));

        var verticalPadding = 20;
        var horizontalPadding = 40;

        _this.textTitle = _this.game.add.text(_this.width / 2, verticalPadding, '', {
            font: '26px Arial',
            fontWeight: 'bold'
        });
        _this.textTitle.anchor.set(0.5, 0);
        _this.contentGroup.add(_this.textTitle);

        _this.rules = new __WEBPACK_IMPORTED_MODULE_1__UIColumns__["a" /* default */]({
            game: _this.game,
            x: horizontalPadding,
            y: _this.height / 2 - 30,
            style: {
                font: '16px "Press Start 2P", Arial'
            },
            lineSpacing: Math.round(Math.max(20, _this.height / 20)),
            columnSpacing: 2 * horizontalPadding
        });
        _this.contentGroup.add(_this.rules.group);

        var buttonsHeight = 40;
        var buttonsWidth = 140;
        var buttonsMargin = 40;
        _this.playButton = new __WEBPACK_IMPORTED_MODULE_2__UIButton__["a" /* default */]({
            game: _this.game,
            name: __WEBPACK_IMPORTED_MODULE_4__constants__["K" /* I18N_UI_BUTTON_PLAY */],
            x: (_this.width - buttonsMargin) / 2 - buttonsWidth,
            y: _this.height - verticalPadding - buttonsHeight,
            width: buttonsWidth,
            height: buttonsHeight,
            bg: __WEBPACK_IMPORTED_MODULE_4__constants__["f" /* COLOR */].GREEN,
            text: _this.game.rg.i18n.getTranslation(__WEBPACK_IMPORTED_MODULE_4__constants__["K" /* I18N_UI_BUTTON_PLAY */])
        });
        _this.contentGroup.add(_this.playButton.group);

        _this.quitButton = new __WEBPACK_IMPORTED_MODULE_2__UIButton__["a" /* default */]({
            game: _this.game,
            name: __WEBPACK_IMPORTED_MODULE_4__constants__["L" /* I18N_UI_BUTTON_QUIT */],
            x: (_this.width + buttonsMargin) / 2,
            y: _this.height - verticalPadding - buttonsHeight,
            width: buttonsWidth,
            height: buttonsHeight,
            bg: 0xffffff,
            text: _this.game.rg.i18n.getTranslation(__WEBPACK_IMPORTED_MODULE_4__constants__["L" /* I18N_UI_BUTTON_QUIT */]),
            style: {
                font: buttonsHeight / 2 + 'px Arial',
                fill: __WEBPACK_IMPORTED_MODULE_4__constants__["g" /* COLOR_HEX */].MAROON
            }
        });
        _this.contentGroup.add(_this.quitButton.group);
        return _this;
    }

    _createClass(StartLevel, [{
        key: 'handleOverlayTweenComplete',
        value: function handleOverlayTweenComplete(point, tween, _ref2) {
            var _this2 = this;

            var levelNumber = _ref2.levelNumber,
                goal = _ref2.goal,
                series = _ref2.series;

            this.textTitle.setText(this.game.rg.i18n.getTranslation(__WEBPACK_IMPORTED_MODULE_4__constants__["N" /* I18N_UI_LEVEL */]) + ' ' + levelNumber);

            var rulesList = [[[__WEBPACK_IMPORTED_MODULE_4__constants__["D" /* I18N_RULES_GOAL */]], [Object(__WEBPACK_IMPORTED_MODULE_3__utils__["b" /* getFormattedCurrency */])(goal, this.game.rg.i18n.getTranslation(__WEBPACK_IMPORTED_MODULE_4__constants__["k" /* I18N_CURRENCY */]))]], [[__WEBPACK_IMPORTED_MODULE_4__constants__["C" /* I18N_RULES_AUTHORITIES */]], [series.join(', '), __WEBPACK_IMPORTED_MODULE_4__constants__["g" /* COLOR_HEX */].RED]]];

            this.rules.setText(rulesList.map(function (_ref3) {
                var _ref4 = _slicedToArray(_ref3, 2),
                    left = _ref4[0],
                    right = _ref4[1];

                return [[_this2.game.rg.i18n.getTranslation(left[0]) + ':', left[1]], right];
            }));

            _get(StartLevel.prototype.__proto__ || Object.getPrototypeOf(StartLevel.prototype), 'handleOverlayTweenComplete', this).call(this);
        }
    }]);

    return StartLevel;
}(__WEBPACK_IMPORTED_MODULE_0__UIScreen__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (StartLevel);

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UIColumns = function () {
    function UIColumns(_ref) {
        var game = _ref.game,
            x = _ref.x,
            y = _ref.y,
            _ref$style = _ref.style,
            style = _ref$style === undefined ? {} : _ref$style,
            lineSpacing = _ref.lineSpacing,
            columnSpacing = _ref.columnSpacing;

        _classCallCheck(this, UIColumns);

        this.game = game;

        this.group = this.game.add.group();
        this.group.x = x;
        this.group.y = y;

        this.style = style;
        this.lineSpacing = lineSpacing;
        this.columnSpacing = columnSpacing;
    }

    _createClass(UIColumns, [{
        key: "setText",
        value: function setText(text) {
            var _this = this;

            this.group.removeAll();

            var leftColumnWidth = 0;
            var lineY = 0;

            text.forEach(function (_ref2, i) {
                var _ref3 = _slicedToArray(_ref2, 1),
                    _ref3$ = _slicedToArray(_ref3[0], 2),
                    textLeft = _ref3$[0],
                    fillLeft = _ref3$[1];

                var label = _this.createTextLine(0, lineY, textLeft, fillLeft);
                if (label.width > leftColumnWidth) {
                    leftColumnWidth = label.width;
                }
                lineY += label.height + _this.lineSpacing;
                _this.group.addChild(label);
            });

            leftColumnWidth += this.columnSpacing;
            lineY = 0;

            text.forEach(function (_ref4, i) {
                var _ref5 = _slicedToArray(_ref4, 2),
                    _ = _ref5[0],
                    _ref5$ = _slicedToArray(_ref5[1], 2),
                    textRight = _ref5$[0],
                    fillRight = _ref5$[1];

                var label = _this.createTextLine(leftColumnWidth, lineY, textRight, fillRight);
                lineY += label.height + _this.lineSpacing;
                _this.group.addChild(label);
            });
        }
    }, {
        key: "createTextLine",
        value: function createTextLine(x, y, text, fill) {
            var currentFontStyles = _extends({}, this.style);
            if (fill) {
                currentFontStyles.fill = fill;
            }
            return this.game.add.text(x, y, text, currentFontStyles);
        }
    }]);

    return UIColumns;
}();

/* harmony default export */ __webpack_exports__["a"] = (UIColumns);

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UIScreen__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__UIButton__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__UIColumns__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants__ = __webpack_require__(0);
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var EndLevel = function (_UIScreen) {
    _inherits(EndLevel, _UIScreen);

    function EndLevel(_ref) {
        var game = _ref.game,
            height = _ref.height;

        _classCallCheck(this, EndLevel);

        var _this = _possibleConstructorReturn(this, (EndLevel.__proto__ || Object.getPrototypeOf(EndLevel)).call(this, { game: game, height: height }));

        var verticalPadding = 20;
        var horizontalPadding = 40;

        _this.textMode = _this.game.add.text(_this.width / 2, verticalPadding, '', {
            font: '26px Arial',
            fontWeight: 'bold'
        });
        _this.textMode.anchor.set(0.5, 0);
        _this.contentGroup.add(_this.textMode);

        _this.stats = new __WEBPACK_IMPORTED_MODULE_2__UIColumns__["a" /* default */]({
            game: _this.game,
            x: horizontalPadding,
            y: _this.textMode.bottom + Math.max(verticalPadding, _this.height / 14),
            style: {
                font: '16px "Press Start 2P", Arial'
            },
            lineSpacing: Math.round(Math.max(10, _this.height / 27)),
            columnSpacing: 2 * horizontalPadding
        });
        _this.contentGroup.add(_this.stats.group);

        var buttonsHeight = 40;
        var buttonsWidth = 140;
        var buttonsMargin = 40;
        _this.nextButton = new __WEBPACK_IMPORTED_MODULE_1__UIButton__["a" /* default */]({
            game: _this.game,
            name: __WEBPACK_IMPORTED_MODULE_4__constants__["J" /* I18N_UI_BUTTON_NEXT */],
            x: (_this.width - buttonsMargin) / 2 - buttonsWidth,
            y: _this.height - verticalPadding - buttonsHeight,
            width: buttonsWidth,
            height: buttonsHeight,
            bg: __WEBPACK_IMPORTED_MODULE_4__constants__["f" /* COLOR */].GREEN,
            text: _this.game.rg.i18n.getTranslation(__WEBPACK_IMPORTED_MODULE_4__constants__["J" /* I18N_UI_BUTTON_NEXT */])
        });
        _this.contentGroup.add(_this.nextButton.group);

        _this.replayButton = new __WEBPACK_IMPORTED_MODULE_1__UIButton__["a" /* default */]({
            game: _this.game,
            name: __WEBPACK_IMPORTED_MODULE_4__constants__["M" /* I18N_UI_BUTTON_REPLAY */],
            x: (_this.width - buttonsMargin) / 2 - buttonsWidth,
            y: _this.height - verticalPadding - buttonsHeight,
            width: buttonsWidth,
            height: buttonsHeight,
            bg: __WEBPACK_IMPORTED_MODULE_4__constants__["f" /* COLOR */].GREEN,
            text: _this.game.rg.i18n.getTranslation(__WEBPACK_IMPORTED_MODULE_4__constants__["M" /* I18N_UI_BUTTON_REPLAY */])
        });
        _this.contentGroup.add(_this.replayButton.group);

        _this.quitButton = new __WEBPACK_IMPORTED_MODULE_1__UIButton__["a" /* default */]({
            game: _this.game,
            name: __WEBPACK_IMPORTED_MODULE_4__constants__["L" /* I18N_UI_BUTTON_QUIT */],
            x: (_this.width + buttonsMargin) / 2,
            y: _this.height - verticalPadding - buttonsHeight,
            width: buttonsWidth,
            height: buttonsHeight,
            bg: 0xffffff,
            text: _this.game.rg.i18n.getTranslation(__WEBPACK_IMPORTED_MODULE_4__constants__["L" /* I18N_UI_BUTTON_QUIT */]),
            style: {
                font: buttonsHeight / 2 + 'px Arial',
                fill: __WEBPACK_IMPORTED_MODULE_4__constants__["g" /* COLOR_HEX */].MAROON
            }
        });
        _this.contentGroup.add(_this.quitButton.group);
        return _this;
    }

    _createClass(EndLevel, [{
        key: 'handleOverlayTweenComplete',
        value: function handleOverlayTweenComplete(point, tween, _ref2) {
            var _this2 = this;

            var mode = _ref2.mode,
                stats = _ref2.stats,
                nextLevel = _ref2.nextLevel;

            this.textMode.fill = mode === __WEBPACK_IMPORTED_MODULE_4__constants__["i" /* END_GAME_WIN */] ? __WEBPACK_IMPORTED_MODULE_4__constants__["g" /* COLOR_HEX */].GREEN : __WEBPACK_IMPORTED_MODULE_4__constants__["g" /* COLOR_HEX */].MAROON;
            this.textMode.setText(this.game.rg.i18n.getTranslation(mode === __WEBPACK_IMPORTED_MODULE_4__constants__["i" /* END_GAME_WIN */] ? __WEBPACK_IMPORTED_MODULE_4__constants__["m" /* I18N_END_WIN */] : __WEBPACK_IMPORTED_MODULE_4__constants__["l" /* I18N_END_LOOSE */]));

            var statsList = [[__WEBPACK_IMPORTED_MODULE_4__constants__["E" /* I18N_STATS_FINES */], stats.fines], [__WEBPACK_IMPORTED_MODULE_4__constants__["H" /* I18N_STATS_WRONG */], stats.wrong, __WEBPACK_IMPORTED_MODULE_4__constants__["g" /* COLOR_HEX */].RED], [__WEBPACK_IMPORTED_MODULE_4__constants__["F" /* I18N_STATS_MISSED */], stats.missed]].map(function (_ref3) {
                var _ref4 = _slicedToArray(_ref3, 3),
                    label = _ref4[0],
                    _ref4$ = _ref4[1],
                    count = _ref4$.count,
                    sum = _ref4$.sum,
                    fill = _ref4[2];

                return [label, sum === 0 ? String(count) : count + ' (' + Object(__WEBPACK_IMPORTED_MODULE_3__utils__["b" /* getFormattedCurrency */])(sum, _this2.game.rg.i18n.getTranslation(__WEBPACK_IMPORTED_MODULE_4__constants__["k" /* I18N_CURRENCY */])) + ')', fill];
            });

            if (mode === __WEBPACK_IMPORTED_MODULE_4__constants__["i" /* END_GAME_WIN */]) {
                statsList.unshift([__WEBPACK_IMPORTED_MODULE_4__constants__["G" /* I18N_STATS_TIME */], String(Object(__WEBPACK_IMPORTED_MODULE_3__utils__["c" /* getFormattedTime */])(stats.time))]);
            }
            this.stats.setText(statsList.map(function (_ref5) {
                var _ref6 = _slicedToArray(_ref5, 3),
                    label = _ref6[0],
                    value = _ref6[1],
                    fill = _ref6[2];

                return [[_this2.game.rg.i18n.getTranslation(label) + ':', fill], [value, fill]];
            }));

            if (mode === __WEBPACK_IMPORTED_MODULE_4__constants__["i" /* END_GAME_WIN */] && nextLevel !== null) {
                this.nextButton.group.visible = true;
                this.replayButton.group.visible = false;
            } else {
                this.nextButton.group.visible = false;
                this.replayButton.group.visible = true;
            }

            _get(EndLevel.prototype.__proto__ || Object.getPrototypeOf(EndLevel.prototype), 'handleOverlayTweenComplete', this).call(this);
        }
    }]);

    return EndLevel;
}(__WEBPACK_IMPORTED_MODULE_0__UIScreen__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (EndLevel);

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(0);
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var RAIN_FREQUENCY = 400;
var RAIN_TWEEN_DURATION = 300;
var RAIN_TILE_HEIGHT = 256;
var FLASH_TIMING = [[25500, 400], [50000, 500]];

var FOG_FREQUENCY = 100;
var FOG_OPACITY = 0.3;

var Weather = function () {
    function Weather(_ref) {
        var game = _ref.game,
            weather = _ref.weather,
            road = _ref.road,
            bgGroup = _ref.bgGroup,
            onFlash = _ref.onFlash;

        _classCallCheck(this, Weather);

        this.game = game;
        this.weather = weather;
        this.road = road;

        this.onFlash = onFlash;
        this.isFlash = false;
        this.flashTimers = [];
        this.rainSky = null;

        this.curtains = [];

        if (this.weather === __WEBPACK_IMPORTED_MODULE_0__constants__["_7" /* WEATHER_FOG */]) {
            var x = 0;
            while (x < this.road.length) {
                var curtain = this.createFogCurtain(x);
                this.curtains.push(curtain);
                x += FOG_FREQUENCY;
            }
        } else if (this.weather === __WEBPACK_IMPORTED_MODULE_0__constants__["_8" /* WEATHER_THUNDER */]) {
            this.rainSky = this.game.add.graphics();
            this.drawRainSky();
            bgGroup.add(this.rainSky);

            var _x = 0;
            while (_x <= this.road.length) {
                _x += RAIN_FREQUENCY;
                var _curtain = this.createRainCurtain(_x);
                this.curtains.push(_curtain);
            }
        }
    }

    _createClass(Weather, [{
        key: 'update',
        value: function update() {
            if (this.isFlash && this.flashTimers.every(function (_ref2) {
                var _ref3 = _slicedToArray(_ref2, 3),
                    timer = _ref3[0],
                    period = _ref3[1],
                    duration = _ref3[2];

                return timer.duration < period - duration;
            })) {
                this.isFlash = false;
                this.handleFlashEnd();
            }
        }
    }, {
        key: 'handleFlashStart',
        value: function handleFlashStart() {
            if (!this.isFlash) {
                this.drawRainSky(__WEBPACK_IMPORTED_MODULE_0__constants__["f" /* COLOR */].FLORAL_WHITE);
            }
            this.isFlash = true;
            this.onFlash(true);
        }
    }, {
        key: 'handleFlashEnd',
        value: function handleFlashEnd() {
            this.drawRainSky();
            this.onFlash(false);
        }
    }, {
        key: 'createFogCurtain',
        value: function createFogCurtain(x) {
            var curtain = this.game.add.graphics();
            // for sorting issues
            curtain.rg = {
                position: new Phaser.Point(x, 0)
            };

            curtain.beginFill(__WEBPACK_IMPORTED_MODULE_0__constants__["f" /* COLOR */].STEEL, FOG_OPACITY);
            curtain.drawRect(0, 0, this.game.width, this.road.getProjection({ x: x, y: 0 }).y);
            curtain.endFill();

            return curtain;
        }
    }, {
        key: 'createRainCurtain',
        value: function createRainCurtain(x) {
            var projection = this.road.getProjection({ x: x, y: 0 });
            var curtain = this.game.add.tileSprite(0, -10, this.game.width, projection.y, 'rain');
            curtain.tileScale.set(projection.scale);
            this.game.add.tween(curtain.tilePosition).to({
                y: RAIN_TILE_HEIGHT
            }, RAIN_TWEEN_DURATION * curtain.tileScale.y, null, true, 0, -1);
            curtain.rg = {
                // for sorting issues
                position: new Phaser.Point(x, 0)
            };
            return curtain;
        }
    }, {
        key: 'drawRainSky',
        value: function drawRainSky() {
            var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : __WEBPACK_IMPORTED_MODULE_0__constants__["f" /* COLOR */].STEEL;

            this.rainSky.beginFill(color);
            this.rainSky.drawRect(0, 0, this.game.width, this.road.topLeft.y);
            this.rainSky.endFill();
        }
    }, {
        key: 'startFlashTimers',
        value: function startFlashTimers() {
            var _this = this;

            if (this.weather === __WEBPACK_IMPORTED_MODULE_0__constants__["_8" /* WEATHER_THUNDER */]) {
                this.flashTimers = FLASH_TIMING.map(function (_ref4) {
                    var _ref5 = _slicedToArray(_ref4, 2),
                        period = _ref5[0],
                        duration = _ref5[1];

                    var timer = _this.game.time.create(false);
                    timer.loop(period, _this.handleFlashStart, _this);
                    timer.start();
                    return [timer, period, duration];
                });
            }
        }
    }]);

    return Weather;
}();

/* harmony default export */ __webpack_exports__["a"] = (Weather);

/***/ }),
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var PauseLevel = function () {
    function PauseLevel(_ref) {
        var game = _ref.game;

        _classCallCheck(this, PauseLevel);

        this.game = game;

        this.graphics = this.game.add.graphics();
        this.graphics.name = __WEBPACK_IMPORTED_MODULE_0__constants__["P" /* I18N_UI_PAUSE */];
        this.graphics.drawRect(0, 0, this.game.width, this.game.height);
        this.graphics.inputEnabled = true;

        this.text = this.game.add.text(this.game.width / 2, this.game.height / 2, this.game.rg.i18n.getTranslation(__WEBPACK_IMPORTED_MODULE_0__constants__["P" /* I18N_UI_PAUSE */]), {
            font: '28px "Press Start 2P", Arial',
            fill: '#fff'
        });
        this.text.anchor.set(0.5);
        this.text.setShadow(4, 4, 'rgba(0, 0, 0, .8)', 0);
        this.graphics.addChild(this.text);

        // initially dead
        this.kill();
    }

    _createClass(PauseLevel, [{
        key: 'revive',
        value: function revive() {
            this.graphics.revive();
        }
    }, {
        key: 'kill',
        value: function kill() {
            this.graphics.kill();
        }
    }]);

    return PauseLevel;
}();

/* harmony default export */ __webpack_exports__["a"] = (PauseLevel);

/***/ })
/******/ ]);