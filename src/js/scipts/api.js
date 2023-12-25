export async function getWeatherByCity(city) {
    const response = fetch(
        `https://api.openweathermap.org/data/2.5/weather?lang=ru&q=${city}&units=${appStore.unit}&appid=${appStore.apiKey}`,
    )
    const data = (await response).json()
    return data
}

export async function getCitiesByValue(searchValue) {
    const response = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${searchValue}&limit=5&units=${appStore.unit}&appid=${appStore.apiKey}`,
    )
    const data = (await response).json()
    return data
}

export async function getForecastByCoord(lat, lon) {
    const response = fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lang=ru&lat=${lat}&lon=${lon}&lang=ru&units=${appStore.unit}&appid=${appStore.apiKey}`,
    )
    const data = (await response).json()
    return data
}
