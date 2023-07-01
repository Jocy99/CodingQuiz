const question = document.getElementById('question');
const choiceBtns = document.querySelectorAll(".choice-container");
var timeLeft = 100;
// curly braces means programmatic instructions
var score = 0;
let questionCounter = 0;
let availableQuestions = [];
var timeInterval;
var timer = document.getElementById("timer");
var timeLeft = timer.textContent;
var startTimer = document.getElementById("startQuiz");
// here we will hide the quiz results id element until user completes quiz we will reveal this container
var hideResults = document.getElementById("quizResultContainer");

function tempHideResults() {
    hideResults.style.display.none;
    console.log("HEY THERE:)")

};

// this function starts the quiz timer once begun
// TO DO: Add the function that will subtract ten seconds each time the answer is incorrect
function countdownTimer() {
    timeInterval = setInterval(function () {
        if (timeLeft) {
            timeLeft--;
            timer.textContent = timeLeft;
        } else {
            clearInterval(timeInterval)
        }
    }, 1000);
};

// array is filled with objects that will define the questions, choices, and answers
let questionArray = [
    {
        question: 'Inside which HTML element do we put the JavaScript?',
        choice1: "A.  <script>",
        choice2: "B.  <javascript> ",
        choice3: "C.  <js>",
        choice4: "D.  <scripting>",
        answer: "A.  <script>"
    },
    {
        question: 'What is the correct syntax for referring to an external scirpt called script.js?',
        choice1: "A.  <script href='script.js'>",
        choice2: "B.  <script name='script.js'>",
        choice3: "C.  <script src='script.js'>",
        choice4: "D.  <script file='script.js'>",
        answer: "A.  <script href='script.js'>"
    },
    {
        question: 'The condition in an if / else statement is enclosed within ______.',
        choice1: 'A.  quotes',
        choice2: 'B.  parenthesis',
        choice3: 'C.  square brackets',
        choice4: 'D.  curly brackets',
        answer: 'D.  curly brackets'
    },
    {
        question: 'Arrays in Javascript can be used to store _____.',
        choice1: 'A.  Numbers',
        choice2: 'B.  Other arrays',
        choice3: 'C.  Booleans',
        choice4: 'D.  All of the above',
        answer: 'D.  All of the above'
    },
    {
        question: 'What data type only has the 2 values of true or false?',
        choice1: 'A.  Boolean',
        choice2: 'B.  String',
        choice3: 'C.  Number',
        choice4: 'D.  Integar',
        answer: 'A.  Boolean'

    }
];

// this function determines which question to prompt and when to complete the quiz
function checkingQuestion(e) {
    const currQuestion = questionArray[questionCounter];
    console.log(e.target.value)
    // alert(e.target.value === currQuestion.answer)
    if (e.target.value !== currQuestion.answer) {
        timeLeft -= 10
    }
    questionCounter++
    populateQuestion()
    console.log("hi!")
};
// Here we give all button choices a click event listener to loop on all choices
for (var i = 0; i< choiceBtns.length; i++) {
    choiceBtns[i].addEventListener('click', checkingQuestion);
    console.log("added event listner")
}
function populateQuestion() {
    const currQuestion = questionArray[questionCounter];
    document.getElementById('question').textContent = "Question: " + currQuestion.question,
    document.getElementById('choice1').textContent = currQuestion.choice1
    document.getElementById('choice2').textContent = currQuestion.choice2
    document.getElementById('choice3').textContent = currQuestion.choice3
    document.getElementById('choice4').textContent = currQuestion.choice4
};
// call our functions to populate quiz and start timer 
// WHY IS tempHideResults function not owrking?
tempHideResults(); 
populateQuestion();
countdownTimer();
// from here we need to add a <p> to the user that notifies if the user's choice was correct or incorrect
