// random number
var myRandomNumber = Math.random();
console.log(myRandomNumber);

// if-else conditionals
if (myRandomNumber > 70) {
  console.log("Your score is good")
} else {
  console.log("Your score is not good enough")
}

// function with conditionals
function bmiCalculator (weight, height) {
    var bmi = weight / Math.pow(height, 2);
    var interpretation = "";
    if (bmi < 18.5) {
        interpretation = "Your BMI is " + Math.round(bmi) + ", so you are underweight.";
    }
    if (bmi >= 18.5 && bmi <= 24.9) {
        interpretation = "Your BMI is " + Math.round(bmi) + ", so you have a normal weight.";
    }
    if (bmi > 24.9) {
        interpretation = "Your BMI is " + Math.round(bmi) + ", so you are overweight.";
    }
    return interpretation;
}

bmiCalculator(80, 2);

// array
var nameList = ["bob", 'John', "Spongebob", "Patrick"];
console.log(nameList)
console.log()

// working with array
var yourName = prompt("Who are you");
if (yourName.includes(nameList)) {
  alert("Welcome" + yourName);
} else {
  alert("Sorry, i do not know you");
}

// adding elements into array
nameList.push("Squidward");
console.log(nameList);

// working with function and array
var numberList = [0]
function fizzbuzz(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    numberList.push("fizzbuzz");
    alert("FIZZBUZZ!")
  } else if (number % 3 === 0) {
    numberList.push("fizz");
    alert("FIZZ!")
  } else if (number % 5 === 0) {
    numberList.push("buzz");
    alert("BUZZ!")
  } else {
    numberList.push(number);
  }

  console.log(numberList);
}
fizzbuzz(prompt("Insert number!"));

// while loops
var numberList = [];
function fizzbuzz(number) {
  count = 0;
  while (count <= number) {
    if (count % 3 === 0 && count % 5 === 0 && count !== 0) {
      numberList.push("fizzbuzz");
    } else if (count % 3 === 0 && count !== 0) {
      numberList.push("fizz");
    } else if (count % 5 === 0 && count !== 0) {
      numberList.push("buzz");
    } else {
      numberList.push(count);
    }
    count++;
  }

  console.log(numberList);
}
fizzbuzz(prompt("Insert number!"));

// for loops
var numberList = [];
function fizzbuzz(number) {
  for (var count = 0; count < number; count++) {
    if (count % 3 === 0 && count % 5 === 0 && count !== 0) {
      numberList.push("fizzbuzz");
    } else if (count % 3 === 0 && count !== 0) {
      numberList.push("fizz");
    } else if (count % 5 === 0 && count !== 0) {
      numberList.push("buzz");
    } else {
      numberList.push(count);
    }
  }

  console.log(numberList);
}
fizzbuzz(prompt("Insert number!"));
