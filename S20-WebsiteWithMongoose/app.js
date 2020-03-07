const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({
  extended: true
}));

const _ = require("lodash");

app.use(express.static("public"));

app.set("view engine", "ejs");

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/todoDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const itemSchema = new mongoose.Schema({
  item: {
    type: String,
    required: [true, "Title can not be empty!"]
  }
});

const Item = mongoose.model("Item", itemSchema);

const customSchema = new mongoose.Schema({
  name: String,
  items: [itemSchema]
});

const CustomList = mongoose.model("List", customSchema);

const eat = new Item({
  item: "Eat!"
});
const play = new Item({
  item: "Play!"
});
const sleep = new Item({
  item: "Sleep!"
});

app.get("/", function(req, res) {
  const items = [];

  Item.find(function(err, item) {
    if (err) {
      console.log(err);

    } else {
      if (item.length < 1) {
        Item.insertMany([eat, play, sleep], function(err) {
          if (err) {
            console.log(err);
          } else {
            console.log("Data Successfully inserted!");
          }
        });

        res.redirect("/");
      }

      res.render("todo-list", {
        title: "Today",
        listItems: item
      });

    }
  });
});

app.post("/", function(req, res) {
  console.log(req.body);
  const item = req.body.newItem;
  const name = _.capitalize(req.body.submit);

  const newItem = new Item({
    item: item
  });

  if (name === "Today") {
    newItem.save();

    res.redirect("/");

  } else {
    CustomList.findOne({
      name: name
    }, function(err, foundList) {
      foundList.items.push(newItem);
      foundList.save();

      res.redirect("/" + name);

    });
  }

});

app.post("/delete", function(req, res) {
  const itemId = req.body.deleteCheckbox;
  const listName = _.capitalize(req.body.listName);

  if (itemId !== null) {
    if (listName === "Today") {
      Item.findByIdAndRemove(itemId, function(err) {
        if (err) {
          console.log(err);
        } else {
          console.log("Item has been deleted!");

          res.redirect("/");
        }
      });

    } else {
      CustomList.findOneAndUpdate({name: listName}, {$pull: {items: {_id: itemId}}}, function(err, foundList) {
        if (err) {
          console.log(err);
        } else {
          console.log("Item has been deleted!");

          res.redirect("/" + listName);
        }
      });
    }
  }
});

app.get("/:customName", function(req, res) {
  const customName = _.capitalize(req.params.customName);

  CustomList.findOne({
    name: customName
  }, function(err, foundList) {
    if (!err) {
      if (!foundList) {
        const newList = new CustomList({
          name: customName,
          items: [eat, play, sleep]
        });

        newList.save();
        res.redirect("/" + customName);

      } else {
        res.render("todo-list", {
          title: customName,
          listItems: foundList.items
        });

      }
    }
  })
});

app.listen(3000, function() {
  console.log("Server is running on port 3000...");
})
