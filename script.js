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

function playGame() {
  let computerScore = 0;
  let humanScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      console.log("Draw! You both picked " + humanChoice);
    } else if (didHumanWin(humanChoice, computerChoice)) {
      console.log(`You WIN! ${humanChoice} beats ${computerChoice}`);
      humanScore++;
    } else {
      console.log(`You LOSE! ${computerChoice} beats ${humanChoice}`);
      computerScore++;
    }
  }

  for (let i = 0; i < 5; i++) {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
  }

  const gameInfo = `Your score: ${humanScore}/5, Computer score: ${computerScore}/5, Draws: ${
    5 - humanScore - computerScore
  }/5`;

  if (humanScore > computerScore) {
    console.log("YOU WIN! " + gameInfo);
  } else if (humanScore < computerScore) {
    console.log("YOU LOSE! " + gameInfo);
  } else {
    console.log("TIE! " + gameInfo);
  }
}

playGame();
