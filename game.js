const question = document.getElementById('question')
const choice = document.getElementById
var quizTimeLeft = 100;

let currentQuestion = {};
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
 

// Here the array is filled with objects that will define the questions, choices, and answers
let questionArray = [
    {
        question: 'Inside which HTML element do we put the JavaScript?',
        choice1: 'script',
        choice2: 'javascript',
        choice3: 'js',
        choice4: 'scripting',
        answer: "1"
    },
    {
        question: 'What is the correct syntax for referring to an external scirpt called script.js?',
        choice1: "script href='script.js'",
        choice2: "script name='script.js'",
        choice3: "script src='script.js'",
        choice4: "script file='script.js'",
        answer: "1"
    },
    {
        question: 'The condition in an if / else statement is enclosed within ____.',
        choice1: 'quotes',
        choice2: 'parenthesis',
        choice3: 'square brackets',
        choice4: 'curly brackets',
        answer: "4"
    },
    {
        question: 'Arrays in Javascript can be used to store ____.',
        choice1: 'numbers',
        choice2: 'other arrays',
        choice3: 'booleans',
        choice4: 'all of the above',
        answer: "4"
    },
    {
        question: 'What data type only has the 2 values of true or false?',
        choice1: 'Boolean',
        choice2: 'String',
        choice3: 'Number',
        choice4: 'Integar',
        answer: "1"

    }
];

// this function determines which question to prompt and when to complete the quiz
function checkingQuestion(e) {
    const currQuestion = questionArray[questionCounter];
    alert(e.target.value === currQuestion.answer)
    if (e.target.value === currQuestion.answer){
        questionCounter++
        populateQuestion() 
    }
}


document.getElementById("choice1").addEventListener('click', checkingQuestion);
function populateQuestion () {
    const currQuestion = questionArray[questionCounter];
    document.getElementById('question').innerHTML = "Question: " + currQuestion.question,
    document.getElementById('choice1').innerHTML = currQuestion.choice1
    document.getElementById('choice2').innerHTML = currQuestion.choice2
    document.getElementById('choice3').innerHTML = currQuestion.choice3
    document.getElementById('choice4').innerHTML = currQuestion.choice4

} 
populateQuestion()
