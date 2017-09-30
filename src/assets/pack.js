const pack = {
    initial: [
        {
            type: 'spritesheet',
            key: 'langButtons',
            url: require('./images/langButtons.png'),
            frameWidth: 50,
            frameHeight: 50
        }
    ],
    game: [
        {
            type: 'image',
            key: 'ground',
            url: require('./images/grass.png'),
            overwrite: false
        },
        {
            type: 'spritesheet',
            key: 'car01',
            url: require('./images/car01.png'),
            frameWidth: 76,
            frameHeight: 51
        },
        // {
        //     type: 'spritesheet',
        //     key: 'soundButtons',
        //     url: require('./soundButtons.png'),
        //     frameWidth: 50,
        //     frameHeight: 50
        // },
        // {
        //     type: 'audio',
        //     key: 'theme',
        //     urls: require('./audio/theme.mp3')
        // },
        // {
        //     type: 'audio',
        //     key: 'punch01',
        //     urls: require('./audio/punch01.mp3')
        // },
        // {
        //     type: 'audio',
        //     key: 'punch02',
        //     urls: require('./audio/punch02.mp3')
        // },
        // {
        //     type: 'audio',
        //     key: 'applause',
        //     urls: require('./audio/applause.mp3')
        // },
        // {
        //     type: 'audio',
        //     key: 'boo',
        //     urls: require('./audio/boo.mp3')
        // },
        // {
        //     type: 'audio',
        //     key: 'croud',
        //     urls: require('./audio/croud.mp3')
        // },
        // {
        //     type: 'audio',
        //     key: 'scream03',
        //     urls: require('./audio/scream03.mp3')
        // },
        // {
        //     type: 'audio',
        //     key: 'truck',
        //     urls: require('./audio/truck.mp3')
        // },
        // {
        //     type: 'audio',
        //     key: 'pick',
        //     urls: require('./audio/pick.mp3')
        // }
    ],
};

export default JSON.stringify(pack);
