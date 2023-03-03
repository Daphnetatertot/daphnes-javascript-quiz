var answersContainer = document.querySelector("#answers");
var quizContainer = document.querySelector("#quiz-container");
var startButton = document.querySelector("#start");
var correct = document.querySelector('#correct')

var questions = [
  {
    num: 1,
    question: "What is JavaScripts main use?",
    answers: ["styling", "structure", "function", "all of the above"],

    correct: "function",
  },
 
  {
    num: 2,
    question: "What is the correct syntax for setting a variable?",
    answers: ["var is", "var =", "function()", "var"],

    correct: "var",
  },

  {
    num: 3,
    question: "What does a for loop do?",
    answers: [
      "calls a function",
      "runs code multiple times with different values",
      "assigns variables to a function",
      "logs information into the console",
    ],
    correct: "runs code multiple times with different values",
  },

  {
    num: 4,
    question: "What does API stand for?",
    answers: ["aplication programming interface", "all parties included", "a prime interface", "applicable property insights"],

    correct: "application programming interface",
  },

  {
    num: 5,
    question: "What is an API used for?",
    answers: ["functionality", "it implements css designs", "a way to simplify code", "takes one code and transforms it into another"],

    correct: "a way to simplify code",
  },

];

var currentQuestionIndex = questions[Math.floor(Math.random()*questions.length)];

function startQuiz(event)
  
  console.log("starting quiz...");
  //quizContainer.setAttribute("hidden", false);
  var startQuiz = document.getElementById(quizContainer);
  
   if (startQuiz.style.display === 'none') {
  
     startQuiz.style.display = 'block';
   } else {
    startQuiz.style.display 'none';
   
    //showQuestions(questions);
    //unhide div ???
       //console.log(event.target)
      }


function showQuestions() {
  //answersContainer.setAttribute("hidden", false);

  var currentQuestion = questions[currentQuestionIndex];
  console.log("current question", currentQuestion);

  return answersContainer

}

function showResults() {
  console.log("showing results");

  //add code
}


// startButton.onclick = startQuiz;