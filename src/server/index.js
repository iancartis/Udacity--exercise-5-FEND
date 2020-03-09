// Require modules
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const fetch = require('node-fetch');
var path = require("path");
const app = express();

const getCoordinates = require('./getCityCoordinates');
const getWeather = require('./getCityWeather');
const getCityImage = require('./getCityImage');




// require('dotenv').config();
dotenv.config();


//Here we are configuring express to use body-parser as middle-ware.


app.use(express.static("./dist"));
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(cors());
//app.set('view engine', 'ejs')

// Initialize the main project folder
app.use(express.static("../src"));
console.log(__dirname);

// Spin up the server
const port = 3030;
const server = app.listen(port, listening);







function listening() {
    console.log(`the port of this server is ${port}`);
    console.log(`Your API key is ${process.env.API_KEY}`);
}
app.post("/test", function(req, res) {
    departtime = req.body.departtime;
    nowtime = req.body.nowtime;
    inputCity = req.body.city;
    duration = req.body.duration;
    future = req.body.future
    getCoordinates(inputCity)
        .then(data => getWeather(lng, lat))
        .then(function(data) {
            issumary = data[0];
            istemperature = data[1];
            console.log(issumary, istemperature)
        })
        .then(data => getImage(inputCity))
        .then(function(data) {
            imageurl = data;
        })
    console.log(req.body.formText),
        getCityInfo = req.body.formText,
        function(error, res) {
            if (error === null) {
                console.log(res)
                res.send(res);
            }
            console.log(error);
        }
});