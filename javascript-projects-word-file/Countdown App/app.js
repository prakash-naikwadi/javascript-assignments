// 1000ms = 1s
// 1s * 60 = 1m

// select necessary elements
const userInputEl = document.querySelector(".user-input");
const minutesEl = document.querySelector(".minutes");
const secondsEl = document.querySelector(".tens");
const startButton = document.querySelector(".start-btn");
let interval;

let userInput = 0;
let secondsPass = 0;

startButton.addEventListener("click", (e) => {
  userInput = userInputEl.value;

  if (isNaN(userInput)) {
    alert("Enter Valid Number");
  } else {
    // converting minutes to seconds
    secondsPass = userInput * 60;

    clearInterval(interval);
    interval = setInterval(startTimer, 1000);
    // startTimer(userInput);
  }

  // console.log(isNaN(userInput));
});

// timer function
const startTimer = () => {
  console.log(secondsPass);
  // converting lapsed minutes
  let min = Math.floor(secondsPass / 60);

  // getting 60 seconds of minutes
  let sec = secondsPass - min * 60;

  console.log(secondsPass - min * 60);

  if (sec >= 10) {
    secondsEl.textContent = sec;
  } else {
    secondsEl.textContent = "0" + sec;
  }

  if (min >= 10) {
    minutesEl.textContent = Math.floor(secondsPass / 60);
  } else {
    minutesEl.textContent = "0" + Math.floor(secondsPass / 60);
  }

  if (secondsPass === 0) {
    clearInterval(interval);
    console.log("inside");
  }
  secondsPass--;
};
