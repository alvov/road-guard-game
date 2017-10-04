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
            type: 'image',
            key: 'rain',
            url: require('./images/rain.png'),
            overwrite: false
        },
        {
            type: 'spritesheet',
            key: 'roadSign',
            url: require('./images/roadSign.png'),
            frameWidth: 60,
            frameHeight: 140
        },
        {
            type: 'spritesheet',
            key: 'car01',
            url: require('./images/car01.png'),
            frameWidth: 152,
            frameHeight: 102
        },
        {
            type: 'spritesheet',
            key: 'car02',
            url: require('./images/car02.png'),
            frameWidth: 150,
            frameHeight: 141
        },
        {
            type: 'spritesheet',
            key: 'rogueSigns',
            url: require('./images/rogueSigns.png'),
            frameWidth: 11,
            frameHeight: 12
        },
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
