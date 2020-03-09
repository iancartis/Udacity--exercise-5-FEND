// import the checkForUrl from urlValidator.js
import { checkForUrl } from './urlValidator';

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    console.log(formText);

    // Check if formText is url
    let urlValidation = checkForUrl(formText);
    console.log(`This is the result of the URL Validation: ${urlValidation}`);
    if (urlValidation == "The Url provided is not correct") {
        document.getElementById('results').innerHTML = `The Url provided is not correct`;

    } else {
        //Create an object with url:formText
        const myurl = {
            url: formText
        }

        console.log("::: Form Submitted :::")
        fetch('http://localhost:3000/test', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(myurl)
            })
            .then(res => res.json())
            .then(function(response) {
                console.log(response);
                document.getElementById('results').innerHTML = `The polarity is ${response.polarity} and confidence is ${response.polarity_confidence}`;


            });
    }
}

export {
    handleSubmit
}