var answersContainer = document.querySelector('#answers')
var quizContainer = document.querySelector('#quiz-container')
var questions = [
    {
        num: 1,
        question: 'What is the meaning of life?',
        answers: ['ans 1', 'ans 2', 'ans 3', 'ans 4',

        ],

        correct: 'ans 2',
    },
    // reapeat above 5 times
    {
        num: 2,

    }
]

var currentQuestionIndex = 0

function startQuiz(event) {
    console.log('starting quiz...', event)
    if (event.target) {
        console.log(event.target)
        showQuestions()
    }
}

function showQuestions() {

    answersContainer.setAttribute('hidden', false)

    var currentQuestion = questions[currentQuestionIndex]
    console.log('current question', currentQuestion)
    //add code 
}

function showResults() {
    console.log('showing results');
    

    //add code

}

// show questions, add click feature, display results

showQuestions(questions, quizContainer);

submitButton.onclick = function () {

    showResults(questions, quizContainer, resultsContainer);
}