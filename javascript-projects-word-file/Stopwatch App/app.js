const timer = document.querySelector(".timer");

const secondsEl = document.querySelector(".seconds");
const tensEl = document.querySelector(".tens");
let interval;
let tens = 0;
let seconds = 0;

const startButton = document.querySelector(".start-btn");
const stopButton = document.querySelector(".stop-btn");
const resetButton = document.querySelector(".reset-btn");

startButton.addEventListener("click", () => {
  clearInterval(interval);
  interval = setInterval(startTimer, 10);
});

stopButton.addEventListener("click", () => {
  clearInterval(interval);
});

const startTimer = () => {
  tens++;
  // console.log(tens);
  // tensEl.textContent = tens;

  if (tens <= 9) {
    tensEl.textContent = "0" + tens;
  }

  if (tens > 9) {
    tensEl.textContent = tens;
  }

  if (tens > 99) {
    seconds++;
    secondsEl.textContent = "0" + seconds;
    tens = 0;
    tensEl.textContent = "0" + 0;
  }

  if (seconds > 9) {
    secondsEl.textContent = seconds;
  }
};

resetButton.addEventListener("click", () => {
  clearInterval(interval);
  tensEl.textContent = "00";
  secondsEl.textContent = "00";
  tens = 0;
  seconds = 0;
});
