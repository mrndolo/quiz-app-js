const questions = [
    {
        question: "Which is the largest animal in the world?",
        answers: [
            {text: "Shark", correct: false},
            {text: "Blue whale", correct: true},
            {text: "Elephant", correct: false},
            {text: "Giraffe", correct: false},
        ]
    },
    {
        question: "Which is the smallest country in the world?",
        answers: [
            {text: "Vatican City", correct: true},
            {text: "Bhutan", correct: false},
            {text: "Nepal", correct: false},
            {text: "Shri Lanka", correct: false},
        ]
    },
    {
        question: "Which is the largest desert in the world?",
        answers: [
            {text: "Kalahari", correct: false},
            {text: "Gobi", correct: false},
            {text: "Sahara", correct: false},
            {text: "Antartica", correct: true},
        ]
    },
    {
        question: "Which is the smallest continent in the world?",
        answers: [
            {text: "Asia", correct: false},
            {text: "Australia", correct: true},
            {text: "Arctic", correct: false},
            {text: "Africa", correct: false},
        ]
    },
    {
        question: "What is the largest river in the world by water volume?",
        answers: [
          { text: "Nile", correct: false },
          { text: "Amazon", correct: true },
          { text: "Mississippi", correct: false },
          { text: "Yangtze", correct: false },
        ]
    },
    {
        question: "What is the largest ocean in the world?",
        answers: [
          { text: "Atlantic", correct: false },
          { text: "Indian", correct: false },
          { text: "Arctic", correct: false },
          { text: "Pacific", correct: true },
        ]
    },
    {
        question: "What is the smallest bone in the human body?",
        answers: [
          { text: "Stapes (in the ear)", correct: true },
          { text: "Phalanges (in fingers)", correct: false },
          { text: "Coccyx (tailbone)", correct: false },
          { text: "Hyoid (in throat)", correct: false },
        ]
    },
    {
        question: "Which of these is NOT a primary color?",
        answers: [
          { text: "Red", correct: false },
          { text: "Blue", correct: false },
          { text: "Yellow", correct: false },
          { text: "Green", correct: true },
        ]
    },
    {
        question: "Which of these animals cannot fly?",
        answers: [
          { text: "Bat", correct: false },
          { text: "Penguin", correct: true },
          { text: "Eagle", correct: false },
          { text: "Butterfly", correct: false },
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    //reset previous question and answer
    resetState();
    // code to display questions
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    // code to display answers
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none"
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
    }else{
        selectedBtn.classList.add("incorrect");
    }
    // code to highlight correct answer after the user has chosen their answer
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct")
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

startQuiz();