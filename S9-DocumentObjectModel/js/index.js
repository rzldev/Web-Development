// get element by tag
document.getElementsByTagName("li");

// see how many element
document.getElementsByTagName("li").length;

// get element by class
document.getElementsByClassName("btn");

// change the color of the element
document.getElementsByClassName("btn")[0].style.color = "red";

// get element by id
document.getElementById("title");

// change the valu of the element
document.getElementById("title").style.color = "green";
document.getElementById("title").innerHTML = "Good Bye";

// get element by query
document.querySelector("li");
document.querySelector(".btn");
document.querySelector("#title");

// combining selector
document.querySelector("a li");
document.querySelector("li.item");

// get all elements by query
document.querySelectorAll("#list .item");

// change the style value of an element
document.querySelector("h1").style.fontSize = "10rem";
document.querySelector(".check").style.visibility = "hidden";

// add class into element
document.querySelector("button").classList.add("invisible");

// turn the class active or not using toggle
document.querySelector("button").classList.toggle("invisible");
