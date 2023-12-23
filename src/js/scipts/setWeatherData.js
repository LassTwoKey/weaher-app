
export async function updateWeather(city){
    const weathers = await getWeatherByCity(city);
    const a = new Date();
    const hours = a.getHours();
    const sunrice = weathers.sys.sunrise;
    const sunset = weathers.sys.sunset;
    const sunriceHours = Math.floor((sunrice / (1000 * 60 * 60) % 24));
    const sunsetHours = Math.floor((sunset / (1000 * 60 * 60) % 24));
    const gradusAndCalvine = 273.15;
    const weatherIconAndText = document.querySelector('.widget-weather-icon')
    document.querySelector('.widget-city-country').innerHTML = ` 
    <p>${weathers.name} </p>`
   document.querySelector('.widget-gradus').innerHTML = `
     <p>${Math.floor(weathers.main.temp - gradusAndCalvine)}°</p> 
   `
   document.querySelector('.widget-real-gradus').innerHTML  = `
     <p>Ощущается ${Math.floor(weathers.main.feels_like - gradusAndCalvine)}°</p> 
   `
   weathers.weather.forEach(item =>{
      weatherIconAndText.innerHTML = `
       <img src ="http://openweathermap.org/img/w/${item.icon}.png" style = "width:107px">
       <p>${item.main}</p> 
      `
   })
   document.querySelector('.widget-real-data').innerHTML = `
    ${getTime()}
   `
   document.querySelector('.day').innerHTML = `
   <p>День ${Math.floor(weathers.main.temp_max - gradusAndCalvine)}°</p>
  `
   document.querySelector('.night').innerHTML = `
  <p>Ночь ${Math.floor(weathers.main.temp_min - gradusAndCalvine)}°</p>
 `
 document.querySelector('.wind p ').innerHTML = `
   <p>${weathers.wind.speed}км/ч</p>
 `
 document.querySelector('.humidity p').innerHTML = `
   <p>${weathers.main.humidity}%</p>
 `

 document.querySelector('.pressure p').innerHTML = `
 <p>${weathers.main.pressure} мм рт.ст</p>
`

  document.querySelectorAll('.frame-time p').forEach(item =>{
    item.innerHTML = `
     <p>${hours}:${getZero(a.getMinutes())}</p> 
    `
 })

  document.querySelector('.sunrice').innerHTML =`
   <p>через ${hours - sunriceHours} ч</p>
  `

  document.querySelector('.sunset').innerHTML = `
   <p> через ${hours - sunsetHours}ч </p>
  `

}










 export function setWeatherData({weatherByCity,ForecastByCoord}){
    appStore.weatherInfo.city.geoFullName = `${weatherByCity.name}, ${weatherByCity.sys.country}`;
      
}