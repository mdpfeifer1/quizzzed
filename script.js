// Created an Object of Questions 
var questions = [
    {
       question: "How many key changes are in giant steps?", 
       choices: ["1","2","3","4"],
       answer: "3"
    },
    {
        question: "Which is not a mode?", 
        choices: ["Ionian","Dorian","Locrian","Agrenian?"],
        answer: "Agrenian"
     },
     {
        question: "How many sharps and flats are in the major scale?", 
        choices: ["0","2","4","1"],
        answer: "0"
     },
     {
        question: "What musical composer played a bicycle on TV?", 
        choices: ["Frank Zappa","Paul McCartney","Cher","Beyonce"],
        answer: "Frank Zappa"
     },
     {
        question: "If a guitar is tuned a full step down, what is the 6th string tuned to?", 
        choices: ["A#","Bb","Eb","D"],
        answer: "D"
     },
]
// Targets start button in html
var startButton = document.querySelector(".start");
// User Score
var score = 0; 
// Grabbing a class of time declared in HTML 
var timeEl = document.querySelector(".time");
// Grabbing a section of main declared in the HTML Header 
var mainEl = document.getElementById("main");
var displayEl = document.getElementById("display");
var questionsInd = 1
var listEl = document.getElementById("list");

// When I press the start button 
function questionsLeft() {
    document.getElementById("display-question").textContent=questions[questionsInd].question
    for (var i=0; i < questions[questionsInd].choices.length; i++){
        var li = document.createElement("li")
        li.textContent = questions[questionsInd].choices[i]
        listEl.append(li)
        console.log(questions[questionsInd].choices[i]);
    }
    }
 
// countdown 
var secondsLeft = 120; 

function setTime(event) {
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

function start() {
    setTime();
    questionsLeft();
    mainEl.style.display="none"
    displayEl.style.display="block"
}
 startButton.addEventListener("click", start)

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