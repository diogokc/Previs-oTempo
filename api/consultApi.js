import axios from "axios";

export default async function getCurrentWeather(locationCoords){

    const lat = locationCoords.latitude
    const log = locationCoords.longitude
    console.log("http://api.cz.org/data/2.5/weather?lat=" + lat + "&lon=" + log + "&appid=514b9a7dfb484d97607113deea24e4cc")
    let url = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + log + "&appid=514b9a7dfb484d97607113deea24e4cc"
    var results = []

    await axios.get(url)
    
        .then(function (response){
            const data = response.data    
            const locationName = (data.sys.country + ', ' + ' ' + data.name)
            const temperatureMin = data.main.temp_min
            const temperatureMax = data.main.temp_max
            const wind = data.wind.speed
            const humidity = data.main.humidity
            const currentTemperature = data.main.temp
            
            results = [currentTemperature, temperatureMin, temperatureMax, locationName, wind, humidity]
            // [currentTemperature, temperatureMin, temperatureMax, locationName, wind, humidity]
            
        })
        .catch(function (error) {
            console.log(error)
        })
        
    return results
  }