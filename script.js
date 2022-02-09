"usestrict";

const attackBtn = document.getElementById("attack-btn");
const newGameBtn = document.getElementById("new-game-btn");
// const resetBtn = document.getElementById("reset-btn");
const player1HealthBar = document.getElementById("player-0-health");
const player2HealthBar = document.getElementById("player-1-health");
const player1Score = document.getElementById("player0-score");
const player2Score = document.getElementById("player1-score");

const winner1 = document.querySelector(".winner-1");
const winner2 = document.querySelector(".winner-2");

// console.log(winner1);

let player1Health, player2Health, playerOneScore, playerTwoScore, playing;
playerOneScore = 0;
playerTwoScore = 0;

const init = function () {
  player1Health = 100;
  player2Health = 100;
  playing = true;

  player1HealthBar.textContent = 100;
  player2HealthBar.textContent = 100;

  winner1.classList.add("hidden");
  winner2.classList.add("hidden");

  if (playerOneScore == 3 || playerTwoScore == 3) {
    playerOneScore = 0;
    playerTwoScore = 0;
    player1Score.textContent = 0;
    player2Score.textContent = 0;
  }
};
init();

//NEW GAME
newGameBtn.addEventListener("click", init);

//ATTACK
attackBtn.addEventListener("click", function () {
  if (playing) {
    //1. Generating random attack number
    const player1RandomAttack = Math.trunc(Math.random() * 6);
    const player2RandomAttack = Math.trunc(Math.random() * 6);

    //subtract random attack number from the players health
    player1Health -= player1RandomAttack;
    player2Health -= player2RandomAttack;

    if (player1Health <= 0) {
      //show to the player health
      player1HealthBar.textContent = 0;
    } else if (player2Health <= 0) {
      //show to the player health
      player2HealthBar.textContent = 0;
    } else {
      player1HealthBar.textContent = player1Health;
      player2HealthBar.textContent = player2Health;
    }

    console.log(player1Health, player2Health);

    if (player1Health <= 0) {
      //Add one to the winner player
      playerTwoScore++;
      //show to the Score
      player2Score.textContent = playerTwoScore;
      if (playerTwoScore == 3) {
        winner2.classList.remove("hidden");
      }
      // disable the attack button
      playing = false;
    } else if (player2Health <= 0) {
      playerOneScore++;
      player1Score.textContent = playerOneScore;
      if (playerOneScore == 3) {
        winner1.classList.remove("hidden");
      }
      playing = false;
    }
  }
});
