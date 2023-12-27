import { getWindString } from './utils.js'
import { setForecast, setFiveDaysForecast } from './setForecast.js'

export function setContentToPage() {
    // Widget
    const geoFullName = document.getElementById('geo-full-name')
    const mainTemp = document.getElementById('main-temp')
    const feelsLike = document.getElementById('feels-like')
    const weatherDescr = document.getElementById('weather-descr')
    const currentDate = document.getElementById('current-date')
    const maxTemp = document.getElementById('max-temp')
    const minTemp = document.getElementById('min-temp')
    const widgetIcon = document.getElementById('widget-icon')
    const backgroundUrl = document.getElementById('background-url')

    geoFullName.innerHTML = appStore.weatherInfo.city.geoFullName
    mainTemp.innerHTML = `${Math.round(appStore.weatherInfo.widget.temp)}°`
    feelsLike.innerHTML = `Ощущается как ${Math.round(
        appStore.weatherInfo.widget.feelsLike,
    )}°`
    weatherDescr.innerHTML = appStore.weatherInfo.widget.description
    currentDate.innerHTML = appStore.weatherInfo.widget.currentDate
    maxTemp.innerHTML = `День ${Math.round(
        appStore.weatherInfo.widget.tempMax,
    )}°`
    minTemp.innerHTML = `Ночь ${Math.round(
        appStore.weatherInfo.widget.tempMin,
    )}°`
    widgetIcon.src = appStore.weatherInfo.widget.iconUrl
    backgroundUrl.src = appStore.weatherInfo.widget.backgroundUrl

    // Tabs
    // Today
    const windToday = document.querySelector('#today-tab #wind')
    const cloudsToday = document.querySelector('#today-tab #clouds')
    const pressureToday = document.querySelector('#today-tab #pressure')
    const humidityToday = document.querySelector('#today-tab #humidity')
    const sunriseToday = document.querySelector('#today-tab #sunrise')
    const sunsetToday = document.querySelector('#today-tab #sunset')

    windToday.innerHTML = getWindString(
        appStore.weatherInfo.main.windSpeed,
        appStore.weatherInfo.main.windDirection,
    )
    cloudsToday.innerHTML = `${appStore.weatherInfo.main.clouds}%`
    pressureToday.innerHTML = `${appStore.weatherInfo.main.pressure} мм рт. ст.`
    humidityToday.innerHTML = `${appStore.weatherInfo.main.humidity}%`
    sunriseToday.innerHTML = appStore.weatherInfo.main.sunrise
    sunsetToday.innerHTML = appStore.weatherInfo.main.sunset

    // Tomorrow
    const windTomorrow = document.querySelector('#tomorrow-tab #wind')
    const cloudsTomorrow = document.querySelector('#tomorrow-tab #clouds')
    const pressureTomorrow = document.querySelector('#tomorrow-tab #pressure')
    const humidityTomorrow = document.querySelector('#tomorrow-tab #humidity')

    windTomorrow.innerHTML = getWindString(
        appStore.weatherInfo.tomorrow.windSpeed,
        appStore.weatherInfo.tomorrow.windDirection,
    )
    cloudsTomorrow.innerHTML = `${appStore.weatherInfo.tomorrow.clouds}%`
    pressureTomorrow.innerHTML = `${appStore.weatherInfo.tomorrow.pressure} мм рт. ст.`
    humidityTomorrow.innerHTML = `${appStore.weatherInfo.tomorrow.humidity}%`

    // Five days' forecast
    setFiveDaysForecast()

    // Forecast
    setForecast()
}
