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

startButton.addEventListener("click", function(event) {
    var secondsLeft = 75;
    timer.textContent = "Timer= " + secondsLeft;
    setInterval()

    var timerInterval = setInterval(function() {
    secondsLeft--;

    if(secondsLeft === 0) {
        clearInterval(timerInterval);
        sendMessage();
      }

    }, 75000);  
});

// function setTime() {
//     var timerInterval = setInterval(function() {
//       secondsLeft--;
  
//       if(secondsLeft === 0) {
//         clearInterval(timerInterval);
//         sendMessage();
//       }
//     }, 75000);
// }

console.log(timer);

function sendMessage() {
    mainHeader.textContent = "Time Elapsed";
    mainParagraph.textContent = "Please try again";
  
  }

//   setTime();
