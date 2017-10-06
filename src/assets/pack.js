const pack = {
    initial: [
        {
            type: 'spritesheet',
            key: 'langButtons',
            url: require('./images/langButtons.png'),
            frameWidth: 50,
            frameHeight: 50
        },
        {
            type: 'spritesheet',
            key: 'levels',
            url: require('./images/levels.png'),
            frameWidth: 100,
            frameHeight: 100
        },
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
            key: 'car03',
            url: require('./images/car03.png'),
            frameWidth: 152,
            frameHeight: 103
        },
        {
            type: 'spritesheet',
            key: 'car04',
            url: require('./images/car04.png'),
            frameWidth: 156,
            frameHeight: 136
        },
        {
            type: 'spritesheet',
            key: 'rogueSigns',
            url: require('./images/rogueSigns.png'),
            frameWidth: 11,
            frameHeight: 12
        },
    ],
};

export default JSON.stringify(pack);
