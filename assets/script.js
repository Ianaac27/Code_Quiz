// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question -------CHECK!!!
// WHEN I answer a question
// THEN I am presented with another question -------CHECK!!!
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock --------- CHECK!!!
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over ---------------------- CHECK!!!
// WHEN the game is over
// THEN I can save my initials and score ------------------NOT YET "Add a HTML and JS page for high scores" "Research local storage for highscores"
//-----------------------------------------------------------

var viewHighScore = document.getElementById("view-highscore");
// var goHome = document.getElementById("go-home");
var timer = document.getElementById("time");
var mainHeader = document.querySelector(".main-header");
var mainParagraph = document.querySelector(".main-paragraph");
var startButton = document.getElementById("start");
var answerButton1 = document.querySelector(".answer-button1")
var answerButton2 = document.querySelector(".answer-button2")
var answerButton3 = document.querySelector(".answer-button3")
var answerButton4 = document.querySelector(".answer-button4")
var previousAnswer = document.getElementById("previous");
var tryAgain = document.getElementById("try-again");
var highScores = document.getElementById("high-scores");
var initials = document.getElementById("initials");
var initialsButton = document.getElementById("initials-button");

var correctAnswer= "Correct!";
var wrongAnswer= "Wrong!";

var timerInterval;
var secondsLeft = 61;

// Starting the game
startButton.addEventListener("click", function(event) {
    
    timerInterval = setInterval(function() {
    secondsLeft--;
    timer.textContent = "Time: " + secondsLeft;

// Game Over when time runs out
     if(secondsLeft <= 0) {
       clearInterval(timerInterval);
       sendMessage();
       secondsLeft= - 50;

       console.log(score);
     }
   }, 1000); 

    startButton.remove()
    navigateFirstQuestion()
});

// Expired time display
function sendMessage() {
    mainHeader.textContent = "Time Expired";
    mainParagraph.textContent = "Yikes!";
    answerButton1.textContent = "Better";
    answerButton2.textContent = "Luck";
    answerButton3.textContent = "Next";
    answerButton4.textContent = "Time";
    tryAgain.textContent = "Click a button above if you want to try again!";
 
// Buttons can reload the page for a restart    
    answerButton1.addEventListener("click", function(event) {
      location.reload();
    }),
    answerButton2.addEventListener("click", function(event) {
      location.reload();
    }),
    answerButton3.addEventListener("click", function(event) {
      location.reload();
    }),
    answerButton4.addEventListener("click", function(event) {
      location.reload();
    })
  }

// Quiz questions  
var questions = [
  { 
  'question': 'What color are apples?',
  'answers': ['Red','Blue','Purple','White'],
  // correct answer: 0
}, {
  'question': 'How long is a mile?',
  'answers': ['450 ft','5280 ft','2580 ft','4500 ft'],
  // correct answer: 1
}, {
  'question': 'What is the name of the football team based in Seattle?',
  'answers': ['Mariners','Cougars','Seahawks','Totems'],
  // correct answer: 2
}, {
  'question': 'How many letters is the word Mississippi?',
  'answers': ['11','10','12','9'],
  // correct answer: 2
}, {
  'question': 'Who was the 2nd President of the United States?',
  'answers': ['Thomas Jefferson','Abraham Lincoln','Andrew Jackson','John Adams'],
  // correct answer: 3
}
];

