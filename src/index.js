import Boot from './states/Boot';
import Loading from './states/Loading';
import StartMenu from './states/StartMenu';
import Game from './states/Game';

import {
    STATE_BOOT,
    STATE_LOADING,
    STATE_MENU,
    STATE_GAME,
} from './constants';

window.WebFontConfig = {
    google: {
        families: ['Press Start 2P:400:latin,cyrillic']
    },
    active() {
        initGame();
    },
};

const script = document.createElement('script');
script.src = 'dist/webfontloader.js';
document.head.appendChild(script);

// this fixes mobile browser 100% height issue with address bar and tabs
function initGame() {
    const windowInnerHeight = window.innerHeight;
    if (document.body.clientHeight > windowInnerHeight) {
        document.body.style.height = windowInnerHeight + 'px';
        document.documentElement.style.height = windowInnerHeight + 'px';
    }

    const containerNode = document.querySelector('.js-game-container');

    const game = new Phaser.Game({
        width: containerNode.clientWidth,
        height: containerNode.clientHeight,
        parent: containerNode,
        antialias: true,
        renderer: Phaser.CANVAS
    });

    game.state.add(STATE_BOOT, Boot);
    game.state.add(STATE_LOADING, Loading);
    game.state.add(STATE_MENU, StartMenu);
    game.state.add(STATE_GAME, Game);

    game.state.start(STATE_BOOT);
}
