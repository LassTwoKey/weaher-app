import { setWeatherData } from './setWeatherData.js'
import { setContentToPage } from './setContentToPage.js'
import { getForecastByCoord, getWeatherByCity } from './api.js'
import { getUnit } from './utils.js'
import { getGeo } from './utils.js'

export const initApp = async (options) => {
    const savedGeo = getGeo()

    const initialCoords = {
        lat: savedGeo?.lat ?? 55.7504461,
        lon: savedGeo?.lon ?? 37.6174943,
        name: savedGeo?.name ?? 'Moscow',
    }

    const coords = {
        lat: options?.lat ?? initialCoords.lat,
        lon: options?.lon ?? initialCoords.lon,
        name: options?.name ?? initialCoords.name,
    }

    const weatherByCity = await getWeatherByCity(coords.name)
    const ForecastByCoord = await getForecastByCoord(coords.lat, coords.lon)
    const opt = { weatherByCity, ForecastByCoord }
    setWeatherData(opt)
    setContentToPage()

    const currentUnit = getUnit()
    const degreeBtn = document.querySelector('.degree')
    const fahrenheitBtn = document.querySelector('.fahrenheit')

    if (degreeBtn && currentUnit !== 'imperial') {
        degreeBtn.classList.add('selected')
    }

    if (fahrenheitBtn && currentUnit === 'imperial') {
        fahrenheitBtn.classList.add('selected')
    }
}
