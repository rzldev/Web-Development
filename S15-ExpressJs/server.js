// Create a server that listen on port 3000
const express = require("express");
const app = express();

// Create a get route
app.get("/", function(request, response) {
  response.send("<h1>Hello World!</h1>");
});

app.get("/contact", function(req, res) {
  res.send("<h2>Contact me at : rzldev@gmail.com</h2>")
});

app.get("/about", function(req, res) {
  res.send("<h2>you can call me rzldev, i love programming</h2>")
});

// Using nodemon
app.listen(3000, function() {
  console.log("Server started on port 3000");
});
