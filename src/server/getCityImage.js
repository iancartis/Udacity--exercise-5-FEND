async function getCityImage(yourcity) {
    const API_KEY = '15305007-26873b5ed34449aa9669f1099';
    const URL = 'https://pixabay.com/api/?key='

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