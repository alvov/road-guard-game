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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return UI_OFFSET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return COLOR_MAIN_BG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return COLOR_DARK_RED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return STATE_BOOT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return STATE_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return STATE_MENU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return STATE_GAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return LANG_RU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return LANG_EN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return CAR_MODE_NORMAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CAR_MODE_FINED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return RADAR_MODE_EMPTY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return RADAR_MODE_COMPUTING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return RADAR_MODE_FINE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return RADAR_MODE_DISMISS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return RADAR_MODE_FINED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return RADAR_MODE_ROGUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return RADAR_MODE_ALREADY_FINED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return I18N_GAME_TITLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return I18N_MENU_BACK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return I18N_MENU_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return I18N_UI_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return I18N_UI_PAUSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return I18N_CURRENCY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return I18N_RADAR_EMPTY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return I18N_RADAR_METRICS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return I18N_RADAR_WAIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return I18N_RADAR_FINED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return I18N_RADAR_ROGUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return I18N_RADAR_ALREADY_FINED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return I18N_RADAR_PRESS_TO_FINE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return CAR_RELATIVE_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return CAR_SPRITE_KEYS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CAR_COLORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CAR_ALLOWED_PLATE_LETTERS; });
var UI_OFFSET = 10;

var COLOR_MAIN_BG = '#312162';
var COLOR_DARK_RED = '#BD0E0E';

var STATE_BOOT = 'boot';
var STATE_LOADING = 'loading';
var STATE_MENU = 'menu';
var STATE_GAME = 'game';

var LANG_RU = 'ru';
var LANG_EN = 'en';

var CAR_MODE_NORMAL = 'normal';
var CAR_MODE_FINED = 'fined';

var RADAR_MODE_EMPTY = 'empty';
var RADAR_MODE_COMPUTING = 'computing';
var RADAR_MODE_FINE = 'fine';
var RADAR_MODE_DISMISS = 'dismiss';
var RADAR_MODE_FINED = 'fined';
var RADAR_MODE_ROGUE = 'rogue';
var RADAR_MODE_ALREADY_FINED = 'alreadyFined';

var I18N_GAME_TITLE = 'gameTitle';
var I18N_MENU_BACK = 'menuBack';
var I18N_MENU_START = 'menuStart';
var I18N_UI_LOADING = 'uiLoading';
var I18N_UI_PAUSE = 'uiPause';
var I18N_CURRENCY = 'currency';
var I18N_RADAR_EMPTY = 'radarEmpty';
var I18N_RADAR_METRICS = 'radarMetrics';
var I18N_RADAR_WAIT = 'radarWait';
var I18N_RADAR_FINED = 'radarFined';
var I18N_RADAR_ROGUE = 'radarRogue';
var I18N_RADAR_ALREADY_FINED = 'radarAlreadyFined';
var I18N_RADAR_PRESS_TO_FINE = 'radarPressToFine';

var CAR_RELATIVE_WIDTH = 200;
var CAR_SPRITE_KEYS = ['car01'];
var CAR_COLORS = [0x252525, 0xFCF8EE, 0x9A2F2F, 0xAAB0B6, 0x2A3485];
var CAR_ALLOWED_PLATE_LETTERS = ['A', 'B', 'C', 'E', 'H', 'K', 'M', 'O', 'P', 'T', 'X'];

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var pack = {
    initial: [{
        type: 'spritesheet',
        key: 'langButtons',
        url: __webpack_require__(4),
        frameWidth: 50,
        frameHeight: 50
    }],
    game: [{
        type: 'image',
        key: 'ground',
        url: __webpack_require__(5),
        overwrite: false
    }, {
        type: 'spritesheet',
        key: 'roadSign',
        url: __webpack_require__(18),
        frameWidth: 60,
        frameHeight: 140
    }, {
        type: 'spritesheet',
        key: 'car01',
        url: __webpack_require__(6),
        frameWidth: 152,
        frameHeight: 102
    }]
};

/* harmony default export */ __webpack_exports__["a"] = (JSON.stringify(pack));

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__states_Boot__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__states_Loading__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__states_StartMenu__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__states_Game__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants__ = __webpack_require__(0);







window.WebFontConfig = {
    google: {
        families: ['Press Start 2P:400:latin,cyrillic']
    },
    active: function active() {
        initGame();
    }
};

var script = document.createElement('script');
script.src = 'dist/webfontloader.js';
document.head.appendChild(script);

