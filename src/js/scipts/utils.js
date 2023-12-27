export function debounce(func, delay) {
    let timeoutId

    return function () {
        const context = this
        const args = arguments

        clearTimeout(timeoutId)
        timeoutId = setTimeout(function () {
            func.apply(context, args)
        }, delay)
    }
}

export function getZero(num) {
    if (num < 10) {
        return `0${num}`
    } else {
        return `${num}`
    }
}

export function getTime() {
    let monthNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ]
    const t = new Date()
    const mounth = t.getMonth()
    const day = t.getDate()
    const fulltime = t.getHours()
    const getMinutes = t.getMinutes()
    const newMonth = monthNames[mounth]

    return {
        mounth: newMonth,
        day: day,
        minutes: getMinutes,
        fulltime: fulltime,
    }
}

export function getFormattedDate() {
    const months = [
        'Январь',
        'Февраль',
        'Март',
        'Апрель',
        'Май',
        'Июнь',
        'Июль',
        'Август',
        'Сентябрь',
        'Октябрь',
        'Ноябрь',
        'Декабрь',
    ]

    const now = new Date()
    const monthName = months[now.getMonth()]

    const formattedDate = `${monthName} ${now.getDate()}, ${formatTime(now)}`

    return formattedDate
}

export function formatTime(date) {
    if (typeof date === 'number' || typeof date === 'string') {
        date = new Date(date)
    }

    const hours = date.getHours()
    const minutes = date.getMinutes()

    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes

    return `${hours}:${formattedMinutes}`
}

export function formatUnixTimeTo24HourTimeString(unixTime, timezoneOffset) {
    let timeMilliseconds = unixTime * 1000 + timezoneOffset * 1000

    let timeDate = new Date(timeMilliseconds)

    let hours = timeDate.getUTCHours()
    let minutes = timeDate.getUTCMinutes()

    let formattedHours = hours < 10 ? `0${hours}` : hours
    let formattedMinutes = minutes < 10 ? `0${minutes}` : minutes

    return `${formattedHours}:${formattedMinutes}`
}

export function firstLetterUpperCase(string) {
    if (!string) return ''
    return string[0].toUpperCase() + string.slice(1)
}

export function getWindDirection(degrees) {
    const directions = [
        { min: 0, max: 22.5, text: 'С' },
        { min: 22.5, max: 67.5, text: 'СВ' },
        { min: 67.5, max: 112.5, text: 'В' },
        { min: 112.5, max: 157.5, text: 'ЮВ' },
        { min: 157.5, max: 202.5, text: 'Ю' },
        { min: 202.5, max: 247.5, text: 'ЮЗ' },
        { min: 247.5, max: 292.5, text: 'З' },
        { min: 292.5, max: 337.5, text: 'СЗ' },
        { min: 337.5, max: 360, text: 'С' },
    ]

    for (const direction of directions) {
        if (degrees >= direction.min && degrees < direction.max) {
            return direction.text
        }
    }

    return 'Неизвестное направление'
}

export function getWindString(windSpeed, windDirection) {
    const windSpeedMetric = appStore.unit === 'metric' ? 'м/с' : 'м/ч'
    return `${windSpeed} ${windSpeedMetric}, <span class="common-text">${windDirection}</span>`
}

export function hPaToMmHg(hPa) {
    // Соотношение: 1 гектопаскаль = 0.75006 миллиметра ртутного столба
    const mmHg = hPa * 0.75006
    return Math.round(mmHg)
}

export function setUnit(metric) {
    localStorage.setItem('currentUnit', metric)
}

export function getUnit() {
    return localStorage.getItem('currentUnit')
}

export function setGeo(geoObj) {
    localStorage.setItem('lat', geoObj.lat)
    localStorage.setItem('lon', geoObj.lon)
    localStorage.setItem('name', geoObj.name)
}

export function getGeo() {
    return {
        lat: localStorage.getItem('lat'),
        lon: localStorage.getItem('lon'),
        name: localStorage.getItem('name'),
    }
}

// Костыльное дробление по дням, просьба исправить на более читаемый😁)))
export function splitForecastsForFiveDays(weatherData) {
    function groupByTime(data) {
        const groupedData = {}

        data.forEach((entry) => {
            const time = entry.time
            if (!groupedData[time]) {
                groupedData[time] = []
            }
            groupedData[time].push(entry)
        })

        return groupedData
    }

    const sortedWeatherData = [...weatherData].sort((a, b) => {
        // Сортировка по времени
        const timeA = a.time
            .split(':')
            .map(Number)
            .reduce((acc, val) => acc * 60 + val, 0)
        const timeB = b.time
            .split(':')
            .map(Number)
            .reduce((acc, val) => acc * 60 + val, 0)
        return timeA - timeB
    })

    const groupedData = groupByTime(sortedWeatherData)

    const dataAtMidnightIds = groupedData['0:00'].map((data) => data.id) || []

    const daysForecast = []

    for (let i = 0; i < dataAtMidnightIds.length; i++) {
        const midnightId = dataAtMidnightIds[i]

        switch (i) {
            case 0:
                daysForecast.push(weatherData.slice(0, 8))
                daysForecast.push(
                    weatherData.slice(midnightId, dataAtMidnightIds[i + 1]),
                )
                break
            case dataAtMidnightIds.length - 1:
                daysForecast.push(weatherData.slice(midnightId))
                break
            default:
                daysForecast.push(
                    weatherData.slice(midnightId, dataAtMidnightIds[i + 1]),
                )
                break
        }
    }

    return daysForecast.slice(0, 5)
}

export function getFormattedTimestamp(timestamp) {
    const currentDate = new Date()
    const inputDate = new Date(timestamp)

    const options = {
        day: 'numeric',
        month: 'long',
    }

    if (
        inputDate.getDate() === currentDate.getDate() &&
        inputDate.getMonth() === currentDate.getMonth() &&
        inputDate.getFullYear() === currentDate.getFullYear()
    ) {
        // Сегодня
        return `Сегодня, ${inputDate.toLocaleDateString('ru-RU', options)}`
    } else if (
        inputDate.getDate() === currentDate.getDate() + 1 &&
        inputDate.getMonth() === currentDate.getMonth() &&
        inputDate.getFullYear() === currentDate.getFullYear()
    ) {
        // Завтра
        return `Завтра, ${inputDate.toLocaleDateString('ru-RU', options)}`
    } else {
        // День недели
        return `${inputDate.toLocaleDateString('ru-RU', {
            ...options,
            weekday: 'long',
        })}`
    }
}
