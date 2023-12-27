import { setNewSwiper } from './swiper.js'
import { getWindString } from './utils.js'

function getSlide(forecastElem) {
    const { time, iconUrl, temp } = forecastElem

    const slide = document.createElement('div')
    slide.classList = 'swiper-slide hourly-forecast-items'
    slide.innerHTML = `
        <div class="hourly-forecast-item">
            <h4>${time}</h4>
            <img src="${iconUrl}" />
            <p>${Math.round(temp)}°</p>
        </div>
    `

    return slide
}

function getMainFrame(frameInfo) {
    const { windSpeed, windDirection, clouds, pressure, humidity } = frameInfo

    return `
        <div class="tabs-frame-content">
            <div class="frame-card">
                <div class="content-frame">
                    <div class="tabs-img-speed-air">
                        <img src="img/tabs/air.svg" />
                    </div>
                    <div class="tabs-frame-text wind">
                        <h4>Ветер</h4>
                        <p id="wind">${getWindString(
                            windSpeed,
                            windDirection,
                        )}</p>
                    </div>
                </div>
            </div>
            <div class="frame-card">
                <div class="content-frame">
                    <div class="tabs-img-clouds">
                        <img src="img/tabs/cloud.svg" />
                    </div>
                    <div class="tabs-frame-text clouds">
                        <h4>Облачность</h4>
                        <p id="clouds">${clouds}%</p>
                    </div>
                </div>
            </div>
            <div class="frame-card">
                <div class="content-frame">
                    <div class="tabs-img-pressure">
                        <img src="img/tabs/wave.svg" />
                    </div>
                    <div class="tabs-frame-text pressure">
                        <h4>Давление</h4>
                        <p id="pressure">${pressure} мм рт. ст.</p>
                    </div>
                </div>
            </div>
            <div class="frame-card">
                <div class="content-frame">
                    <div class="tabs-img-humidity">
                        <img src="img/tabs/humidity.svg" />
                    </div>
                    <div class="tabs-frame-text humidity">
                        <h4>Влажность</h4>
                        <p id="humidity">${humidity}%</p>
                    </div>
                </div>
            </div>
        </div>
    `
}

function getHourlyForecast(idx) {
    return `
        <div class="hourly-forecast">
            <div class="hourly-card">
                <div class="hourly-container">
                    <div class="hourly-title">
                        <img src="img/tabs/timer.svg" />
                        <p>Часовой прогноз</p>
                    </div>
                    <div class="slider-container">
                        <div id="days-forecast-swiper-${idx}" class="swiper">
                            <div class="swiper-wrapper"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
}

function getDayCard(cardInfo, idx) {
    const { date, description, tempMax, tempMin, iconUrl } = cardInfo
    const dayElem = document.createElement('div')
    dayElem.classList = 'five-days-card'

    dayElem.innerHTML = `
        <div class="five-days-wrapper">
        <div class="five-days-data">
            <h4>${date}</h4>
            <p>${description}</p>
        </div>
        <div class="five-days-content-weather">
            <div class="five-days-temperature">
                <p>${Math.round(tempMax)}°</p>
                <p>${Math.round(tempMin)}°</p>
            </div>
            <div class="five-days-weather-img">
                <img style="width: 85px" src="${iconUrl}" />
                <img class="five-days-open active" src="img/five-days/open.svg" />
            </div>
        </div>
        </div>
        <div class="five-days-content">
            <div class="five-days-frame">
                ${getMainFrame(cardInfo)}
            </div>
            <div class="five-days-hourly-forecast">
                ${getHourlyForecast(idx)}
            </div>
        </div>
    `

    return dayElem
}

export function setForecast() {
    const oneDayForecast = document.querySelector('#today-tab #forecast')
    const tomorrowForecast = document.querySelector('#tomorrow-tab #forecast')

    if (oneDayForecast) {
        oneDayForecast.innerHTML = ''

        appStore.weatherInfo.forecast.list
            .slice(0, 8)
            .forEach((forecastElem) => {
                oneDayForecast.appendChild(getSlide(forecastElem))
            })
    }
    if (tomorrowForecast) {
        tomorrowForecast.innerHTML = ''

        appStore.weatherInfo.tomorrow.list.forEach((forecastElem) => {
            tomorrowForecast.appendChild(getSlide(forecastElem))
        })
    }
}

export function setFiveDaysForecast() {
    const daysList = document.getElementById('days-list')

    daysList.innerHTML = ''

    appStore.weatherInfo.days.forEach((day, idx) => {
        daysList.append(getDayCard(day.main, idx))

        const dayCardSwiperWrapper = document.querySelector(
            `#days-forecast-swiper-${idx} .swiper-wrapper`,
        )

        day.list.forEach((forecastElem) => {
            dayCardSwiperWrapper.append(getSlide(forecastElem))
        })

        setNewSwiper(`#days-forecast-swiper-${idx}`)
    })
}
