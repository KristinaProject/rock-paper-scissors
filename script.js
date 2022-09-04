let value = ["rock", "paper", "scissors"];
let playerResult = 0;
let compResult = 0;
let playerChoice = "";
const message = document.querySelector("[data-game]");
message.innerHTML = "";
const reset = document.querySelector("[data-reset]");

reset.addEventListener("click", resetGame());

function resetGame() {
  message.innerHTML = null;
  compResult = 0;
  playerResult = 0;
}

function getComputerChoice(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  let random = Math.floor(Math.random() * (max - min) + min);
  return value[random];
}

function getPlayerChoice() {
  moreRounds(5);
}

function playRound(playerSelection, computerSelection) {
  const plresult = document.querySelector("[data-plresult]");
  const pcresult = document.querySelector("[data-pcresult]");

  if (playerSelection == computerSelection) {
    return (
      (message.innerHTML = "Tie!"),
      (plresult.innerHTML = playerResult),
      (pcresult.innerHTML = compResult)
    );
  } else if (playerSelection === value[1] && computerSelection == value[3]) {
    playerResult++;
    return (
      (message.innerHTML = "You are winner!"),
      (plresult.innerHTML = playerResult),
      (pcresult.innerHTML = compResult)
    );
  } else if (playerSelection == value[2] && computerSelection == value[1]) {
    playerResult++;
    return (
      (message.innerHTML = "You are winner!"),
      (plresult.innerHTML = playerResult),
      (pcresult.innerHTML = compResult)
    );
  } else if (playerSelection == value[3] && computerSelection == value[2]) {
    playerResult++;
    return (
      (message.innerHTML = "You are winner!"),
      (plresult.innerHTML = playerResult),
      (pcresult.innerHTML = compResult)
    );
  } else {
    compResult++;
    return (
      (message.innerHTML = `You are looser! Computer choice ${computerSelection} beats yours ${playerSelection}!`),
      (plresult.innerHTML = playerResult),
      (pcresult.innerHTML = compResult)
    );
  }
}

const rock = document.querySelector("[data-rock]");
const paper = document.querySelector("[data-paper]");
const scissors = document.querySelector("[data-scissors]");

rock.addEventListener("click", () => {
  playerChoice = value[0];
});

paper.addEventListener("click", () => {
  playerChoice = value[1];
});

scissors.addEventListener("click", () => {
  playerChoice = value[2];
});

function oneRound() {
  const comp = getComputerChoice(0, value.length);
  playRound(playerChoice, comp);
  console.log(playerResult, compResult);
}

function moreRounds(num) {
  const winner = document.querySelector("[data-winner]");
  winner.innerHTML = '';

  for (let i = 0; i <= num; i++) {
    oneRound();

    if (playerResult > compResult) {
      winner.innerHTML = "You beat computer!";
    } else {
      winner.innerHTML = "Computer beat you!";
    }
  }
  resetGame();
}
