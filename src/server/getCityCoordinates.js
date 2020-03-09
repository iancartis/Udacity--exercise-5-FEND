//Connect API City info
const baseURL = process.env.baseURL
const userName = process.env.userName
const fetch = require('node-fetch');

async function getCoordinates(yourcity) {
    const res = await fetch(`${baseURL}${yourcity}&maxRows=10&username=${userName}`)
    const error = "Couldn't connect the API";
    try {

        const data = await res.json();
        const lng = data.geonames[0].lng
        const lat = data.geonames[0].lat

        return [lng, lat];
    } catch (error) {
        console.log("error", error);
        // appropriately handle the error
    }
}

module.exports = getCoordinates