const rock = document.querySelector("[data-rock]");
const paper = document.querySelector("[data-paper]");
const scissors = document.querySelector("[data-scissors]");
const message = document.querySelector("[data-game]");
const reset = document.querySelector("[data-reset]");
const plresult = document.querySelector("[data-plresult]");
const pcresult = document.querySelector("[data-pcresult]");
const spanWrap = document.querySelector(".span-wrap");
const winner = document.querySelector("[data-winner]");

let value = ["rock", "paper", "scissors"];
let playerResult = 0;
let compResult = 0;
let playerChoice = "";
message.innerHTML = "";
plresult.innerHTML = playerResult;
pcresult.innerHTML = compResult;

reset.addEventListener("click", () => resetGame());

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    getNewResult();
    return (message.innerHTML = "Tie!");
  } else if (playerSelection === value[1] && computerSelection == value[3]) {
    playerResult++;
    getNewResult();
    return (message.innerHTML = `You are winner! Your choice ${playerSelection} beats computers ${computerSelection}`);
  } else if (playerSelection == value[2] && computerSelection == value[1]) {
    playerResult++;
    getNewResult();
    return (message.innerHTML = `You are winner! Your choice ${playerSelection} beats computers ${computerSelection}`);
  } else if (playerSelection == value[3] && computerSelection == value[2]) {
    playerResult++;
    getNewResult();
    return (message.innerHTML = `You are winner! Your choice ${playerSelection} beats computers ${computerSelection}`);
  } else {
    compResult++;
    getNewResult();
    return (message.innerHTML = `You are looser! Computer choice ${computerSelection} beats yours ${playerSelection}!`);
  }
}

function main() {
  rock.addEventListener("click", () => {
    oneRound("rock");
  });

  paper.addEventListener("click", () => {
    oneRound("paper");
  });

  scissors.addEventListener("click", () => {
    oneRound("scissors");
  });
}

function oneRound(user) {
  spanWrap.classList.remove("none");
  const comp = getComputerChoice();
  playRound(user, comp);
  if (playerResult === 5 || compResult === 5) {
    setTimeout(() => {
      getWinner();
    }, 1000) 
  }
}

function getNewResult() {
  plresult.innerHTML = playerResult;
  pcresult.innerHTML = compResult;
}

function getComputerChoice() {
  let random = Math.floor(Math.random() * value.length);
  return value[random];
}

function resetGame() {
  message.innerHTML = "";
  winner.classList.add("none");
  playerResult = 0;
  compResult = 0;
  getNewResult();
}

function getWinner() {
  winner.classList.remove("none");
  message.innerHTML = "";
  if (playerResult > compResult) {
    return (winner.innerHTML =
      "You beat Computer! <br> Play again? Press reset button");
  } else {
    return (winner.innerHTML =
      "Computer beat you! <br> Play again? Press reset button");
  }
}

main();
