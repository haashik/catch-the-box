const box = document.getElementById("box");
const gameArea = document.getElementById("game-area");
const scoreDisplay = document.getElementById("score");
const timeDisplay = document.getElementById("time");
const startBtn = document.getElementById("start-btn");

let score = 0;
let timeLeft = 30;
let timer = null;
let gameRunning = false;

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
  if (!gameRunning) return;
  score++;
  scoreDisplay.textContent = score;
  moveBox();
});

// Timer
//const timer = setInterval(() => {
//  timeLeft--;
//  timeDisplay.textContent = timeLeft;
//
//  if (timeLeft === 0) {
//    clearInterval(timer);
//    box.style.display = "none";
//    alert("Game Over! Your score: " + score);
//  }
//}, 1000);


// Start game
// moveBox();

function endGame(){
  clearInterval(timer);
  gameRunning = false;
  box.style.display = "none";
  startBtn.style.display = "inline-block";
  alert("Game over! Your score: " + score);
}

function startGame() {
    if (gameRunning) return;
    gameRunning = true;
    score = 0;
    timeLeft = 30;
    scoreDisplay.textContent = score;
    timeDisplay.textContent = timeLeft;
    box.style.display = "block";
    startBtn.style.display = "none";
    moveBox();
    timer = setInterval(() => {
      timeLeft --;
      timeDisplay.textContent = timeLeft;

      if (timeLeft === 0){
        endGame();
      }
    }, 1000);
}



startBtn.addEventListener("click",startGame);