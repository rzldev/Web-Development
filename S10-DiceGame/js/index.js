var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var wins = "";

document.getElementById("dice1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
document.getElementById("dice2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

if (randomNumber1 > randomNumber2) {
  wins = "😀Player 1 Wins!😀";
} else if (randomNumber2 > randomNumber1) {
  wins = "😍Player 2 Wins!😍";
} else if (randomNumber1 === randomNumber2) {
  wins = "🤣Draw!🤣";
} else {
  wins = "🤨Error!🤨";
}

document.getElementById("wins").innerHTML = wins;
