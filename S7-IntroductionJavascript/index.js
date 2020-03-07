// print
alert("Welcome");

// input
prompt("What is your name?");

// string
var myName = "rzldev";
alert(myName);
myName = "Bob";
alert(myName);

// number
var myNumber = "081334768722";
alert(myNumber);
myNumber = "123";
alert(myNumber);

// get value from input
var yourName = prompt("What is your name?");
var yourNumber = prompt("What is your number?");

// string concating
alert("Hello " + yourName + " welcome to my blog.");

// string length
alert(yourName.length);

// slicing
myFullName = "Bob Snow"
alert(myFullName.slice(0, 1));
alert(myFullName.slice(2, 4));

// casing
yourName = prompt("What is your name?");
alert("hello " + yourName.toUpperCase());
alert("hello " + yourName.toLowerCase());
alert("hello " + yourName.slice(0, 1).toUpperCase() + yourName.slice(1, yourName.length).toLowerCase());

// arithmetic
var addition = 7 + 3;
alert("7 + 3 = " + addition);
var subtraction = 7 - 3;
alert("7 - 3 = " + subtraction);
var multiplication = 7 * 3;
alert("7 x 3 = " + multiplication);
var division = 7 / 3;
alert("7 : 3 = " + division);
var modulus = 7 % 3;
alert("7 % 3 = " + modulus);
var calculation = 3 + 5 * 2;
alert("3 + 5 : 2 = " + calculation);
calculation = (3 + 5) * 2;
alert("(3 + 5) : 2 = " + calculation);

// increment and decrement
var x = 5;
x = x + 1;
alert(x);
x = x - 3;
alert(x);

// functions
function getMilk() {
  console.log("leave house");
  console.log("move right");
  console.log("move up");
  console.log("move right");
  console.log("get milk");
  console.log("move left");
  console.log("move down");
  console.log("move left");
  console.log("enter house");
}
getMilk();

// functions with parameters
function buyMilk(money) {
  bottlesOfMilk = (money - (money % 1.5)) / 1.5;
  console.log("leave house");
  console.log("move right");
  console.log("move up");
  console.log("move right");
  console.log("buy " + bottlesOfMilk + " bottles of milk");
  console.log("pay " + (bottlesOfMilk * 1.5) + "$");
  console.log("move left");
  console.log("move down");
  console.log("move left");
  console.log("enter house");
}
buyMilk(10);

// functions with return values
function buyMilk(money) {
  bottlesOfMilk = (money - (money % 1.5)) / 1.5;
  console.log("leave house");
  console.log("move right");
  console.log("move up");
  console.log("move right");
  console.log("buy " + bottlesOfMilk + " bottles of milk");
  console.log("pay " + (bottlesOfMilk * 1.5) + "$");
  console.log("move left");
  console.log("move down");
  console.log("move left");
  console.log("enter house");
  return Math.floor(money / 1.5);
}
var milk = buyMilk(10);
alert("I get " + milk + " bottles of milk")

// challenge
function bmiCalculator(weight, height) {
  bmi = weight / Math.pow(height, 2);
  return Math.round(bmi);
}
var weight = prompt("How heavy are you?");
var height = prompt("How tall are you?");
var bmi = bmiCalculator(weight, height);
alert("bmi = " + bmi);
