import { initApp } from './initApp.js'
import { getUnit, setUnit } from './utils.js'

const degreeBtn = document.querySelector('.degree')
const fahrenheitBtn = document.querySelector('.fahrenheit')

degreeBtn.addEventListener('click', (e) => {
    const currentUnit = getUnit()

    if (currentUnit === 'metric') return

    if (
        e.target === degreeBtn &&
        fahrenheitBtn.classList.contains('selected')
    ) {
        degreeBtn.classList.add('selected')
        fahrenheitBtn.classList.remove('selected')
    }

    appStore.unit = 'metric'
    setUnit('metric')
    initApp()
})
fahrenheitBtn.addEventListener('click', (e) => {
    const currentUnit = getUnit()

    if (currentUnit === 'imperial') return

    if (
        e.target === fahrenheitBtn &&
        degreeBtn.classList.contains('selected')
    ) {
        fahrenheitBtn.classList.add('selected')
        degreeBtn.classList.remove('selected')
    }

    appStore.unit = 'imperial'
    setUnit('imperial')
    initApp()
})
