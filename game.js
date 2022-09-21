/*  function getComputerChoice
    This function generates a random Number from 0 - 2 to simulate
    the computers choice between rock, paper and scissors.
*/
function getComputerChoice() {
  const compChoice = Math.floor(Math.random() * 3);
  let play;

  if (compChoice === 0) {
    play = "Rock";
  } else if (compChoice === 1) {
    play = "Paper";
  } else {
    play = "Scissors";
  }
  return play;
}

console.log(getComputerChoice());
