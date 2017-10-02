export default {
    level1: {
        id: 'level1',
        duration: 3 * 60, // s
        speed: {
            limit: 40,
        },
        road: {
            start: -100,
            end: 1200,
            length: 800,
            lanes: 3,
            laneWidth: 100,
        },
        money: {
            fines: [
                [20, 0, 50],
                [40, 500, 30],
                [60, 1500, 10],
                [80, 2500, 8],
                [100, 5000, 2]
            ],
            goal: 50000,
        },
        radar: {
            computing: 1000, // ms
        },
        cars: {
            frequency: 2, // s
            series: ['AAA', 'AMP', 'EKX'],
            rogue: 0.1
        },
    },
};
