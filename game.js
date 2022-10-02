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

/*  function playRound (playerSelection, computerSelection)
    This function uses input from the player and the computer to simulate a
    round of rock paper scissors and returns the result of the round.
*/
function playRound(playerSelection, computerSelection) {
  // Variable declaration to store return string
  let declaration = "";
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

//  function game() starts a rock, papers, scissors game of 5 rounds
function game() {
  // loop executing playRound() 5 times to simulate a 5 round game
  for (let i = 0; i < 5; i++) {
    const getPlayerChoice = prompt(
      "Please enter rock, paper or scissors to choose your move:"
    );
    console.log(playRound(getPlayerChoice, getComputerChoice()));
  }
}

game();
