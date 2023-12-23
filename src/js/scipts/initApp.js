import { setWeatherData } from "./setWeatherData.js";
import { getForecastByCoord,getWeatherByCity } from "./api.js";


export const initApp = async () => {
    const coords = {
        lat: 55.7504461,
        lon: 37.6174943,
        name: 'Moscow'
    }
    const weatherByCity = await getWeatherByCity(coords.name);
    const ForecastByCoord = await getForecastByCoord(coords.lat,coords.lon);
    const opt = {weatherByCity,ForecastByCoord}
    setWeatherData(opt)
}
