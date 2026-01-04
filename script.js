const box = document.getElementById("box");
const gameArea = document.getElementById("game-area");
const scoreDisplay = document.getElementById("score");
const timeDisplay = document.getElementById("time");


let score = 0;
let timeLeft = 30;

// Move box randomly
function moveBox() {
  const maxX = gameArea.clientWidth - box.clientWidth;
  const maxY = gameArea.clientHeight - box.clientHeight;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  box.style.left = randomX + "px";
  box.style.top = randomY + "px";
}

// Click event
box.addEventListener("click", () => {
  score++;
  scoreDisplay.textContent = score;
  moveBox();
});

// Timer
const timer = setInterval(() => {
  timeLeft--;
  timeDisplay.textContent = timeLeft;

  if (timeLeft === 0) {
    clearInterval(timer);
    box.style.display = "none";
    alert("Game Over! Your score: " + score);
  }
}, 1000);


// Start game
moveBox();