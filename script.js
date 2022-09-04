let value = ["rock", "paper", "scissors"];
let playerResult = 0;
let compResult = 0;
let playerChoice = '';

function getComputerChoice(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  let random = Math.floor(Math.random() * (max - min) + min);
  return value[random];
}

function playRound(playerSelection, computerSelection) {
  const message = document.querySelector("[data-winner]");

  if (playerSelection == computerSelection) {
    return (message.innerHTML = "Tie!");
  } else if (playerSelection === value[1] && computerSelection == value[3]) {
    playerResult++;
    return (message.innerHTML = "You are winner!");
  } else if (playerSelection == value[2] && computerSelection == value[1]) {
    playerResult++;
    return (message.innerHTML = "You are winner!");
  } else if (playerSelection == value[3] && computerSelection == value[2]) {
    playerResult++;
    return (message.innerHTML = "You are winner!");
  } else {
    compResult++;
    return (message.innerHTML = `You are looser! Computer choice ${computerSelection} beats yours ${playerSelection}!`);
  }
}

const rock = document.querySelector("[data-rock]");
const paper = document.querySelector("[data-paper]");
const scissors = document.querySelector("[data-scissors]");

rock.addEventListener('click', () => {
  playerChoice = value[0];
  oneRound();
})

paper.addEventListener('click', () => {
  playerChoice = value[1];
  oneRound();
})

scissors.addEventListener('click', () => {
  playerChoice = value[2];
  oneRound();
})

function oneRound() {
  const comp = getComputerChoice(0, value.length);
  playRound(playerChoice, comp);
  console.log(playerResult, compResult);
}
