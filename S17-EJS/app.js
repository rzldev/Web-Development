const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static("public"));

app.set("view engine", "ejs");

const date = require(__dirname + "/date.js");

const items = ["Playing games!", "Playing games!", "Playing games!"];
const workItems = [];

app.get("/", function(req, res) {
  const date = new Date();
  const currentDay = date.getDay();
  const day = ""

  switch (currentDay) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
    default:
      console.log("Error: current day is equal to:" + currentDay);
  }

  res.render("list", {
    title: day
  });

});

app.get("/todo-list", function(req, res) {
  const day = date.getDate();

  res.render("todo-list", {
    title: day,
    listItems: items
  });

});

app.post("/todo-list", function(req, res) {
  console.log(req.body);
  const item = req.body.newItem;

  if (req.body.submit === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/todo-list");
  }

});

app.get("/work", function(req, res) {
  res.render("todo-list", {
    title: "Work List",
    listItems: workItems
  });
});

app.listen(3000, function() {
  console.log("Server is running on port 3000...");
})
