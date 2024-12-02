// Questions Array
const questions = [
  {
    question: "How many key changes are in giant steps?",
    choices: ["1", "2", "3", "4"],
    answer: "3",
  },
  {
    question: "Which is not a mode?",
    choices: ["Ionian", "Dorian", "Locrian", "Agrenian"],
    answer: "Agrenian",
  },
  {
    question: "How many sharps and flats are in the major scale?",
    choices: ["0", "2", "4", "1"],
    answer: "0",
  },
  {
    question: "What musical composer played a bicycle on TV?",
    choices: ["Frank Zappa", "Paul McCartney", "Cher", "Beyonce"],
    answer: "Frank Zappa",
  },
  {
    question:
      "If a guitar is tuned a full step down, what is the 6th string tuned to?",
    choices: ["A#", "Bb", "Eb", "D"],
    answer: "D",
  },
];

// Variables
let score = 0;
let questionsInd = 0;
let secondsLeft = 120;
let timer;

// Selectors
const startButton = document.querySelector(".start");
const timeEl = document.querySelector(".time");
const mainEl = document.getElementById("main");
const displayEl = document.getElementById("display");
const listEl = document.getElementById("list");
const displayQuestionEl = document.getElementById("display-question");
const finalSectionEl = document.getElementById("final-section");
const quizScoreEl = document.getElementById("quiz-score");
const initialsInput = document.getElementById("initials");
const submitButton = document.getElementById("initial-submit");
const highScoreEl = document.getElementById("high-score");
const resetButton = document.getElementById("reset-button");

// Start Quiz
function start() {
  startButton.disabled = true;
  timeEl.style.display = "block";
  setTime();
  showQuestion();
  mainEl.style.display = "none";
  displayEl.style.display = "block";
}

// Timer Function
function setTime() {
  timer = setInterval(() => {
    secondsLeft--;
    timeEl.textContent = `${secondsLeft} Seconds Remaining`;

    if (secondsLeft <= 0) {
      clearInterval(timer);
      endQuiz();
    }
  }, 1000);
}

// Display Questions
function showQuestion() {
  if (questionsInd >= questions.length) {
    endQuiz();
    return;
  }

  const currentQuestion = questions[questionsInd];
  displayQuestionEl.textContent = currentQuestion.question;

  listEl.innerHTML = "";
  currentQuestion.choices.forEach((choice) => {
    const button = document.createElement("button");
    button.textContent = choice;
    button.setAttribute("data-answer", choice);
    button.onclick = checkAnswer;
    listEl.appendChild(button);
  });
}

// Check Answer
function checkAnswer(event) {
  const userChoice = event.target.getAttribute("data-answer");

  if (userChoice === questions[questionsInd].answer) {
    score += 10;
  } else {
    secondsLeft -= 10;
  }

  questionsInd++;
  showQuestion();
}

// End Quiz
function endQuiz() {
  clearInterval(timer);
  displayEl.style.display = "none";
  finalSectionEl.style.display = "block";
  quizScoreEl.textContent = score;
}

// Submit High Score
submitButton.addEventListener("click", () => {
  const initials = initialsInput.value.trim();

  if (initials.length !== 3) {
    alert("Please enter exactly 3 characters for your initials.");
    return;
  }

  const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
  highScores.push({ initials, score });
  highScores.sort((a, b) => b.score - a.score);
  localStorage.setItem("highScores", JSON.stringify(highScores));

  displayHighScores();
});

// Display High Scores
function displayHighScores() {
  highScoreEl.innerHTML = "";
  const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

  highScores.forEach((scoreEntry) => {
    const li = document.createElement("li");
    li.textContent = `${scoreEntry.initials}: ${scoreEntry.score}`;
    highScoreEl.appendChild(li);
  });
}

// Start Button Listener
startButton.addEventListener("click", start);


resetButton.addEventListener("click", () => {
  resetQuiz();
});

// Reset Quiz Function
function resetQuiz() {
  // Reset variables
  score = 0;
  questionsInd = 0;
  secondsLeft = 120;

  // Reset UI
  timeEl.textContent = `${secondsLeft} Seconds Remaining`;
  quizScoreEl.textContent = "0";
  initialsInput.value = "";
  listEl.innerHTML = ""; // Clear question list if any
  finalSectionEl.style.display = "none";
  mainEl.style.display = "block";
  startButton.disabled = false;

  // Reset high scores display if needed
  highScoreEl.innerHTML = "";
}

// Show Reset Button at End
function endQuiz() {
    clearInterval(timer);
    displayEl.style.display = "none";
    finalSectionEl.style.display = "block";
    quizScoreEl.textContent = score;
    resetButton.style.display = "block"; // Show Reset Button
}

// Add Event Listener for Reset Button
resetButton.addEventListener("click", resetQuiz);

//TODO make a conditional that says once time-left >= 0 alert you lose

//TODO make a if statement that says once last question is answered take the time left as a score and put it in local storage

//TODO once they get their score let them add 3 letters for initials and add that as a key and use the score as the value

//TODO make a high-score list on page using a getItem from both the key and value and display that.

//TODO create a function that will display the next question and choices once they answer the following question

//TODO create a start button that wont display the questions until pressed
