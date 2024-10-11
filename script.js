let computerScore = 0;
let humanScore = 0;
let roundsPlayed = 0;
let roundsToBePlayed = 5;

const rpsButtons = document.querySelectorAll("#rock, #paper, #scissors");
const resultLogs = document.querySelector(".result-logs");

function getComputerChoice() {
  const rps = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return rps[randomIndex];
}

function getHumanChoice() {
  const choice = prompt(
    "Choose one (rock OR r, paper OR p, scissors OR s)?"
  ).toLowerCase();

  if (choice === "r") return "rock";
  if (choice === "p") return "paper";
  if (choice === "s") return "scissors";

  return choice;
}

function didHumanWin(humanChoice, computerChoice) {
  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    return true;
  } else {
    return false;
  }
}

function addResultLog(message, strongEmphasis) {
  const pElement = document.createElement("p");
  pElement.textContent = message;
  resultLogs.appendChild(pElement);

  if (strongEmphasis) pElement.style.fontWeight = "bold";
}

function playRound(humanChoice, computerChoice) {
  if (roundsPlayed === roundsToBePlayed) return;

  if (humanChoice === computerChoice) {
    addResultLog("Draw! You both picked " + humanChoice);
  } else if (didHumanWin(humanChoice, computerChoice)) {
    addResultLog(`You WIN! ${humanChoice} beats ${computerChoice}`);
    humanScore++;
  } else {
    addResultLog(`You LOSE! ${computerChoice} beats ${humanChoice}`);
    computerScore++;
  }

  roundsPlayed++;
  if (roundsPlayed === roundsToBePlayed) printWinner();
}

function printWinner() {
  const gameInfo = `Your score: ${humanScore}/${roundsPlayed}, Computer score: ${computerScore}/${roundsPlayed}, Draws: ${
    roundsPlayed - humanScore - computerScore
  }/${roundsPlayed}`;

  if (humanScore > computerScore) {
    addResultLog("YOU WIN! " + gameInfo, true);
  } else if (humanScore < computerScore) {
    addResultLog("YOU LOSE! " + gameInfo, true);
  } else {
    addResultLog("TIE! " + gameInfo, true);
  }
}

rpsButtons.forEach((button) => {
  button.addEventListener("click", () => {
    playRound(button.id, getComputerChoice());
  });
});