// First question display
function navigateFirstQuestion() {
    mainParagraph.textContent = questions[0].question;
    answerButton1.textContent = questions[0].answers[0];
    answerButton2.textContent = questions[0].answers[1];
    answerButton3.textContent = questions[0].answers[2];
    answerButton4.textContent = questions[0].answers[3];

    answerButton1.addEventListener("click", function(event) {
      navigateSecondQuestion()   
      previousAnswer.textContent = "Previous Answer: " + correctAnswer;
      secondsLeft += 5;
    }),
    answerButton2.addEventListener("click", function(event) {
      navigateSecondQuestion()   
      previousAnswer.textContent = "Previous Answer: " + wrongAnswer;
      secondsLeft -= 5;
    }),
    answerButton3.addEventListener("click", function(event) {
      navigateSecondQuestion()   
      previousAnswer.textContent = "Previous Answer: " + wrongAnswer;
      secondsLeft -= 5;
    }),
    answerButton4.addEventListener("click", function(event) {
      navigateSecondQuestion()   
      previousAnswer.textContent = "Previous Answer: " + wrongAnswer;
      secondsLeft -= 5;
    })
  }

  // Second question display
  function navigateSecondQuestion() {
      mainParagraph.textContent = questions[1].question;
      answerButton1.textContent = questions[1].answers[0];
      answerButton2.textContent = questions[1].answers[1];
      answerButton3.textContent = questions[1].answers[2];
      answerButton4.textContent = questions[1].answers[3];
  
      answerButton1.addEventListener("click", function(event) {
        navigateThirdQuestion()   
        previousAnswer.textContent = "Previous Answer: " + wrongAnswer;
        secondsLeft -= 2;
      }),
      answerButton2.addEventListener("click", function(event) {
        navigateThirdQuestion()   
        previousAnswer.textContent = "Previous Answer: " + correctAnswer;
        secondsLeft += 2;
      }),
      answerButton3.addEventListener("click", function(event) {
        navigateThirdQuestion()   
        previousAnswer.textContent = "Previous Answer: " + wrongAnswer;
        secondsLeft -= 2;
      }),
      answerButton4.addEventListener("click", function(event) {
        navigateThirdQuestion()    
        previousAnswer.textContent = "Previous Answer: " + wrongAnswer;
        secondsLeft -= 2;
      })
    }

  // Third question display
    function navigateThirdQuestion() {
      mainParagraph.textContent = questions[2].question;
      answerButton1.textContent = questions[2].answers[0];
      answerButton2.textContent = questions[2].answers[1];
      answerButton3.textContent = questions[2].answers[2];
      answerButton4.textContent = questions[2].answers[3];
  
      answerButton1.addEventListener("click", function(event) {
        navigateFourthQuestion()   
        previousAnswer.textContent = "Previous Answer: " + wrongAnswer;
        secondsLeft - 1;
      }),
      answerButton2.addEventListener("click", function(event) {
        navigateFourthQuestion()   
        previousAnswer.textContent = "Previous Answer: " + wrongAnswer;
        secondsLeft - 1; 
      }),
      answerButton3.addEventListener("click", function(event) {
        navigateFourthQuestion()   
        previousAnswer.textContent = "Previous Answer: " + correctAnswer;
        secondsLeft += 1;
      }),
      answerButton4.addEventListener("click", function(event) {
        navigateFourthQuestion()   
        previousAnswer.textContent = "Previous Answer: " + wrongAnswer;
        secondsLeft - 1;
      })
    }
  
  // Fourth question display
    function navigateFourthQuestion() {
      mainParagraph.textContent = questions[3].question;
      answerButton1.textContent = questions[3].answers[0];
      answerButton2.textContent = questions[3].answers[1];
      answerButton3.textContent = questions[3].answers[2];
      answerButton4.textContent = questions[3].answers[3];
  
      answerButton1.addEventListener("click", function(event) {
        navigateFifthQuestion()   
        previousAnswer.textContent = "Previous Answer: " + wrongAnswer;
        secondsLeft -= 1;
      }),
      answerButton2.addEventListener("click", function(event) {
        navigateFifthQuestion()     
        previousAnswer.textContent = "Previous Answer: " + wrongAnswer;
        secondsLeft -= 1;
      }),
      answerButton3.addEventListener("click", function(event) {
        navigateFifthQuestion()      
        previousAnswer.textContent = "Previous Answer: " + correctAnswer;
        secondsLeft += 1;
      }),
      answerButton4.addEventListener("click", function(event) {
        navigateFifthQuestion()     
        previousAnswer.textContent = "Previous Answer: " + wrongAnswer;
        secondsLeft -= 1;
      })
    }

  // Fifth question display
    function navigateFifthQuestion() {
      mainParagraph.textContent = questions[4].question;
      answerButton1.textContent = questions[4].answers[0];
      answerButton2.textContent = questions[4].answers[1];
      answerButton3.textContent = questions[4].answers[2];
      answerButton4.textContent = questions[4].answers[3];
  
      answerButton1.addEventListener("click", function(event) {
        clearInterval(timerInterval);
        submitScore(); 
        previousAnswer.textContent = "Previous Answer: " + wrongAnswer;
        secondsLeft -= 1;
      }),

      answerButton2.addEventListener("click", function(event) {
        clearInterval(timerInterval);
        submitScore(); 
        previousAnswer.textContent = "Previous Answer: " + wrongAnswer;
        secondsLeft -= 1; 
      }),
      
      answerButton3.addEventListener("click", function(event) { 
        clearInterval(timerInterval);
        submitScore();
        previousAnswer.textContent = "Previous Answer: " + wrongAnswer;
        secondsLeft -= 1;  
      }),
      
      answerButton4.addEventListener("click", function(event) {
        clearInterval(timerInterval);
        submitScore();
        previousAnswer.textContent = "Previous Answer: " + correctAnswer;
        secondsLeft += 1;
      })
    }

  //Submit Score display
    function submitScore() {
      mainHeader.textContent = "Nice Work!";
      mainParagraph.textContent = "Your Score: " + secondsLeft;
      answerButton1.remove()
      answerButton2.remove()
      answerButton3.remove()
      answerButton4.remove()

      highScores.style.display = "block";
    }
      
  //Viewing high-scores from home page
  viewHighScore.addEventListener("click", function(event) {
    window.location.href = "storage.html";

  });

  //Going back to home page
 