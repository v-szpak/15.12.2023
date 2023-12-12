"use strict";
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
// Рефакторинг повторяющегося кода через функцию
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);
  console.log(guess);
  // Когда нет входных данных
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔️ Не число!';
    displayMessage("⛔️ Не число!");
    // Когда игрок выигрывает
  } else if (guess === secretNumber) {
    displayMessage("🎉 Ты угадал!");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    // Добавление лучшего результата
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
    // Когда предположение неверно
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber ? "📈 Слишком большое" : "📉 Слишком маленькое"
      );
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("💥 Ты проиграл игру");
      document.querySelector(".score").textContent = 0;
    }
  }
});
// При клике "Заново", возвращает все данные на исходную позицию
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector("body").style.backgroundColor = "#333";
});
