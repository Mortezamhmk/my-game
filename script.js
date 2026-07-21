// عدد شانسی
let secrtnumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// ================= Functions =================

// نمایش پیام
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

// تغییر امتیاز
const displayScore = function (score) {
  document.querySelector(".score").textContent = score;
};

// نمایش عدد
const displayNumber = function (number) {
  document.querySelector(".number").textContent = number;
};

// تغییر رنگ پس‌زمینه
const changeBackground = function (color) {
  document.querySelector("body").style.backgroundColor = color;
};

// تغییر عرض باکس عدد
const changeNumberWidth = function (width) {
  document.querySelector(".number").style.width = width;
};

// ================= Game =================

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    displayMessage("No Number!");

  } else if (guess === secrtnumber) {

    displayMessage("🎉 Correct!");
    displayNumber(secrtnumber);

    changeBackground("#265e3d");
    changeNumberWidth("30rem");

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

  } else {

    if (score > 1) {

      displayMessage(
        guess > secrtnumber ? "📈 Too High!" : "📉 Too Low!"
      );

      score--;
      displayScore(score);

    } else {

      displayMessage("💥 You Lost!");
      score = 0;
      displayScore(score);

    }

  }

});

// ================= Again Button =================

document.querySelector(".again").addEventListener("click", function () {

  score = 20;
  secrtnumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage("Start guessing...");
  displayScore(score);
  displayNumber("?");

  document.querySelector(".guess").value = "";

  changeBackground("#222");
  changeNumberWidth("15rem");

});