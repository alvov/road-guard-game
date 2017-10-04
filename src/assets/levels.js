import {
    WEATHER_FOG,
    WEATHER_THUNDER,
} from '../constants';

export default {
    level1: {
        id: 'level1',
        duration: 3 * 60, // s
        goal: 20000,
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
        radar: {
            computing: 1200, // ms
        },
        cars: {
            frequency: 2, // s
            series: ['AMP',],
            rogue: 0.1,
        },
    },
    level2: {
        id: 'level2',
        duration: 3 * 60, // s
        goal: 30000,
        speed: {
            limit: 50,
        },
        road: {
            start: -100,
            end: 1200,
            length: 800,
            lanes: 3,
            laneWidth: 100,
        },
        weather: WEATHER_THUNDER,
        radar: {
            computing: 1000, // ms
        },
        cars: {
            frequency: 2, // s
            series: ['AAA', 'AMP',],
            rogue: 0.1,
        },
    },
    level3: {
        id: 'level3',
        duration: 3 * 60, // s
        goal: 40000,
        speed: {
            limit: 60,
        },
        road: {
            start: -100,
            end: 1200,
            length: 800,
            lanes: 3,
            laneWidth: 100,
        },
        weather: WEATHER_FOG,
        radar: {
            computing: 900, // ms
        },
        cars: {
            frequency: 2, // s
            series: ['AAA', 'AMP', 'EKX',],
            rogue: 0.15,
        },
    },
};
