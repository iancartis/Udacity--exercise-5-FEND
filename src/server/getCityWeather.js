//Connect API City info
const fetch = require('node-fetch');
// require('dotenv').config();
dotenv.config();

const baseURL = process.env.WEATHER_URL;
const API_KEY = process.env.WEATHER_API_KEY;

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