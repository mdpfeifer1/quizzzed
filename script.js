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
// Grabbing the display for questions
var displayEl = document.getElementById("display");
// Index of Questions
var questionsInd = 0;
// Grabbing list element
var listEl = document.getElementById("list");
// Timer 
var secondsLeft = 120; 
// Quiz scores
var quizScores = document.getElementById("quiz-score"); 

document.getElementById("final-section").setAttribute("style", "display:none");

function checkAnswer(e)
{
    e.preventDefault();
    //alert("inside test");
    var userChoice = this.getAttribute("data-answer");
    console.log(userChoice);

    if(userChoice === questions[questionsInd].answer)
    {
        score = score + 10;
        questionsInd++;
          if(questionsInd === questions.length){
            return;
        } else {
            questionsLeft();
        }
    }
    else{
        secondsLeft = secondsLeft - 10;
        if(secondsLeft <= 0)
        {
            return;
        }

        questionsInd++;
          if(questionsInd === questions.length){
            return;
        } else {
            questionsLeft();
        }
    }
}

function stopQuestions(){
   //hide questions coccc
   //show final-section  with textbox and button to enter initials
   //once user enters initials and click on submit button you will be storing initials and score into localstorage
   //get all the initials and score saved into localstorage and display it on the screen
}

// When I press the start button 
function questionsLeft() {
    listEl.textContent = "";
    document.getElementById("display-question").textContent=questions[questionsInd].question
    for (var i=0; i < questions[questionsInd].choices.length; i++){
        var li = document.createElement("li")
        li.textContent = questions[questionsInd].choices[i];
        var btn = document.createElement("button");
        btn.setAttribute("data-answer", questions[questionsInd].choices[i]);
        btn.onclick = checkAnswer;
        btn.append(li);
        listEl.append(btn)};
        /*listEl.addEventListener("click", function(){
            if (questions.choices===questions.answers){ 
            score ++;
            } else {
            secondsLeft-=10;
          }
          )} */
          
        }
        
    

// countdown 
 //TODO make an if statement that says if choice === !answer deduct 10 from time-left until time =0

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
    timeEl.textContent = "Out of time";
    
}

function start() {
    setTime();
    questionsLeft();
    mainEl.style.display="none"
    displayEl.style.display="block"
}
 startButton.addEventListener("click", start)
 


//TODO make a conditional that says once time-left >= 0 alert you lose


//TODO make a if statement that says once last question is answered take the time left as a score and put it in local storage


//TODO once they get their score let them add 3 letters for initials and add that as a key and use the score as the value


//TODO make a high-score list on page using a getItem from both the key and value and display that.


//TODO create a function that will display the next question and choices once they answer the following question


//TODO create a start button that wont display the questions until pressed
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