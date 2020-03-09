//Connect API City info
const fetch = require('node-fetch');
const baseURL = "https://api.darksky.net/forecast/";
const API_KEY = "2c85353c4c9c765107ba2b61cdf62cd9";

async function getWeather(lng, lat) {
    const res = await fetch(`${baseURL}${API_KEY}/${lng},${lat}`)
    console.log(`${baseURL}${API_KEY}/${lng},${lat}`)

    const error = "Couldn't connect the API";
    try {
        const data = await res.json();
        const temperature = data.currently.temperature;

        console.log(data, temperature)


        return temperature;
    } catch (error) {
        console.log("error", error);
        // appropriately handle the error
    }
}

module.exports = getWeather