// this fixes mobile browser 100% height issue with address bar and tabs
function initGame() {
    var windowInnerHeight = window.innerHeight;
    if (document.body.clientHeight > windowInnerHeight) {
        document.body.style.height = windowInnerHeight + 'px';
        document.documentElement.style.height = windowInnerHeight + 'px';
    }

    var containerNode = document.querySelector('.js-game-container');

    var game = new Phaser.Game({
        width: containerNode.clientWidth,
        height: containerNode.clientHeight,
        parent: containerNode,
        antialias: true,
        renderer: Phaser.CANVAS
    });

    game.state.add(__WEBPACK_IMPORTED_MODULE_4__constants__["E" /* STATE_BOOT */], __WEBPACK_IMPORTED_MODULE_0__states_Boot__["a" /* default */]);
    game.state.add(__WEBPACK_IMPORTED_MODULE_4__constants__["G" /* STATE_LOADING */], __WEBPACK_IMPORTED_MODULE_1__states_Loading__["a" /* default */]);
    game.state.add(__WEBPACK_IMPORTED_MODULE_4__constants__["H" /* STATE_MENU */], __WEBPACK_IMPORTED_MODULE_2__states_StartMenu__["a" /* default */]);
    game.state.add(__WEBPACK_IMPORTED_MODULE_4__constants__["F" /* STATE_GAME */], __WEBPACK_IMPORTED_MODULE_3__states_Game__["a" /* default */]);

    game.state.start(__WEBPACK_IMPORTED_MODULE_4__constants__["E" /* STATE_BOOT */]);
}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assets_pack__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_i18n__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

            this.game.rg = {};
        }
    }, {
        key: 'create',
        value: function create() {
            this.game.rg.i18n = new __WEBPACK_IMPORTED_MODULE_1__classes_i18n__["a" /* default */]({
                game: this.game
            });

            this.state.onStateChange.add(this.handleStateChange, this);

            this.state.start(__WEBPACK_IMPORTED_MODULE_2__constants__["G" /* STATE_LOADING */], true, false, {
                assets: [['pack', 'initial', null, __WEBPACK_IMPORTED_MODULE_0__assets_pack__["a" /* default */]]],
                nextState: [__WEBPACK_IMPORTED_MODULE_2__constants__["H" /* STATE_MENU */]]
            });
        }
    }, {
        key: 'handleStateChange',
        value: function handleStateChange() {
            this.game.rg.i18n.clear();
        }
    }]);

    return Boot;
}();

