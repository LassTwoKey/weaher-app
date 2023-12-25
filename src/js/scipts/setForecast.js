function getSlide(forecastElem) {
    const slide = document.createElement('div')
    slide.classList = 'swiper-slide hourly-forecast-items'
    slide.innerHTML = `
        <div class="hourly-forecast-item">
        <h4>${forecastElem.time}</h4>
        <img src="${forecastElem.iconUrl}" />
        <p>${Math.round(forecastElem.temp)}°</p>
        </div>
    `

    return slide
}

export function setForecast() {
    const oneDayForecast = document.querySelector('#today-tab #forecast')
    const tomorrowForecast = document.querySelector('#tomorrow-tab #forecast')

    oneDayForecast.innerHTML = ''
    tomorrowForecast.innerHTML = ''

    if (oneDayForecast) {
        appStore.weatherInfo.forecast.list
            .slice(0, 8)
            .forEach((forecastElem) => {
                oneDayForecast.appendChild(getSlide(forecastElem))
            })
    }
    if (tomorrowForecast) {
        appStore.weatherInfo.tomorrow.list
            .forEach((forecastElem) => {
                tomorrowForecast.appendChild(getSlide(forecastElem))
            })
    }
}
