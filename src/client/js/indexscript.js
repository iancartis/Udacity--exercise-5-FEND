import fetch from "node-fetch";

const button = document.getElementById('submit');


button.addEventListener('click', async function() {
    const nowtime = Math.round((new Date()).getTime() / 1000);
    const departtime = new Date(document.getElementById('departure').value).getTime() / 1000;
    const returntime = new Date(document.getElementById('arrival').value).getTime() / 1000;
    const postData = async(url = '', data = {}) => {
        const res = await fetch(url, {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
    }



    const formText = {
        departtime: new Date(document.getElementById('departure').value).getTime() / 1000,
        nowtime: Math.round((new Date()).getTime() / 1000),
        city: document.getElementById('destination').value,
        future: parseInt((departtime - nowtime) / (3600 * 24))
    };

    console.log(formText)

    // postData('http://localhost:3030/test', formtext)
    //     .then(data => updateUI())
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
});