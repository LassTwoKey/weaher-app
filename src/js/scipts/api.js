
export async function getWeatherByCity(city){
         const response = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appStore.apiKey}`)
        const data = (await response).json();
        return data;
   
}

export async function getCitiesByValue(searchValue) {
      const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${searchValue}&limit=5&appid=${appStore.apiKey}`);
      const data = (await response).json();
      return data;

  }

  export async function getForecastByCoord(lat,lon){
         const response = fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&lang=ru&appid=${appStore.apiKey}`)
          const data = (await response).json();
          return data;
}