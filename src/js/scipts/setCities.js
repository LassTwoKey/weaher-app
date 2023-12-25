import { getCitiesByValue } from './api.js'
import { inputClose } from './searchInput.js'
import { initApp } from './initApp.js'
import { setGeo } from './utils.js'

export async function setCities(searchValue) {
    if (!searchValue) {
        return
    }

    const cities = await getCitiesByValue(searchValue)
    const citiesList = document.querySelector('.search-list ul')

    if (cities.length === 0) {
        citiesList.innerHTML = `По запросу "${searchValue}" ничего не найдено`
        return []
    }

    const citiesItems = []

    cities.forEach((city) => {
        const geoName = city.local_names?.ru ?? city.name
        const country = city.country
        const cityItem = document.createElement('li')
        cityItem.innerHTML = `<button style="width: 100%;">${geoName}, ${country}</button>`
        citiesItems.push(cityItem)
    })

    citiesList.innerHTML = ``

    citiesItems.forEach((cityItem, i) => {
        citiesList.appendChild(cityItem)
        cityItem.addEventListener('click', async (e) => {
            const options = {
                lat: cities[i].lat,
                lon: cities[i].lon,
                name: cities[i].name,
            }

            setGeo(options)
            await initApp(options)
            inputClose()
        })
    })
}
