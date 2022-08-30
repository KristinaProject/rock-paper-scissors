let value = ['rock', 'paper', 'scissors'];

function getComputerChoice(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  let random = Math.floor(Math.random() * (max - min) + min);
  return value[random];
}
