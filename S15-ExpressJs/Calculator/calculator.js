// express
const express = require("express");
const app = express();

// body-parser
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

// route
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
  console.log(req.body);

  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2)
  var result = num1 + num2;

  res.send(num1 + " + " + num2 + " = " + result);
});

app.get("/bmi-calculator", function(req, res) {
  res.sendFile(__dirname + "/bmi-calculator.html")
});

app.post("/bmi-calculator", function(req, res) {
  console.log(req.body);

  var height = Number(req.body.height);
  var weight = Number(req.body.weight);
  var bmi = weight / Math.pow(height, 2);

  res.send("<h1>BMI Calculator</h1><p>Your BMI is " + bmi + "</p>");
});

// server running
app.listen(3000, function() {
  console.log("Server is running on port 3000");
});
