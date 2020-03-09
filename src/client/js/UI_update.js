//Geoname API fetch



document.getElementById("submit").addEventListener("click", function(event) {
    event.preventDefault()
});
let button = document.getElementById('submit');



const formText = button.addEventListener('click', function() {
    const yourcity = document.getElementById('destination').value;
    const departTime = document.getElementById('departure').value;
    const arrivalDate = document.getElementById('arrival').value;
    console.log([yourcity, departTime, arrivalDate]);
    return [yourcity, departTime, arrivalDate];
});

fetch('http://localhost:3030/test', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formText)
    })
    .then(res => res.json())
    .then(function(response) {
        console.log(response);

    });




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