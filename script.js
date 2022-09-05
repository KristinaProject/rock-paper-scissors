const rock = document.querySelector("[data-rock]");
const paper = document.querySelector("[data-paper]");
const scissors = document.querySelector("[data-scissors]");
const message = document.querySelector("[data-game]");
const reset = document.querySelector("[data-reset]");
const plresult = document.querySelector("[data-plresult]");
const pcresult = document.querySelector("[data-pcresult]");
const spanWrap = document.querySelector(".span-wrap");

let value = ["rock", "paper", "scissors"];
let playerResult = 0;
let compResult = 0;
let playerChoice = "";
message.innerHTML = "";
plresult.innerHTML = playerResult;
pcresult.innerHTML = compResult;

reset.addEventListener("click", () => resetGame());

function resetGame() {
  message.innerHTML = "";
  playerResult = 0;
  compResult = 0;
  getNewResult();
}

function getComputerChoice() {
  let random = Math.floor(Math.random() * value.length);
  return value[random];
}

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

function getNewResult() {
  plresult.innerHTML = playerResult;
  pcresult.innerHTML = compResult;
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
}

main();
