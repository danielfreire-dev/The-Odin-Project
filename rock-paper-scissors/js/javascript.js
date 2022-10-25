const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
const winnerDisplay = document.getElementById("winner");
let userChoice;
let computerChoice;
let result;
let userScore = 0;
let computerScore = 0;

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
    resetScore();
    displayResult();
  })
);

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1; // or you can use possibleChoices.length

  if (randomNumber === 1) {
    computerChoice = "rock";
  }
  if (randomNumber === 2) {
    computerChoice = "scissors";
  }
  if (randomNumber === 3) {
    computerChoice = "paper";
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
  if (computerChoice === userChoice) {
    result = "It's a tie!";
  }
  if (computerChoice === "rock") {
    if (userChoice === "paper") {
      result = "You win!";
      userScore += 1;
      userScoreDisplay.innerHTML = userScore;
    } else {
      result = "You lose!";
      computerScore += 1;
      computerScoreDisplay.innerHTML = computerScore;
    }
  } else if (computerChoice === "paper") {
    if (userChoice === "scissors") {
      result = "You win!";
      userScore += 1;
      userScoreDisplay.innerHTML = userScore;
    } else {
      result = "You lose!";
      computerScore += 1;
      computerScoreDisplay.innerHTML = computerScore;
    }
  } else if (computerChoice === "scissors") {
    if (userChoice === "rock") {
      result = "You win!";
      userScore += 1;
      userScoreDisplay.innerHTML = userScore;
    } else {
      result = "You lose!";
      computerScore += 1;
      computerScoreDisplay.innerHTML = computerScore;
    }
  } else {
    result = "Something went wrong!";
  } // end of else
}
// display running score
const userScoreDisplay = document.getElementById("user-score");
const computerScoreDisplay = document.getElementById("computer-score");

// display score
function displayScore() {
  userScoreDisplay.innerHTML = userScore;
  computerScoreDisplay.innerHTML = computerScore;
}

//reset score
function resetScore() {
  if (userScore == 5) {
    userScore = 0;
    computerScore = 0;
    displayScore();
    console.log("you win the game");
    winnerDisplay.innerHTML = "You won!";
  } else if (computerScore == 5) {
    userScore = 0;
    computerScore = 0;
    displayScore();
    console.log("you lose the game");
    winnerDisplay.innerHTML = "You lost!";
  }
}

//Congratulate the winner
function displayResult() {
  resultDisplay.innerHTML = result;
}