/* harmony default export */ __webpack_exports__["a"] = (Boot);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/66dd3dd498c059b331146e5fe01f17dd.png";

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/cea0f9cd29f9b7e3183f04f328253200.png";

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/36087b23846a93778075af2ed030812c.png";

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assets_i18n__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var i18n = function () {
    function i18n(_ref) {
        var game = _ref.game;

        _classCallCheck(this, i18n);

        this.game = game;
        this.textObjects = [];
        this.currentLang = navigator.language === __WEBPACK_IMPORTED_MODULE_1__constants__["w" /* LANG_RU */] ? __WEBPACK_IMPORTED_MODULE_1__constants__["w" /* LANG_RU */] : __WEBPACK_IMPORTED_MODULE_1__constants__["v" /* LANG_EN */];
        this.translations = __WEBPACK_IMPORTED_MODULE_0__assets_i18n__["a" /* default */];
    }

    _createClass(i18n, [{
        key: 'setLang',
        value: function setLang(lang) {
            var _this = this;

            this.currentLang = lang;
            this.textObjects.forEach(function (_ref2) {
                var inst = _ref2.inst,
                    text = _ref2.text;

                inst.setText(_this.getTranslation(text));
            });
        }
    }, {
        key: 'createText',
        value: function createText(x, y, text, font) {
            var textObject = this.game.add.text(x, y, this.getTranslation(text), font);
            this.textObjects.push({
                inst: textObject,
                text: text
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
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_js__ = __webpack_require__(0);
var _cnst$I18N_GAME_TITLE;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/* harmony default export */ __webpack_exports__["a"] = (_cnst$I18N_GAME_TITLE = {}, _defineProperty(_cnst$I18N_GAME_TITLE, __WEBPACK_IMPORTED_MODULE_0__constants_js__["j" /* I18N_GAME_TITLE */], {
    en: 'Road Guard',
    ru: 'Дорожный Дозор'
}), _defineProperty(_cnst$I18N_GAME_TITLE, __WEBPACK_IMPORTED_MODULE_0__constants_js__["k" /* I18N_MENU_BACK */], {
    en: '<   Back',
    ru: '<   Назад'
}), _defineProperty(_cnst$I18N_GAME_TITLE, __WEBPACK_IMPORTED_MODULE_0__constants_js__["l" /* I18N_MENU_START */], {
    en: 'Play',
    ru: 'Играть'
}), _defineProperty(_cnst$I18N_GAME_TITLE, __WEBPACK_IMPORTED_MODULE_0__constants_js__["t" /* I18N_UI_LOADING */], {
    en: 'Loading',
    ru: 'Загрузка'
}), _defineProperty(_cnst$I18N_GAME_TITLE, __WEBPACK_IMPORTED_MODULE_0__constants_js__["u" /* I18N_UI_PAUSE */], {
    en: 'Paused',
    ru: 'Пауза'
}), _defineProperty(_cnst$I18N_GAME_TITLE, __WEBPACK_IMPORTED_MODULE_0__constants_js__["i" /* I18N_CURRENCY */], {
    en: 'rub.',
    ru: 'руб.'
}), _defineProperty(_cnst$I18N_GAME_TITLE, __WEBPACK_IMPORTED_MODULE_0__constants_js__["p" /* I18N_RADAR_METRICS */], {
    en: 'km/h',
    ru: 'км/ч'
}), _defineProperty(_cnst$I18N_GAME_TITLE, __WEBPACK_IMPORTED_MODULE_0__constants_js__["n" /* I18N_RADAR_EMPTY */], {
    en: 'CHOOSE A CAR',
    ru: 'ВЫБЕРИТЕ МАШИНУ'
}), _defineProperty(_cnst$I18N_GAME_TITLE, __WEBPACK_IMPORTED_MODULE_0__constants_js__["s" /* I18N_RADAR_WAIT */], {
    en: 'wait...',
    ru: 'ждите...'
}), _defineProperty(_cnst$I18N_GAME_TITLE, __WEBPACK_IMPORTED_MODULE_0__constants_js__["o" /* I18N_RADAR_FINED */], {
    en: 'Fine',
    ru: 'Штраф'
}), _defineProperty(_cnst$I18N_GAME_TITLE, __WEBPACK_IMPORTED_MODULE_0__constants_js__["r" /* I18N_RADAR_ROGUE */], {
    en: 'CAN NOT!',
    ru: 'НЕЛЬЗЯ!'
}), _defineProperty(_cnst$I18N_GAME_TITLE, __WEBPACK_IMPORTED_MODULE_0__constants_js__["m" /* I18N_RADAR_ALREADY_FINED */], {
    en: 'ALREADY FINED!',
    ru: 'ШТРАФ ВЫПИСАН!'
}), _defineProperty(_cnst$I18N_GAME_TITLE, __WEBPACK_IMPORTED_MODULE_0__constants_js__["q" /* I18N_RADAR_PRESS_TO_FINE */], {
    en: 'tap to fine',
    ru: 'оштрафовать?'
}), _cnst$I18N_GAME_TITLE);

/***/ }),
/* 9 */
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

            this.game.stage.backgroundColor = __WEBPACK_IMPORTED_MODULE_0__constants__["h" /* COLOR_MAIN_BG */];

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

            this.rg.objects.textLoading = this.game.add.text(this.game.world.centerX - 5, this.game.world.centerY, this.game.rg.i18n.getTranslation(__WEBPACK_IMPORTED_MODULE_0__constants__["t" /* I18N_UI_LOADING */]), {
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
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__levels_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_pack_js__ = __webpack_require__(1);
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
            this.game.stage.backgroundColor = __WEBPACK_IMPORTED_MODULE_2__constants__["h" /* COLOR_MAIN_BG */];
        }
    }, {
        key: 'create',
        value: function create() {
            var _this = this;

            this.game.world.resize(this.game.width, this.game.height);

            var offsetLeft = 40;

            this.title = this.game.rg.i18n.createText(this.game.width / 2, this.game.height / 6, __WEBPACK_IMPORTED_MODULE_2__constants__["j" /* I18N_GAME_TITLE */], {
                fill: '#fff'
            });
            this.title.anchor.set(0.5);

            var menuOffset = this.game.height / 3;
            var menuVerticalSpacing = Math.min(this.game.height / 7, 70);
            this.menu = [[__WEBPACK_IMPORTED_MODULE_2__constants__["l" /* I18N_MENU_START */], this.handleClickPlay.bind(this)]].map(function (_ref, i) {
                var _ref2 = _slicedToArray(_ref, 2),
                    itemTitle = _ref2[0],
                    callback = _ref2[1];

                return [_this.game.rg.i18n.createText(offsetLeft, i * menuVerticalSpacing + menuOffset, itemTitle, {
                    font: '18px "Press Start 2P", Arial',
                    fill: '#fff'
                }), callback];
            });

            this.langButton = this.game.add.button(this.game.world.width - __WEBPACK_IMPORTED_MODULE_2__constants__["I" /* UI_OFFSET */], 0, 'langButtons', this.handleClickLang.bind(this));
            this.langButton.anchor.set(1, 0);

            this.game.input.onDown.add(this.handleClickMenu, this);
        }
    }, {
        key: 'update',
        value: function update() {
            this.langButton.frame = this.game.rg.i18n.currentLang === __WEBPACK_IMPORTED_MODULE_2__constants__["w" /* LANG_RU */] ? 1 : 0;
        }
    }, {
        key: 'handleClickPlay',
        value: function handleClickPlay() {
            this.state.start(__WEBPACK_IMPORTED_MODULE_2__constants__["G" /* STATE_LOADING */], true, false, {
                assets: [['pack', 'game', null, __WEBPACK_IMPORTED_MODULE_1__assets_pack_js__["a" /* default */]]],
                nextState: [__WEBPACK_IMPORTED_MODULE_2__constants__["F" /* STATE_GAME */], __WEBPACK_IMPORTED_MODULE_0__levels_js__["a" /* default */]['level1']]
            });
        }
    }, {
        key: 'handleClickLang',
        value: function handleClickLang() {
            this.game.rg.i18n.setLang(this.game.rg.i18n.currentLang === __WEBPACK_IMPORTED_MODULE_2__constants__["w" /* LANG_RU */] ? __WEBPACK_IMPORTED_MODULE_2__constants__["v" /* LANG_EN */] : __WEBPACK_IMPORTED_MODULE_2__constants__["w" /* LANG_RU */]);
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
    }]);

    return StartMenu;
}();

/* harmony default export */ __webpack_exports__["a"] = (StartMenu);

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    level1: {
        id: 'level1',
        duration: 3 * 60, // s
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
        money: {
            fines: [[20, 0, 50], [40, 500, 30], [60, 1500, 10], [80, 2500, 8], [100, 5000, 2]],
            goal: 50000
        },
        radar: {
            computing: 1000 // ms
        },
        cars: {
            frequency: 2, // s
            series: ['AAA', 'AMP', 'EKX'],
            rogue: 0.1
        }
    }
});

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__classes_Car__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_Road__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classes_GameInterface__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__classes_RadarMonitor__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__classes_RoadSign__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__classes_Score__ = __webpack_require__(20);
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
                cars: {
                    revive: false,
                    count: (level.road.end - level.road.start) / level.speed.limit / level.cars.frequency
                },
                objects: {
                    road: null,
                    roadSign: null,
                    interface: null,
                    score: null,
                    radar: null
                },
                arrays: {
                    cars: []
                },
                groups: {
                    cars: null,
                    carsBehind: null
                },
                timers: {
                    reviveCar: null
                }
            };
        }
    }, {
        key: 'create',
        value: function create() {
            // background
            this.game.stage.backgroundColor = '#85c2ee';

            // cars behind the road
            this.rg.groups.carsBehind = this.game.add.group();

            // road
            this.rg.objects.road = new __WEBPACK_IMPORTED_MODULE_1__classes_Road__["a" /* default */](_extends({
                game: this.game
            }, this.rg.level.road));

            this.rg.objects.roadSign = new __WEBPACK_IMPORTED_MODULE_5__classes_RoadSign__["a" /* default */](_extends({
                game: this.game
            }, this.rg.objects.road.getProjection({
                x: this.rg.objects.road.length / 2,
                y: -__WEBPACK_IMPORTED_MODULE_4__constants__["I" /* UI_OFFSET */]
            }), {
                speedLimit: this.rg.level.speed.limit
            }));

            // cars
            this.rg.timers.reviveCar = this.game.time.create(false);
            this.resetCarTimer();

            this.rg.groups.cars = this.game.add.group();
            this.createCars(this.rg.cars.count);

            // ui
            this.rg.objects.interface = new __WEBPACK_IMPORTED_MODULE_2__classes_GameInterface__["a" /* default */]({
                game: this.game
            });

            this.rg.objects.score = new __WEBPACK_IMPORTED_MODULE_6__classes_Score__["a" /* default */]({
                game: this.game,
                x: __WEBPACK_IMPORTED_MODULE_4__constants__["I" /* UI_OFFSET */],
                y: __WEBPACK_IMPORTED_MODULE_4__constants__["I" /* UI_OFFSET */],
                goal: this.rg.level.money.goal
            });

            var radarHeight = 100;
            this.rg.objects.radar = new __WEBPACK_IMPORTED_MODULE_3__classes_RadarMonitor__["a" /* default */](_extends({
                game: this.game,
                x: __WEBPACK_IMPORTED_MODULE_4__constants__["I" /* UI_OFFSET */],
                y: this.game.height - radarHeight - __WEBPACK_IMPORTED_MODULE_4__constants__["I" /* UI_OFFSET */],
                width: this.rg.objects.road.roadOffsetLeft - __WEBPACK_IMPORTED_MODULE_4__constants__["I" /* UI_OFFSET */] * 2,
                height: radarHeight
            }, this.rg.level.radar, {
                fines: this.rg.level.money.fines,
                speedLimit: this.rg.level.speed.limit,
                onFine: this.handleFine.bind(this)
            }));

            // events
            this.game.input.onDown.add(this.handleTap, this);
        }
    }, {
        key: 'update',
        value: function update() {
            // update cars starting from the closest to the player
            for (var i = this.rg.groups.cars.length - 1; i >= 0; i--) {
                var carSprite = this.rg.groups.cars.getChildAt(i);
                if (!carSprite.alive) {
                    continue;
                }

                this.updateCar(this.rg.groups.cars.getChildAt(i));

                if (carSprite.rg.position.x > this.rg.level.road.end) {
                    carSprite.rg.kill();
                }
            }

            for (var _i = this.rg.groups.carsBehind.length - 1; _i >= 0; _i--) {
                var _carSprite = this.rg.groups.carsBehind.getChildAt(_i);
                if (!_carSprite.alive) {
                    continue;
                }
                this.updateCar(this.rg.groups.carsBehind.getChildAt(_i));

                if (_carSprite.rg.position.x > 0) {
                    this.rg.groups.cars.add(_carSprite);
                }
            }

            this.rg.groups.carsBehind.customSort(this.sortCars, this);
            this.rg.groups.cars.customSort(this.sortCars, this);

            if (this.rg.cars.revive) {
                this.rg.cars.revive = !this.reviveCar();
            }

            // update radar
            this.rg.objects.radar.update();
        }
    }, {
        key: 'updateCar',
        value: function updateCar(carSprite) {
            var car = carSprite.rg;
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
        key: 'handleTap',
        value: function handleTap(pointer) {
            var handled = void 0;
            if (pointer.targetObject) {
                if (pointer.targetObject.sprite.name.startsWith('car')) {
                    this.handleClickCar(pointer.targetObject.sprite.rg);
                    handled = true;
                } else if (pointer.targetObject.sprite.name === 'radar') {
                    if (this.rg.objects.radar.mode === __WEBPACK_IMPORTED_MODULE_4__constants__["B" /* RADAR_MODE_FINE */]) {
                        this.handleFine();
                        handled = true;
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
            this.rg.objects.radar.setMode(__WEBPACK_IMPORTED_MODULE_4__constants__["A" /* RADAR_MODE_EMPTY */]);
        }
    }, {
        key: 'handleClickCar',
        value: function handleClickCar(car) {
            if (car.mode === __WEBPACK_IMPORTED_MODULE_4__constants__["c" /* CAR_MODE_FINED */]) {
                this.rg.objects.radar.setMode(car.isRogue ? __WEBPACK_IMPORTED_MODULE_4__constants__["D" /* RADAR_MODE_ROGUE */] : __WEBPACK_IMPORTED_MODULE_4__constants__["x" /* RADAR_MODE_ALREADY_FINED */]);
            } else {
                this.rg.objects.radar.setMode(__WEBPACK_IMPORTED_MODULE_4__constants__["y" /* RADAR_MODE_COMPUTING */], { car: car });
            }
        }
    }, {
        key: 'handleKillCar',
        value: function handleKillCar(car) {
            if (car === this.rg.objects.radar.currentCar) {
                this.rg.objects.radar.setMode(__WEBPACK_IMPORTED_MODULE_4__constants__["A" /* RADAR_MODE_EMPTY */]);
            }
        }
    }, {
        key: 'handleFine',
        value: function handleFine() {
            var car = this.rg.objects.radar.currentCar;
            car.setMode(__WEBPACK_IMPORTED_MODULE_4__constants__["c" /* CAR_MODE_FINED */]);
            if (car.isRogue) {
                this.rg.objects.score.updateValue(-this.rg.objects.radar.currentFine);
                this.rg.objects.radar.setMode(__WEBPACK_IMPORTED_MODULE_4__constants__["D" /* RADAR_MODE_ROGUE */]);
            } else {
                this.rg.objects.score.updateValue(this.rg.objects.radar.currentFine);
                this.rg.objects.radar.setMode(__WEBPACK_IMPORTED_MODULE_4__constants__["C" /* RADAR_MODE_FINED */]);
            }
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
            // count = 2;
            for (var i = 0; i < count; i++) {
                var car = new __WEBPACK_IMPORTED_MODULE_0__classes_Car__["a" /* default */]({
                    game: this.game,
                    name: 'car' + i,
                    rogueSeries: this.rg.level.cars.series,
                    onKill: this.handleKillCar.bind(this)
                });
                this.rg.arrays.cars.push(car);
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
                this.rg.groups.carsBehind.addAt(deadCar.sprite, 0);
                return true;
            }

            return false;
        }
    }, {
        key: 'getClearestRoadLaneByCar',
        value: function getClearestRoadLaneByCar(currentCar) {
            var lanesClearness = _defineProperty({}, currentCar.roadLane, Infinity);
            var availableLanesCount = 1;
            if (currentCar.roadLane < this.rg.objects.road.lanes - 1 && currentCar.position.y >= currentCar.moveTargetY) {
                lanesClearness[currentCar.roadLane + 1] = Infinity;
                availableLanesCount++;
            }
            if (currentCar.roadLane > 0 && currentCar.position.y <= currentCar.moveTargetY) {
                lanesClearness[currentCar.roadLane - 1] = Infinity;
                availableLanesCount++;
            }
            var lanesFoundCount = 0;
            if (currentCar.position.x < 0) {
                for (var i = currentCar.sprite.z + 1; i < this.rg.groups.carsBehind.length; i++) {
                    var carSprite = this.rg.groups.carsBehind.getChildAt(i);
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
            for (var _i2 = currentCar.position.x < 0 ? 0 : currentCar.sprite.z + 1; _i2 < this.rg.groups.cars.length; _i2++) {
                var _carSprite2 = this.rg.groups.cars.getChildAt(_i2);
                var _car = _carSprite2.rg;
                if (!_carSprite2.alive || currentCar.velocity.x < _car.velocity.x || Math.abs(_car.roadLane - currentCar.roadLane) > 1) {
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
                var minDisallowedSpeed = this.rg.level.money.fines[1][0];
                var maxDisallowedSpeed = this.rg.level.money.fines[this.rg.level.money.fines.length - 1][0];
                return this.game.rnd.integerInRange(minDisallowedSpeed, maxDisallowedSpeed - 1);
            } else {
                var randomNumber = this.game.rnd.integerInRange(1, 100);
                var cummulativeProbability = 0;
                for (var i = 0; i < this.rg.level.money.fines.length; i++) {
                    var _rg$level$money$fines = _slicedToArray(this.rg.level.money.fines[i], 3),
                        speedExcess = _rg$level$money$fines[0],
                        fine = _rg$level$money$fines[1],
                        probability = _rg$level$money$fines[2];

                    cummulativeProbability += probability;
                    if (randomNumber <= cummulativeProbability) {
                        var prevSpeedExcess = (this.rg.level.money.fines[i - 1] || [0])[0];
                        return this.rg.level.speed.limit + this.game.rnd.integerInRange(prevSpeedExcess, speedExcess - 1);
                    }
                }
                return this.rg.level.speed.limit;
            }
        }
    }, {
        key: 'sortCars',
        value: function sortCars(car1, car2) {
            return car1.rg.position.x - car2.rg.position.x;
        }
    }]);

    return Game;
}();

/* harmony default export */ __webpack_exports__["a"] = (Game);

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__PlateNumber__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(0);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var CAR_STEERING_SPEED_COEFF = 1.5;
var CAR_ROGUE_FINED_COLOR = 0xF23B3B;
var CAR_ROGUE_FINED_BLINK_DURATION = 400;
var CAR_ROGUE_FINED_BLINK_REPEAT = 4;

var Car = function () {
    function Car(_ref) {
        var game = _ref.game,
            name = _ref.name,
            rogueSeries = _ref.rogueSeries,
            onKill = _ref.onKill;

        _classCallCheck(this, Car);

        this.game = game;
        this.rogueSeries = rogueSeries;
        this.onKill = onKill;

        var spriteKey = this.game.rnd.pick(__WEBPACK_IMPORTED_MODULE_1__constants__["f" /* CAR_SPRITE_KEYS */]);
        this.sprite = this.game.add.sprite(0, 0, spriteKey, 0);
        this.sprite.anchor.set(0.5, 1);
        this.sprite.name = name;
        this.sprite.rg = this;
        this.sprite.inputEnabled = true;
        // initially dead
        this.sprite.kill();

        this.detailsSprite = this.game.add.sprite(-this.sprite.width / 2, -this.sprite.height, spriteKey, 1);
        this.sprite.addChild(this.detailsSprite);

        this.position = new Phaser.Point(0, 0);
        this.velocity = new Phaser.Point(0, 0);
        this.moveTargetY = 0;

        this.roadLane = null;
        this.color = null;
        this.isRogue = false;

        this.rogueFinedTimer = this.game.time.create(false);

        this.plateNumber = new __WEBPACK_IMPORTED_MODULE_0__PlateNumber__["a" /* default */](_extends({
            game: this.game,
            x: 0,
            y: -13
        }, this.plateNumber));
        this.sprite.addChild(this.plateNumber.group);

        this.mode = __WEBPACK_IMPORTED_MODULE_1__constants__["d" /* CAR_MODE_NORMAL */];
    }

    _createClass(Car, [{
        key: 'preUpdate',
        value: function preUpdate() {
            this.position.add(this.velocity.x * this.game.time.physicsElapsed, this.velocity.y * this.game.time.physicsElapsed);

            if (this.moveTargetY !== this.position.y) {
                if (this.velocity.y > 0 && this.position.y >= this.moveTargetY || this.velocity.y < 0 && this.position.y <= this.moveTargetY) {
                    this.position.y = this.moveTargetY;
                    // clear moveTargetY
                    this.moveToY(this.position.y);
                }
            }
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
                this.sprite.tint = Math.floor(this.rogueFinedTimer.ms / CAR_ROGUE_FINED_BLINK_DURATION) % 2 ? this.color : CAR_ROGUE_FINED_COLOR;
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
        value: function moveToY(y) {
            var roadLane = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.roadLane;

            this.moveTargetY = y;
            this.roadLane = roadLane;
            this.velocity.y = Math.sign(y - this.position.y) * this.velocity.x * CAR_STEERING_SPEED_COEFF;
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

            this.plateNumber.setText(this.generatePlateNumber());

            this.position.set(x, y);
            this.moveToY(y, roadLane);
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
/* 14 */
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
            fill: '#000'
        });
        this.text.fontVariant = 'small-caps';
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

            this.text.setText([this.letters[0].toLowerCase(), this.numbers, this.letters.substr(1).toLowerCase()].join('.'));
            this.text.addColor('#fff', 1);
            this.text.addColor('#000', 2);
            this.text.addColor('#fff', 5);
            this.text.addColor('#000', 6);
            this.text.updateCache();
        }
    }]);

    return PlateNumber;
}();

/* harmony default export */ __webpack_exports__["a"] = (PlateNumber);

/***/ }),
/* 15 */
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
        this.groundGraphics = this.game.add.graphics(0, 0, this.group);
        this.groundGraphics.beginFill(0x517F30);
        this.groundGraphics.drawRect(0, this.game.height - this.groundHeight, this.game.width, this.groundHeight);
        this.groundGraphics.endFill();

        this.roadWidthTop = this.game.width / 3;
        this.roadOffsetLeft = (this.game.width - this.roadWidthTop) / 2;
        this.roadWidthBottom = (this.game.width - this.roadOffsetLeft) / (this.lanes * 2 - 1) * (this.lanes * 2);
        this.mainRatio = this.roadWidthBottom / this.roadWidthTop;

        this.topLeft = new Phaser.Point(this.roadOffsetLeft, this.game.height - this.groundHeight);

        this.roadGraphics = this.game.add.graphics(0, 0, this.group);
        this.roadGraphics.beginFill(0x45454A);
        this.roadGraphics.drawPolygon([this.topLeft, { x: this.roadOffsetLeft + this.roadWidthTop, y: this.topLeft.y }, { x: this.roadOffsetLeft + this.roadWidthBottom, y: this.game.height }, { x: this.roadOffsetLeft, y: this.game.height }]);
        this.roadGraphics.endFill();
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
    }]);

    return Road;
}();

