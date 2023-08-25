const questions = [
    {
        question: "Which built-in method sorts the elements of an array?",
        options: ["Sotered()", "sort()", "order()", "changeOrder(order)"],
        correctAnswer: "sort()",
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        options: ["<Scripting>", "<script>", "<link>", "<style>"],
        correctAnswer: "<script>",
    },
    {
        question: "Which of the following function of Array object removes the last element from an array and returns that element?",
        options: ["pop()", "push()", "join()", "Map()"],
        correctAnswer: "pop()",
    },
    {
        question: "Which of the following keywords is used to define a variable in Javascript?",
        options: ["let", "var", "const", "All of the above"],
        correctAnswer: "All of thr above",
    },
    {
        question: "What keyword is used to check whether a given property is valid or not?",
        options: ["in", "exists", "lies", "ispresent"],
        correctAnswer: "in",
    },
];

let currentQuestionIndex = 0;
let score = 0;
let timer;

const startButton = document.getElementById("start-button");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const timerElement = document.getElementById("timer");
const scoreElement = document.getElementById("score");

function startQuiz() {
    startButton.style.display = "none";
    loadQuestion();
    timer = setInterval(updateTimer, 1000);
}

function loadQuestion() {
    if (currentQuestionIndex < questions.length) {
        const currentQuestion = questions[currentQuestionIndex];
        questionText.textContent = currentQuestion.question;
        optionsContainer.innerHTML = "";
        currentQuestion.options.forEach((option) => {
            const button = document.createElement("button");
            button.textContent = option;
            button.addEventListener("click", checkAnswer);
            optionsContainer.appendChild(button);
        });
    } else {
        finishQuiz();
    }
}

function checkAnswer(event) {
    const selectedOption = event.target.textContent;
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.correctAnswer) {
        score++;
    }
    currentQuestionIndex++;
    loadQuestion();
}

function updateTimer() {
    const timerValue = parseInt(timerElement.textContent);
    if (timerValue > 0) {
        timerElement.textContent = timerValue - 1;
    } else {
        clearInterval(timer);
        finishQuiz();
    }
}

function finishQuiz() {
    questionText.textContent = "Quiz Finished!";
    optionsContainer.innerHTML = "";
    scoreElement.textContent = `Score: ${score} out of ${questions.length}`;
}

startButton.addEventListener("click", startQuiz);