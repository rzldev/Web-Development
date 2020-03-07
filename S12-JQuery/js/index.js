$("h1").css("color", "red");
console.log($("h1").css("color"))

$("h1").addClass("big-title margin-50");
console.log($("h1").hasClass("margin-50"));

$("h1").text("HELLO WORLD?");

$("button").html("<em>Hello?</em>");

$("a").attr("href", "https://google.com/");
console.log($("h1").attr("class"));

$(document).keypress(function (event) {
  $("h2").text(event.key);
});

$(".1").click(function () {
  $("h1").before("<p>before</p>");
});

$(".2").click(function () {
  $("h1").after("<p>after</p>");
});

$(".3").click(function () {
  $("h1").prepend("<p>prepend</p>");
});

$(".4").click(function () {
  $("h1").append("<p>append</p>");
});

$(".5").click(function () {
  $("p").remove();
});

$(".hide").on("click", function() {
  $("h1").hide();
});

$(".show").on("click", function() {
  $("h1").show();
});

$(".toggle").on("click", function() {
  $("h1").toggle();
});

$(".fade-out").on("click", function() {
  $("h1").fadeOut();
});

$(".fade-in").on("click", function() {
  $("h1").fadeIn();
});

$(".fade-toggle").on("click", function() {
  $("h1").fadeToggle();
});

$(".slide-up").on("click", function() {
  $("h1").slideUp();
});

$(".slide-down").on("click", function() {
  $("h1").slideDown();
});

$(".slide-toggle").on("click", function() {
  $("h1").slideToggle();
});

$(".animate").on("click", function() {
  $("h1").fadeOut().fadeIn().slideUp().slideDown().animate({margin: 100, opacity: 0.5});
});
