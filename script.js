// Created an Object of Questions 
var questions = [
    {
       questions1: "How many key changes are in giant steps?", 
       choices: ["1","2","3","4"],
       answer: "3"
    },
    {
        question2: "Which is not a mode?", 
        choices: ["Ionian","Dorian","Locrian","Agrenian?"],
        answer: "Agrenian"
     },
     {
        question3: "How many sharps and flats are in the major scale?", 
        choices: ["0","2","4","1"],
        answer: "0"
     },
     {
        question4: "What musical composer played a bicycle on TV?", 
        choices: ["Frank Zappa","Paul McCartney","Cher","Beyonce"],
        answer: "Frank Zappa"
     },
     {
        question5: "If a guitar is tuned a full step down, what is the 6th string tuned to?", 
        choices: ["A#","Bb","Eb","D"],
        answer: "D"
     },
]
var startButton = document.querySelector(".start");


// User Score
var score = 0; 



for (var i=0; i < questions.length; i++){
    index = index.legnth + 1; 
    if (index < 0) {
        index = questions.length - 1; 
    } else if (index > questions.length - 1) {
        index = 0;
    }
}

   
// Grabbing a class of time declared in HTML 
var timeEl = document.querySelector(".time");

// Grabbing a section of main declared in the HTML Header 
var mainEl = document.getElementById("main");

// countdown 
var secondsLeft = 120; 

function setTime() {
    var timerInterval = setInterval(function (){
        secondsLeft--; 
        timeEl.textContent = secondsLeft + " Seconds Remaining"; 

        if(secondsLeft === 0) { 
            clearInterval(timerInterval);
            sendMessage();
        }
    }, 1000);
}
function sendMessage()  {
    timeEl.textContent = "";
    
}
setTime();


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

// THEN I can save my initials and my score