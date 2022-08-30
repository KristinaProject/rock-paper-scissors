let value = ['rock', 'paper', 'scissors'];
let computerChoice = getComputerChoice(0, value.length);

function getComputerChoice(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  let random = Math.floor(Math.random() * (max - min) + min);
  return value[random];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  if(playerSelection == computerSelection){
    return 'Draw!';
  } else if(playerSelection == value[1] && computerSelection == value[3] || playerSelection == value[2] && computerSelection == value[1] || playerSelection == value[3] && computerSelection == value[2]) {
    return 'You are winner!';
  } else {
    return `You are looser! ${computerSelection} beats ${playerSelection}!`;
  }
}