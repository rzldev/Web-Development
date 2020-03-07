const express = require("express");
const app = express();

const https = require("https");

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({entended: true}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
  const city = req.body.cityName;
  const appKey = "011b681d3730a1c4faf38de86bf31c3a";
  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + appKey;

  https.get(url, function(response) {
    console.log(response.statusCode);

    response.on("data", function(data) {
      // Convert JSON string into Javascript object
      const weatherData = JSON.parse(data);
      console.log(weatherData);

      // Convert a JavaScript object into a JSON string
      const object = {
        name: "Bruce",
        superheroName: "Batman"
      }
      stringifyObject = JSON.stringify(object);
      console.log(stringifyObject);

      // Grab a piece of the JSON object
      const weatherMain = weatherData.weather[0].main;
      const weatherDesc = weatherData.weather[0].description;
      console.log(weatherMain + ", " + weatherDesc);

      // Grab icon
      const icon = weatherData.weather[0].icon;
      const imageUrl = "https://openweathermap.org/img/wn/" + icon + "@2x.png";

      res.write("<p>The weather in " + city + " currently is</p>");
      res.write("<h1>" + weatherMain + ", " + weatherDesc + "</h1>");
      res.write("<img src =" + imageUrl +">");
      res.send();

    });
  });
});

app.listen(3000, function() {
  console.log("Server is running on port 3000")
});
