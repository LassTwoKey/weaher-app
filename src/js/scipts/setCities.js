import { getCitiesByValue } from "./api.js";

export async function setCities(searchValue){
    if(!searchValue){
        return;
    }
    const cities = await getCitiesByValue(searchValue);
    const citiesList = document.querySelector('.search-list ul');
    if(cities.length === 0){
       citiesList.innerHTML = `По запросу "${searchValue}" ничего не найдено`
       return []
    }
    const citiesItems = [];
    cities.forEach(city =>{
       const geoName =  city.local_names?.ru  ?? city.name;
       const country = city.country;
       const cityItem = document.createElement('li');
        cityItem.innerHTML = `<button>${geoName}, ${country}</button>`
        citiesItems.push(cityItem);
    })
    citiesList.innerHTML = ``;
    citiesItems.forEach((cityItem,i) =>{
      citiesList.appendChild(cityItem)
    //   cityItem.addEventListener('click', async (e)=>{
    //     const cityName = e.target.textContent.split(', ')[0];
    //      await getWeather(cityName);
    //      updateWeather(cityName);
    //   })
    })
     
   }
   