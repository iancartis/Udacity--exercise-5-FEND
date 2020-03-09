//Geoname API fetch

const getInfoUI = async() => {
    const result = await fetch("/test")
    const myData = await result.json();
    console.log(myData);
    document.getElementById('image').innerHTML = `<img src="${imageurl}">`
    document.getElementById('start_date').innerHTML = `Your trip to ${inputCity} will start in ${departtime} days`
    document.getElementById('duration').innerHTML = `The temperature in ${inputCity} will be ${temperature}`
        // document.getElementById('summary').innerHTML = `Weather summary </br> `


    // return myData;
}
export {
    getInfoUI
}





// /* Function to POST data */
// // const postCityInfo = async(url = "", data = {}) => {

// //     const res = await fetch(url, {
// //         method: "POST",
// //         headers: {
// //             "Content-Type": "application/json"
// //         },
// //         body: JSON.stringify(data),
// //     });
// //     try {

// //         const data = await res.json();
// //         console.log(data)
// //         return data;
// //     } catch (error) {
// //         console.log("error", error);

// //         // appropriately handle the error
// //     }
// // }