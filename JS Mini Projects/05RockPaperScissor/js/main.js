// steps
// get user input
// generate computer selection
// decide who is winner
// update score

// getting all the necessary elements
const userScoreEl = document.getElementById("userScoreVal");
const computerScoreEl = document.getElementById("compScoreVal");

const userSelection = document.getElementById("result-user-stat");
const computerSelection = document.getElementById("result-comp-stat");
const winnerStatus = document.getElementById("result-final-stat");

const rockEl = document.getElementById("r");
const paperEl = document.getElementById("p");
const scissorEl = document.getElementById("s");

let userInput = "";
let computerInput = "";

let userScoreCount = 0;
let compScoreCount = 0;

const selections = {
  r: "Rock",
  p: "Paper",
  s: "Scissor",
};

const setUserInput = (userInputArg) => {
  userSelection.textContent = "User: " + selections[userInputArg];
  userInput = userInputArg;
};

rockEl.addEventListener("click", (e) => {
  // console.dir(e);
  // console.dir(e.target);
  // console.dir(e.currentTarget.id);
  setUserInput(e.currentTarget.id);
  setComputerInput();
  decideWinner();
  userScoreEl.textContent = userScoreCount;
  computerScoreEl.textContent = compScoreCount;
});

paperEl.addEventListener("click", (e) => {
  // console.dir(e.currentTarget.id);
  setUserInput(e.currentTarget.id);
  setComputerInput();
  decideWinner();
  userScoreEl.textContent = userScoreCount;
  computerScoreEl.textContent = compScoreCount;
});

scissorEl.addEventListener("click", (e) => {
  // console.dir(e.currentTarget.id);
  setUserInput(e.currentTarget.id);
  setComputerInput();
  decideWinner();
  userScoreEl.textContent = userScoreCount;
  computerScoreEl.textContent = compScoreCount;
});

// computer selection

const selectionsArray = ["r", "p", "s"];

const getComputerSelection = () => {
  return selectionsArray[Math.floor(Math.random() * 3)];
};

const setComputerInput = () => {
  const compInput = getComputerSelection();
  computerSelection.textContent = "Computer: " + selections[compInput];
  computerInput = compInput;
};

// console.log(getComputerSelection());

// winner algorithm

// if user === comp then tie
// if user = "rock" then

const decideWinner = () => {
  // console.log(userInput);
  // console.log(computerInput);
  // tie condition
  if (userInput === computerInput) {
    // console.log("Tie");
    winnerStatus.textContent = "Winner: " + "Tie";
    return;
  }

  // user selected rock
  if (userInput === "r") {
    if (computerInput === "s") {
      // console.log("You Win");
      winnerStatus.textContent = "Winner: " + "You Win";
      userScoreCount = userScoreCount + 1;
      // console.log(userScoreCount);
    } else {
      // console.log("You Loose");
      winnerStatus.textContent = "Winner: " + "You Loose";
      compScoreCount = compScoreCount + 1;
    }
    return;
  }

  // user selected paper
  if (userInput === "p") {
    if (computerInput === "r") {
      // console.log("You Win");
      winnerStatus.textContent = "Winner: " + "You Win";
      userScoreCount = userScoreCount + 1;
    } else {
      // console.log("You Loose");
      winnerStatus.textContent = "Winner: " + "You Loose";
      compScoreCount = compScoreCount + 1;
    }
    return;
  }

  // user selected scissor
  if (userInput === "s") {
    if (computerInput === "p") {
      // console.log("You Win");
      winnerStatus.textContent = "Winner: " + "You Win";
      userScoreCount = userScoreCount + 1;
    } else {
      // console.log("You Loose");
      winnerStatus.textContent = "Winner: " + "You Loose";
      compScoreCount = compScoreCount + 1;
    }
    return;
  }
};
