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

var secondsLeft = 61;

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

var questions = [
  { 
  'question': 'What color are apples?',
  'answers': ['Red','Blue','Purple','White'],
  'correctAnswer': 0
}, {
  'question': 'How long is a mile?',
  'answers': ['450 ft','5280 ft','2580 ft','4500 ft'],
  'correctAnswer': 1
}, {
  'question': 'What is the name of the football team based in Seattle?',
  'answers': ['Mariners','Cougars','Seahawks','Totems'],
  'correctAnswer': 2
}, {
  'question': 'How many letters is the word Mississippi?',
  'answers': ['11','10','12','9'],
  'correctAnswer': 2
}, {
  'question': 'Who was the 2nd President of the United States?',
  'answers': ['Thomas Jefferson','Abraham Lincoln','Andrew Jackson','John Adams'],
  'correctAnswer': 3
}
];