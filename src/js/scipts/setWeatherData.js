import {
    getFormattedDate,
    firstLetterUpperCase,
    getWindDirection,
    formatUnixTimeTo24HourTimeString,
    hPaToMmHg,
    formatTime,
} from './utils.js'

export function setWeatherData({ weatherByCity, ForecastByCoord }) {
    console.log({ weatherByCity, ForecastByCoord })

    appStore.timezone = weatherByCity.timezone

    appStore.weatherInfo.city.geoFullName = `${weatherByCity.name}, ${weatherByCity.sys.country}`
    appStore.weatherInfo.city.name = weatherByCity.name
    appStore.weatherInfo.city.lat = weatherByCity.coord.lat
    appStore.weatherInfo.city.lot = weatherByCity.coord.lot

    appStore.weatherInfo.widget = {
        feelsLike: weatherByCity.main.feels_like,
        temp: weatherByCity.main.temp,
        tempMax: weatherByCity.main.temp_max,
        tempMin: weatherByCity.main.temp_min,
        currentDate: getFormattedDate(),
        main: weatherByCity.weather[0].main,
        description: firstLetterUpperCase(weatherByCity.weather[0].description),
        iconUrl: `https://openweathermap.org/img/wn/${weatherByCity.weather[0].icon}@2x.png`,
        backgroundUrl: `img/widget/${weatherByCity.weather[0].main}.jpg`,
    }

    appStore.weatherInfo.main = {
        windSpeed: weatherByCity.wind.speed,
        windDirection: getWindDirection(weatherByCity.wind.deg),
        clouds: weatherByCity.clouds.all,
        pressure: hPaToMmHg(weatherByCity.main.pressure),
        humidity: weatherByCity.main.humidity,
        sunrise: formatUnixTimeTo24HourTimeString(
            weatherByCity.sys.sunrise,
            appStore.timezone,
        ),
        sunset: formatUnixTimeTo24HourTimeString(
            weatherByCity.sys.sunset,
            appStore.timezone,
        ),
    }

    appStore.weatherInfo.forecast.list = ForecastByCoord.list.map(
        (forecastElem) => ({
            time: formatTime(forecastElem.dt_txt),
            iconUrl: `https://openweathermap.org/img/wn/${forecastElem.weather[0].icon}@2x.png`,
            temp: forecastElem.main.temp,
            windSpeed: forecastElem.wind.speed,
            windDirection: getWindDirection(weatherByCity.wind.deg),
            clouds: forecastElem.clouds.all,
            pressure: hPaToMmHg(forecastElem.main.pressure),
            humidity: forecastElem.main.humidity,
        }),
    )
}
