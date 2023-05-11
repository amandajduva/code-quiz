// list of all questions, choices, and answers
let questions = [
    {
        title: 'Commonly used data types DO NOT include:',
        choices: ['strings', 'booleans', 'alerts', 'numbers'],
        answer: 'alerts',
    },
    {
        title: 'The condition in an if / else statement is enclosed within ____.',
        choices: ['quotes', 'curly brackets', 'parentheses', 'square brackets'],
        answer: 'parentheses',
    },
    {
        title: 'Arrays in JavaScript can be used to store ____.',
        choices: [
            'numbers and strings',
            'other arrays',
            'booleans',
            'all of the above',
        ],
        answer: 'all of the above',
    },
    {
        title:
            'String values must be enclosed within ____ when being assigned to variables.',
        choices: ['commas', 'curly brackets', 'quotes', 'parentheses'],
        answer: 'quotes',
    },
    {
        title:
            'A very useful tool used during development and debugging for printing content to the debugger is:',
        choices: ['JavaScript', 'terminal / bash', 'for loops', 'console.log'],
        answer: 'console.log',
    },
];

let currentIndex = 0;
let timeEl = document.querySelector(".timer");
let options = document.querySelector(".answer-options");
let startButton = document.getElementById("start-quiz");
let secondsLeft = 75;
let timerInterval;

function displayQuestions() {
    document.querySelector("#container").innerHTML = "";
    let currentQuestion = questions[currentIndex];
    let questionEl = document.createElement("h1");
    questionEl.textContent = currentQuestion.title;
    let answersEl = document.createElement("div");
    currentQuestion.choices.forEach(function (choice) {
        let btn = document.createElement("button");
        btn.textContent = choice;
        btn.setAttribute("style", "display: flex; flex-direction: column; margin: 8px");
        btn.onclick = checkAnswer;
        answersEl.append(btn);
    })
    document.querySelector("#container").append(questionEl, answersEl);
}

function checkAnswer(event) {
    if (event.target.textContent === questions[currentIndex].answer) {

    } else {
        secondsLeft -= 10;
        if (secondsLeft <= 0) {
            secondsLeft = 0;
            timeEl.textContent = "Timer: " + secondsLeft;
        }
        timeEl.textContent = "Timer: " + secondsLeft;
    }
    currentIndex++;
    if (currentIndex === questions.length) {
        gameOver();
    } else {
        displayQuestions();
    }
}

function startQuiz() {
    let openingPage = document.getElementById("opening-page");
    openingPage.setAttribute("class", "hidden");
    setTime();
    displayQuestions();
}

startButton.addEventListener("click", function (event) {
    event.preventDefault();
    startQuiz();
})

// timer

function setTime() {
    timeEl.addEventListener("click", function () {
        setInterval();
    });

    timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = "Timer: " + secondsLeft;

        if (secondsLeft === 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
        }

    }, 1000);
}
// create gameover function
function gameOver() {
    clearInterval(timerInterval);
    document.querySelector(".game-over").classList.remove("hidden");
    document.querySelector("#container").classList.add("hidden");
    document.querySelector("#score").textContent = secondsLeft;
    document.querySelector("#save").addEventListener("click", function () {
        let initials = document.querySelector("input").value;
        let newScore = {
            initals: initials, score: secondsLeft
        }
        let highScores = JSON.parse(localStorage.getItem("scores")) || [];
        highScores.push(newScore);
        localStorage.setItem("scores", JSON.stringify(highScores));
        window.location.href = "highscores.html"
    })
}
