const question = document.getElementById('question');
const choiceBtns = document.querySelectorAll(".choice-container");
var timeLeft = 100;
// curly braces means programmatic instructions
var userScore = 0;
// question counter defines which question the user is on
var questionCounter = 0;
var availableQuestions = [];
var timeInterval;
var timer = document.getElementById("timer");
var startTimer = document.getElementById("startQuiz");
var results = document.getElementById("resultContainer");
var highscores = JSON.parse(localStorage.getItem('highscore')) || []
var linkHS = document.querySelector('.highscore')

// this function will show you the container of highscores when user selects button
var highscoresButton = document.querySelector('.highscore');

function linkHighscore() {
    document.querySelector('#timer').style = 'display:none';
    document.querySelector('.highscore').style = 'display:none';
    document.querySelector('.quiz-container').style = 'display:none;';
    document.querySelector('.container-highscore').style = 'display:block;';
    console.log('is this working?');
    var highscores = JSON.parse(localStorage.getItem('highscores'))
    for (var i = 0; i < highscores.length; i++) {
        var li = document.createElement('li')
        li.textContent = highscores[i]
        document.querySelector('#scoresList').appendChild(li)
    }
}
highscoresButton.addEventListener('click', linkHighscore);

// this function starts the quiz and timer once begun 
function startQuiz() {
    var beginningContainer = document.getElementById('beginning-container').style = 'display:none';
    document.getElementById('quiz-container').style = "display:block";
    console.log(beginningContainer);
    countdownTimer();
    
};


document.getElementById('start-quiz').addEventListener('click',() => startQuiz())
// function that will subtract ten seconds each time the answer is incorrect
function countdownTimer() {
    timeInterval = setInterval(function () {
        if (timeLeft > 0) {
            timeLeft--;
            timer.textContent = timeLeft;
        }
        else {
            timeLeft = 0
            clearInterval(timeInterval)
            document.querySelector('.quiz-container').style = "display:none";
            document.querySelector('#resultContainer').style = "display:block";
            timer.textContent = timeLeft;
            finishedQuiz();
        };
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
    console.log(e.target.textContent)
    // alert(e.target.value === currQuestion.answer)
    if (e.target.textContent !== currQuestion.answer) {
        timeLeft -= 10
        console.log("Incorrect!")
    }
    questionCounter++
    if (questionCounter >= questionArray.length) {
        document.querySelector('#quiz-container').style = "display:none";
        document.querySelector('#resultContainer').style = "display:block";
        finishedQuiz();
        clearInterval(timeInterval);
    } else {
        populateQuestion();
    }
};
// Here we give all button choices a click event listener to loop on all choices
for (var i = 0; i < choiceBtns.length; i++) {
    choiceBtns[i].addEventListener('click', checkingQuestion);
}
function populateQuestion() {
    const currQuestion = questionArray[questionCounter];
    document.getElementById('question').textContent = currQuestion.question
    document.getElementById('choice1').textContent = currQuestion.choice1
    document.getElementById('choice2').textContent = currQuestion.choice2
    document.getElementById('choice3').textContent = currQuestion.choice3
    document.getElementById('choice4').textContent = currQuestion.choice4
};
// call our functions to populate quiz and start timer 
// hidenResults(); 
populateQuestion();

// once the user clicks last questoins answer it will set off our finished quiz function, hiding the quiz container and adding a hs initial option

function finishedQuiz() {
    console.log(highscores)
    var score = timeLeft;
    document.querySelector("#submitScore").addEventListener('click', function () {
        document.querySelector('#timer').style = 'display:none';
        document.querySelector('.highscore').style = 'display:none';
        var anchor = document.createElement('a');
        var link = document.createTextNode('Home');
        anchor.appendChild(link);
        anchor.href = "index.html";
        document.body.appendChild(anchor);
        anchor.style = 'display:flex; justify-content: center;';
        var initials = document.querySelector("#initials").value;
        highscores.push(initials + '; ' + score)
        localStorage.setItem("highscore", JSON.stringify(highscores))
        for (var i = 0; i < highscores.length; i++) {
            var li = document.createElement('li')
            li.textContent = highscores[i]
            document.querySelector('#scoresList').appendChild(li)
        }
    })
};
