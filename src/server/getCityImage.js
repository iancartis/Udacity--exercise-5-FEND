async function getCityImage(yourcity) {
    const API_KEY = process.env.IMAGE_API_KEY;
    const URL = process.env.IMAGE_URL

    const fetch = require('node-fetch');
    const res = await fetch(`${URL}${$API_KEY}&q=${city}`);
    const error = "Couldn't connect the API";
    try {

        const data = await res.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log("error", error);
        // appropriately handle the error
    }

}
module.exports = getCityImage;