/* harmony default export */ __webpack_exports__["a"] = (Road);

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GameInterface = function GameInterface(_ref) {
    var game = _ref.game;

    _classCallCheck(this, GameInterface);

    this.game = game;
};

/* harmony default export */ __webpack_exports__["a"] = (GameInterface);

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(21);
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var TEMPORARY_MODE_DURATION = 2000;

var RadarMonitor = function () {
    function RadarMonitor(_ref) {
        var game = _ref.game,
            x = _ref.x,
            y = _ref.y,
            width = _ref.width,
            height = _ref.height,
            computing = _ref.computing,
            fines = _ref.fines,
            speedLimit = _ref.speedLimit,
            onFine = _ref.onFine;

        _classCallCheck(this, RadarMonitor);

        this.game = game;
        this.width = width;
        this.height = height;
        this.fines = fines;
        this.speedLimit = speedLimit;
        this.onFine = onFine;

        this.group = this.game.add.group();
        this.group.x = x;
        this.group.y = y;

        this.screen = this.game.add.graphics();
        this.screen.name = 'radar';
        this.screen.inputEnabled = true;
        this.group.add(this.screen);

        this.mainText = this.game.add.text(this.width / 2, this.height / 2 + 5, '', {
            align: 'center',
            wordWrap: true,
            wordWrapWidth: this.width
        });
        this.mainText.font = '"Press Start 2P", Arial';
        this.mainText.fontSize = 20;
        this.mainText.anchor.set(0.5, 0.5);
        this.group.add(this.mainText);

        this.secondaryText = this.game.add.text(this.width / 2, this.height - 10, '', {
            align: 'center'
        });
        this.secondaryText.font = '"Press Start 2P", Arial';
        this.secondaryText.fontSize = 12;
        this.secondaryText.anchor.set(0.5, 1);
        this.group.add(this.secondaryText);

        this.progressBar = this.game.add.graphics();
        this.group.add(this.progressBar);

        this.mode = null;

        this.computingTimer = this.game.time.create(false);
        this.computingTimerDuration = computing;
        this.temporaryModeTimer = this.game.time.create(false);

        this.currentCar = null;
        this.currentFine = 0;

        this.setMode(__WEBPACK_IMPORTED_MODULE_0__constants__["A" /* RADAR_MODE_EMPTY */]);
    }

    _createClass(RadarMonitor, [{
        key: 'update',
        value: function update() {
            if (this.mode === __WEBPACK_IMPORTED_MODULE_0__constants__["y" /* RADAR_MODE_COMPUTING */]) {
                if (this.computingTimer.running) {
                    this.updateProgressBar(this.computingTimer.ms / this.computingTimerDuration);
                }
            }
        }
    }, {
        key: 'updateProgressBar',
        value: function updateProgressBar(percent) {
            var color = 0;
            var offset = this.height / 10;
            var width = this.width - 2 * offset;
            var height = 10;
            var y = this.height - 2 * offset - height / 2;
            this.progressBar.clear();
            this.progressBar.lineStyle(1, color, 1);
            this.progressBar.drawRect(offset, y - height / 2, width, height);
            this.progressBar.lineStyle(height, color, 1);
            this.progressBar.moveTo(offset, y);
            this.progressBar.lineTo(width * percent, y);
        }
    }, {
        key: 'handleCompleteComputing',
        value: function handleCompleteComputing() {
            this.computingTimer.stop(true);
            this.currentFine = 0;
            for (var i = 0; i < this.fines.length; i++) {
                var _fines$i = _slicedToArray(this.fines[i], 2),
                    speedExcess = _fines$i[0],
                    fine = _fines$i[1];

                if (this.currentCar.velocity.x < speedExcess + this.speedLimit) {
                    this.currentFine = fine;
                    break;
                }
            }
            if (this.currentFine === 0) {
                this.setMode(__WEBPACK_IMPORTED_MODULE_0__constants__["z" /* RADAR_MODE_DISMISS */], { speed: this.currentCar.velocity.x });
            } else {
                this.setMode(__WEBPACK_IMPORTED_MODULE_0__constants__["B" /* RADAR_MODE_FINE */], { speed: this.currentCar.velocity.x });
            }
        }
    }, {
        key: 'handleCompleteTemporaryMode',
        value: function handleCompleteTemporaryMode() {
            this.temporaryModeTimer.stop(true);
            this.setMode(__WEBPACK_IMPORTED_MODULE_0__constants__["A" /* RADAR_MODE_EMPTY */]);
        }
    }, {
        key: 'setMode',
        value: function setMode(mode) {
            var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            this.computingTimer.stop(true);
            this.temporaryModeTimer.stop(true);

            this.progressBar.visible = false;
            this.secondaryText.visible = false;

            this.mainText.fill = '#000';
            this.secondaryText.fill = '#000';

            switch (mode) {
                case __WEBPACK_IMPORTED_MODULE_0__constants__["A" /* RADAR_MODE_EMPTY */]:
                    {
                        this.mainText.setText(this.game.rg.i18n.getTranslation(__WEBPACK_IMPORTED_MODULE_0__constants__["n" /* I18N_RADAR_EMPTY */]));
                        this.resetCurrentCar();
                        break;
                    }
                case __WEBPACK_IMPORTED_MODULE_0__constants__["z" /* RADAR_MODE_DISMISS */]:
                    {
                        this.mainText.setText(Math.round(props.speed) + ' ' + this.game.rg.i18n.getTranslation(__WEBPACK_IMPORTED_MODULE_0__constants__["p" /* I18N_RADAR_METRICS */]));
                        break;
                    }
                case __WEBPACK_IMPORTED_MODULE_0__constants__["B" /* RADAR_MODE_FINE */]:
                    {
                        this.mainText.setText(Math.round(props.speed) + ' ' + this.game.rg.i18n.getTranslation(__WEBPACK_IMPORTED_MODULE_0__constants__["p" /* I18N_RADAR_METRICS */]));
                        this.secondaryText.setText(this.game.rg.i18n.getTranslation(__WEBPACK_IMPORTED_MODULE_0__constants__["q" /* I18N_RADAR_PRESS_TO_FINE */]));
                        this.secondaryText.visible = true;
                        break;
                    }
                case __WEBPACK_IMPORTED_MODULE_0__constants__["y" /* RADAR_MODE_COMPUTING */]:
                    {
                        if (this.mode !== __WEBPACK_IMPORTED_MODULE_0__constants__["y" /* RADAR_MODE_COMPUTING */] || this.currentCar !== props.car) {
                            this.currentCar = props.car;

                            this.mainText.setText(this.game.rg.i18n.getTranslation(__WEBPACK_IMPORTED_MODULE_0__constants__["s" /* I18N_RADAR_WAIT */]));
                            this.progressBar.visible = true;

                            this.computingTimer.add(this.computingTimerDuration, this.handleCompleteComputing, this);
                            this.computingTimer.start();
                        }
                        break;
                    }
                case __WEBPACK_IMPORTED_MODULE_0__constants__["C" /* RADAR_MODE_FINED */]:
                    {
                        this.mainText.setText(this.game.rg.i18n.getTranslation(__WEBPACK_IMPORTED_MODULE_0__constants__["o" /* I18N_RADAR_FINED */]) + "\n" + this.currentFine + ' ' + this.game.rg.i18n.getTranslation(__WEBPACK_IMPORTED_MODULE_0__constants__["i" /* I18N_CURRENCY */]));
                        this.resetCurrentCar();
                        this.startTemporaryModeTimer();
                        break;
                    }
                case __WEBPACK_IMPORTED_MODULE_0__constants__["D" /* RADAR_MODE_ROGUE */]:
                    {
                        this.mainText.fill = __WEBPACK_IMPORTED_MODULE_0__constants__["g" /* COLOR_DARK_RED */];
                        this.mainText.setText(this.game.rg.i18n.getTranslation(__WEBPACK_IMPORTED_MODULE_0__constants__["r" /* I18N_RADAR_ROGUE */]));
                        this.secondaryText.setText(Object(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* getFormattedCurrency */])(-this.currentFine, this.game.rg.i18n.getTranslation(__WEBPACK_IMPORTED_MODULE_0__constants__["i" /* I18N_CURRENCY */])));
                        this.secondaryText.fill = __WEBPACK_IMPORTED_MODULE_0__constants__["g" /* COLOR_DARK_RED */];
                        this.secondaryText.visible = true;
                        this.resetCurrentCar();
                        this.startTemporaryModeTimer();
                        break;
                    }
                case __WEBPACK_IMPORTED_MODULE_0__constants__["x" /* RADAR_MODE_ALREADY_FINED */]:
                    {
                        this.mainText.setText(this.game.rg.i18n.getTranslation(__WEBPACK_IMPORTED_MODULE_0__constants__["m" /* I18N_RADAR_ALREADY_FINED */]));
                        this.resetCurrentCar();
                        this.startTemporaryModeTimer();
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
                case __WEBPACK_IMPORTED_MODULE_0__constants__["B" /* RADAR_MODE_FINE */]:
                case __WEBPACK_IMPORTED_MODULE_0__constants__["D" /* RADAR_MODE_ROGUE */]:
                    color = 0xDDAAAA;
                    break;
                default:
                    color = 0xD1D1D1;
            }
            this.screen.clear();
            this.screen.lineStyle(4, 0);
            this.screen.beginFill(color);
            this.screen.drawRoundedRect(0, 0, this.width, this.height, 16);
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

    return RadarMonitor;
}();

/* harmony default export */ __webpack_exports__["a"] = (RadarMonitor);

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/aeaabcbdc856b252e7b2c0806410a328.png";

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RoadSign = function RoadSign(_ref) {
    var game = _ref.game,
        x = _ref.x,
        y = _ref.y,
        speedLimit = _ref.speedLimit;

    _classCallCheck(this, RoadSign);

    this.group = game.add.group();
    this.group.x = x;
    this.group.y = y;

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
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




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

        this.scoreText = this.game.add.text(0, 0);
        this.scoreText.font = '"Press Start 2P", Arial';
        this.scoreText.fontSize = 16;
        this.scoreText.fill = '#ffffff';
        this.group.add(this.scoreText);

        this.updateValue(0);
        // todo score progress bar
    }

    _createClass(Score, [{
        key: 'update',
        value: function update() {}
    }, {
        key: 'updateValue',
        value: function updateValue(sum) {
            this.value += sum;
            this.scoreText.setText(Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* getFormattedCurrency */])(this.value, this.game.rg.i18n.getTranslation(__WEBPACK_IMPORTED_MODULE_1__constants__["i" /* I18N_CURRENCY */])));
            // todo score +- animation
        }
    }]);

    return Score;
}();

/* harmony default export */ __webpack_exports__["a"] = (Score);

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getFormattedTime */
/* harmony export (immutable) */ __webpack_exports__["a"] = getFormattedCurrency;
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

/***/ })
/******/ ]);