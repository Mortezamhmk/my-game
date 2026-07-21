// عدد شانسی
let secrtnumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// ==================== Functions ====================

// نمایش پیام
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
const displayaylar = function (aylar) {
  document.querySelector(".aylar").textContent = aylar;
}

// نمایش امتیاز
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

// نمایش بهترین امتیاز
const displayHighscore = function (highscore) {
  document.querySelector(".highscore").textContent = highscore;
};

// ==================== Game ====================

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    displayMessage("⛔ عددی وارد نکردی!");

  } else if (guess === secrtnumber) {

    displayMessage("🎉 آفرین! درست حدس زدی.");
    displayaylar('کیرم تو مغز خودم وایلار')
    displayNumber(secrtnumber);

    changeBackground("#265e3d");
    changeNumberWidth("30rem");

    if (score > highscore) {
      highscore = score;
      displayHighscore(highscore);
    }

  } else {

    if (score > 1) {

      displayMessage(
        guess > secrtnumber
          ? "📈 عدد خیلی بزرگه!"
          : "📉 عدد خیلی کوچیکه!"
      );

      score--;
      displayScore(score);

    } else {

      displayMessage("💥 باختی!");
      score = 0;
      displayScore(score);

    }
  }
});

// ==================== Again ====================

document.querySelector(".again").addEventListener("click", function () {

  score = 20;
  secrtnumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage("🎯 شروع به حدس زدن کن...");
  displayScore(score);
  displayNumber("?");

  document.querySelector(".guess").value = "";

  changeBackground("#222");
  changeNumberWidth("15rem");

});
