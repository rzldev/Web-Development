const mongoose = require("mongoose");

// Create connection
mongoose.connect("mongodb://localhost:27017/fruitsDB", {useNewUrlParser: true, useUnifiedTopology: true});

// Create schema
const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

// // Insert Data
const fruit = new Fruit({
  name: "Apple",
  rating: 4,
  review: "Pretty solid as a fruit."
});

// Run
fruit.save();

// Create schema with validation
const peopleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "The data has no name!"]
  },
  age: {
    type: Number,
    min: 1,
    max: 100
  },
  favouriteFruit: fruitSchema
});

const People = mongoose.model("People", peopleSchema);

// Insert Data
const john = new People({
  name: "John",
  age: 37
});

// Run
john.save();

// Insert Data
const banana = new Fruit({
  name: "Banana",
  rating: 5,
  review: "It tastes so good!"
});

const orange = new Fruit({
  name: "Orange",
  rating: 5,
  review: "I love it!!!"
});

// Run
Fruit.insertMany([banana, orange], function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Successfully saved all the fruits to fruitDB");
  }
});

// Show Data
Fruit.find(function(err, fruits) {
  if (err) {
    console.log(err);
  } else {
    fruits.forEach(function(fruit) {
      console.log(fruit.name);
    })
  }
});

// Update data
Fruit.updateOne({name: "Apple"}, {rating: 2}, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("The data has been updated!");
  }
});

// Delete data
Fruit.deleteOne({name: "Banana"}, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("The data has been deleted!");
  }
})

// Relationship
const ben = new People({
  name: "Ben",
  age: 40,
  favouriteFruit: banana
})

ben.save();

People.updateOne({name: "John"}, {favouriteFruit: orange}, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Data has been updated!");
  }
});
