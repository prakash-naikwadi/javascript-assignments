// getting necessary elements
const inputTextEl = document.getElementById("text");
const resultEl = document.querySelector(".result");
const checkedBtnEl = document.querySelector(".check-btn");

const modalEl = document.getElementById("modal");
const modalText = document.querySelector(".modal-text");
const modalBtn = document.getElementById("modal-btn");

checkedBtnEl.addEventListener("click", (e) => {
  let inputValue = getInputValue();
  console.log(inputValue);

  modalText.textContent = checkPalindrome(inputValue);
  modalEl.style.display = "block";
});

const getInputValue = () => {
  return inputTextEl.value;
};

// check palindrome function

function checkPalindrome(string) {
  // convert string to an array
  const arrayValues = string.split("");

  // reverse the array values
  const reverseArrayValues = arrayValues.reverse();

  // convert array to string
  const reverseString = reverseArrayValues.join("");

  if (string == reverseString) {
    console.log("It is a palindrome");
    return "It is a palindrome";
  } else {
    console.log("It is not a palindrome");
    return "It is not a palindrome";
  }
}

modalBtn.addEventListener("click", () => {
  modalEl.style.display = "none";
});
