console.log("Hello World!")

// Create a variable fs
// require function is the easiest way to include modules that exist in separate files
// fs ia a module to access physical file system
const fs = require("fs");

// Copy the content from one file to the other
fs.copyFileSync("file1.txt", "file2.txt");

// Call superheroes module
var superheroes = require("superheroes");

// Test superheroes module
var mySuperheroName = superheroes.random();
console.log(mySuperheroName);

// Call supervillains module
var supervillains = require("supervillains");

// Test superheroes module
var mySuperVillains = supervillains.random();
console.log(mySuperVillains);
