import { debounce } from './utils.js'
import { setCities } from './setCities.js'

const inputSearch = document.querySelector('.search')

function inputWork() {
    document.querySelector('.header-search-input img').classList.add('hide')
    document.querySelector('.search-list').classList.remove('hide')
    document.querySelector('.close').classList.remove('hide')
}

export function inputClose() {
    document.querySelector('.header-search-input img').classList.remove('hide')
    document.querySelector('.search-list').classList.add('hide')
    document.querySelector('.close').classList.add('hide')
    inputSearch.value = ''
}

inputSearch.addEventListener('input', (e) => {
    inputWork()
    if (event.target.value.trim() === '') {
        inputClose()
    }
})

document.querySelector('.close').addEventListener('click', inputClose)

document.body.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        inputClose()
    }
})

////

function returnSetCities() {
    return setCities(inputSearch.value.trim())
}

const debouncedFunction = debounce(returnSetCities, 500) // Задержка в 500 миллисекунд

document.querySelector('.search').addEventListener('input', debouncedFunction)
