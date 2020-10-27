// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score
//-----------------------------------------------------------

var timer = document.getElementById("time");
var mainHeader = document.querySelector(".main-header");
var mainParagraph = document.querySelector(".main-paragraph");
var startButton = document.getElementById("start");

var secondsLeft = 76;

startButton.addEventListener("click", function(event) {
    var timerInterval = setInterval(function() {
    secondsLeft--;
    timer.textContent = "Time: " + secondsLeft;

    if(secondsLeft === 0) {
        clearInterval(timerInterval);
        sendMessage();
      }

    }, 1000);  
});

function sendMessage() {
    mainHeader.textContent = "Time Elapsed";
    mainParagraph.textContent = "Please try again";
  
  }

