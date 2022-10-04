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
    play = "Rock";
  } else if (compChoice === 1) {
    play = "Paper";
  } else if (compChoice === 2) {
    play = "Scissors";
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

  // Compares playerSelection vs computerSelection to determine the round
  // if playerSelection is the same as computerSelection
  if (
    (playerSelection === "Rock" && computerSelection === "Rock") ||
    (playerSelection === "Paper" && computerSelection === "Paper") ||
    (playerSelection === "Scissors" && computerSelection === "Scissors")
  ) {
    declaration = `It's a draw! ${playerSelection} draws ${computerSelection}.`;
    // if playerSelection beats computerSelection
  } else if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Scissors" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Rock")
  ) {
    declaration = `You Win! ${playerSelection} beats ${computerSelection}.`;
    playerScore += 1;
    // if computerSelection beats playerSelection
  } else if (
    (playerSelection === "Paper" && computerSelection === "Scissors") ||
    (playerSelection === "Rock" && computerSelection === "Paper") ||
    (playerSelection === "Scissors" && computerSelection === "Rock")
  ) {
    declaration = `You lose! ${computerSelection} beats ${playerSelection}.`;
    computerScore += 1;
  }
  return declaration;
}

function getScore() {
  return `Player: ${playerScore} Computer: ${computerScore}`;
}

//  function game() starts a rock, papers, scissors game of 5 rounds
function game() {
  // loop executing playRound() 5 times to simulate a 5 round game
  for (let i = 0; i < 5; i++) {}
  const getPlayerChoice = prompt(
    "Please enter rock, paper or scissors to choose your move:"
  );
  console.log(playRound(getPlayerChoice, getComputerChoice()));
}

let playerScore = 0;
let computerScore = 0;

const buttonRock = document.querySelector("#rock");
const buttonPaper = document.querySelector("#paper");
const buttonScissors = document.querySelector("#scissors");
const output = document.querySelector(".result");
const score = document.querySelector(".score");

buttonRock.addEventListener("click", () => {
  output.textContent = playRound("Rock", getComputerChoice());
  score.textContent = getScore();
});

buttonPaper.addEventListener("click", () => {
  output.textContent = playRound("Paper", getComputerChoice());
  score.textContent = getScore();
});

buttonScissors.addEventListener("click", () => {
  output.textContent = playRound("Scissors", getComputerChoice());
  score.textContent = getScore();
});
