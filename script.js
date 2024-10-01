let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
  const rps = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return rps[randomIndex];
}

function getHumanChoice() {
  const choice = prompt("Choose one (rock, paper, scissors)?");
  return choice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("Draw! You both picked " + humanChoice);
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log(`You WIN! ${humanChoice} beats ${computerChoice}`);
    humanScore++;
  } else if (
    (computerChoice === "rock" && humanChoice === "scissors") ||
    (computerChoice === "paper" && humanChoice === "rock") ||
    (computerChoice === "scissors" && humanChoice === "paper")
  ) {
    console.log(`You LOSE! ${computerChoice} beats ${humanChoice}`);
    computerScore++;
  } else {
    console.log(humanChoice + " is an INVALID choice!");
  }
}
