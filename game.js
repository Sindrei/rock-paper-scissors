/*  function getComputerChoice ()
    This function generates a random Number from 0 - 2 to simulate
    the computers choice between rock, paper and scissors.
*/
function getComputerChoice() {
  // Generate random number from 0 - 2 and assign it to CompChoice
  const compChoice = Math.floor(Math.random() * 3);
  // Variable let play to store return string
  let play;

  // 0 = Rock, 1 = Paper, 2 = Scissors
  if (compChoice === 0) {
    play = "rock";
  } else if (compChoice === 1) {
    play = "paper";
  } else if (compChoice === 2) {
    play = "scissors";
  }
  return play;
}

/*  func startRound (playerSelection, computerSelection)
    This function uses input from the player and the computer to simulate a
    round of rock paper scissors and returns the result of the round.
*/
function startRound(playerSelection, computerSelection) {
  // Variable declaration to store return string
  let declaration;
  // Stores playerSelection as a lower case string
  playerSelection = playerSelection.toLowerCase();

  // Compares playerSelection vs computerSelection to determine the round
  // if playerSelection is the same as computerSelection
  if (
    (playerSelection === "rock" && computerSelection === "rock") ||
    (playerSelection === "paper" && computerSelection === "paper") ||
    (playerSelection === "scissors" && computerSelection === "scissors")
  ) {
    declaration = `It's a draw! ${playerSelection} draws ${computerSelection}`;
    // if playerSelection beats computerSelection
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    declaration = `You Win! ${playerSelection} beats ${computerSelection}`;
    // if computerSelection beats playerSelection
  } else if (
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    declaration = `You lose! ${computerSelection} beats ${playerSelection}`;
  }
  return declaration;
}

const playerMove = prompt(
  "Please enter rock, paper or scissors to choose your move:"
);
console.log(startRound(playerMove, getComputerChoice()));
