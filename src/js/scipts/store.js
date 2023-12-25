import { getUnit } from './utils.js'

export const appStore = {
    apiKey: '09d65a643b54838149fea98b67251c39',
    unit: getUnit() ?? 'metric',
    timezone: null,
    weatherInfo: {
        city: {
            geoFullName: null,
            name: null,
            lat: null,
            lot: null,
        },
        widget: {
            feelsLike: null,
            temp: null,
            tempMax: null,
            tempMin: null,
            currentDate: null,
            main: null,
            description: null,
            iconUrl: null,
            backgroundUrl: null,
        },
        main: {
            windSpeed: null,
            windDirection: null,
            clouds: null,
            pressure: null,
            humidity: null,
            sunrise: null,
            sunset: null,
        },
        tomorrow: {
            windSpeed: null,
            windDirection: null,
            clouds: null,
            pressure: null,
            humidity: null,
            list: [],
        },
        forecast: {
            list: [],
        },
    },
}
