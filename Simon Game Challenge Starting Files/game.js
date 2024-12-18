let gamePattern = [];
let buttonColours = ["red", "blue", "green", "yellow"];
let userClickPattern = [];
let started = false;
let level = 0;
function nextSequence() {
  $("h1").html("level " + level);
  level++;

  let randomNum = Math.floor(Math.random() * 4);
  let randomChosenColor = buttonColours[randomNum];
  gamePattern.push(randomChosenColor);
  $("#" + randomChosenColor)
    .fadeOut(100)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
  playSound(randomChosenColor);
}
$(".btn").click(function () {
  let userChosenColor = $(this).attr("id");
  userClickPattern.push(userChosenColor);
  playSound(userChosenColor);
  animatePress(userChosenColor);
  checkAnswer(userClickPattern);
});

function playSound(name) {
  const audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}
function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");

  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}
$(document).keydown(function () {
  console.log("string");
  if (!started) {
    started = true;
    $("h1").text("level " + level);
    nextSequence();
  }
});
function checkAnswer(currentlevel) {
  if (userClickPattern[currentlevel] === gamePattern[currentlevel]) {
    if (userClickPattern.length === gamePattern.length) {
      console.log("success");
      setTimeout(nextSequence, 100);
    }
  } else {
    console.log("wrong");
  }
}
