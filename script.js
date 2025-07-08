const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("change", () => {
  document.body.classList.toggle("light");
  document.body.classList.toggle("dark");
});

// Quiz Logic
const categoryBtns = document.querySelectorAll(".category-btn");
const questionBox = document.getElementById("questionBox");
const questionText = document.getElementById("questionText");
const optionsContainer = document.getElementById("optionsContainer");
const nextBtn = document.getElementById("nextBtn");
const resultBox = document.getElementById("resultBox");
const scoreText = document.getElementById("scoreText");
const restartBtn = document.getElementById("restartBtn");

let currentQuestions = [];
let currentIndex = 0;
let score = 0;

categoryBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const category = btn.dataset.category;
    currentQuestions = quizData[category];
    document.getElementById("homeScreen").classList.add("hidden");
    questionBox.classList.remove("hidden");
    currentIndex = 0;
    score = 0;
    showQuestion();
  });
});

function showQuestion() {
  const currentQ = currentQuestions[currentIndex];
  questionText.textContent = currentQ.question;
  optionsContainer.innerHTML = "";
  currentQ.options.forEach(option => {
    const btn = document.createElement("button");
    btn.className = "optionBtn";
    btn.textContent = option;
    btn.onclick = () => checkAnswer(btn, currentQ.answer);
    optionsContainer.appendChild(btn);
  });
  nextBtn.classList.add("hidden");
}

function checkAnswer(btn, correct) {
  const allOptions = document.querySelectorAll(".optionBtn");
  allOptions.forEach(o => o.disabled = true);
  if (btn.textContent === correct) {
    btn.style.backgroundColor = "#00ffab";
    score++;
  } else {
    btn.style.backgroundColor = "#ff4b5c";
  }
  nextBtn.classList.remove("hidden");
}

nextBtn.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex < currentQuestions.length) {
    showQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  questionBox.classList.add("hidden");
  resultBox.classList.add("active");
  scoreText.textContent = `${score} / ${currentQuestions.length}`;
}

restartBtn.addEventListener("click", () => {
  window.location.reload();
});
