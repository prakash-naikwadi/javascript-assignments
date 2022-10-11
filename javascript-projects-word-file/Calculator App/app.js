const numberButtons = document.querySelectorAll(".number-btn");
const operatorsButtons = document.querySelectorAll(".operator-btn");

const equalsOperator = document.getElementById("equal");
const dotButton = document.querySelector(".dot-btn");
const clearButton = document.querySelector(".clear-btn");

const displayScreen = document.querySelector(".screen");

const numberButtonsArray = Array.from(numberButtons);
const operatorButtonsArray = Array.from(operatorsButtons);

let clearErrorFlag = false;

// console.log(equalsOperator);

numberButtonsArray.map((item) => {
  item.addEventListener("click", (e) => {
    console.log(e.target.innerText);

    if (displayScreen.innerText == 0) displayScreen.innerText = "";

    if (clearErrorFlag) {
      displayScreen.innerText = "";
      clearErrorFlag = false;
    }

    displayScreen.innerText += e.target.innerText;
  });
});

operatorButtonsArray.map((item) => {
  item.addEventListener("click", (e) => {
    console.log(e.target.innerText);
    displayScreen.innerText += e.target.innerText;
  });
});

dotButton.addEventListener("click", (e) => {
  displayScreen.innerText += e.target.innerText;
});

clearButton.addEventListener("click", (e) => {
  displayScreen.innerText = "0";
});

equalsOperator.addEventListener("click", (e) => {
  console.log(e.target.innerText);
  // console.log(eval(displayScreen.innerText.trim()));
  try {
    if (eval(displayScreen.innerText.trim())) {
      displayScreen.innerText = eval(displayScreen.innerText.trim());
    }
  } catch {
    displayScreen.innerText = "Error!";
    clearErrorFlag = true;
  }
});
