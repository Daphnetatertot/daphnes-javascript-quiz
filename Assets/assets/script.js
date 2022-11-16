var answersContainer = document.querySelector('#answers')
var quizContainer = document.querySelector('#quiz-container')
var questions = [
    {
        num: 1,
        question: 'What is JavaScripts main use?',
        answers: ['styling', 'structure', 'function', 'all of the above',

        ],

        correct: 'ans 2',
    },
    // reapeat above 5 times
    {
        num: 2,
        question: 'What is the correct syntax for setting a variable?'
        answers: ['var is', 'var =', 'function()', 'var', 

    ],


    }

    correct: 'var',

    {
        num: 3,
        question: 'add question here'
        answers: ['ans 1', 'ans 2', 'ans 3', 'ans 4',
    
    ],
    correct: 'ans 4',
        
    }

    {
        num: 4,
        question: 'question 5',
        answers: ['ans 1', 'ans 2', 'ans 3', 'ans 4',
    
    ],

    correct: 'ans 1',

    }

    {
        num: 5,
        question: 'question 5',
        answers: ['ans 1', 'ans 2', 'ans 3', 'ans 4',
    
    ],

    correct: 'ans 3',

    }

    {
        num: 6,
        question: 'question 6',
        answeres: ['ans 1', 'ans 2', 'ans 3', 'ans 4',
    
    ],

correct: 'ans 4'

    }

    {

        num: 7,
        question: 'question 7',
        answers: ['ans 1', 'ans 2', 'ans 3', 'ans 4',
    
    ],

    correct: 'ans 4'
    }

    {
        num: 8,
        question: 'question 8',
        answers: ['ans 1', 'ans 2', 'ans 3', 'ans 4',
    
    ],

correct: 'ans 2',

    }

    {
        num: 9,
        question: 'question 9',
        answers: ['ans 1', 'ans 2', 'ans 3', 'ans 4',
    
    ],

    correct : 'ans 2'
    }

    {
        num: 10,
        question: 'question 10',
        answers: ['ans 1', 'ans 2', 'ans 3', 'ans 4',
    
    ],

    correct: 'ans 1'
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