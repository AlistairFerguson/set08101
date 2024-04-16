import QuizQuestions from './Questions.js'

var Dscore = 0;
var Ascore = 0;
var Jscore = 0;
var Mscore = 0;
var Sscore = 0;
var Pscore = 0;
var Tscore = 0;
var questionNumber = 0;

const questionElement = document.getElementById("question");
const answer1Element = document.getElementById("answer1");
const answer2Element = document.getElementById("answer2");
const answer3Element = document.getElementById("answer3");
const answer4Element = document.getElementById("answer4");
const answer5Element = document.getElementById("answer5");
const answer6Element = document.getElementById("answer6");
const answer7Element = document.getElementById("answer7");
const submitButton = document.getElementById("submit");

function showQuestion(questionNumber){
    
    const question = QuizQuestions[questionNumber].question
    questionElement.innerText = question
    var button1 = document.createElement("button");
    button1.innerHTML = answer1Element;
    button1.id = "button1";
    var button2 = document.createElement("button");
    button2.innerHTML = answer2Element;
    button2.id = "button2";

    
}