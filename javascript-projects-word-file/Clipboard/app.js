const formEl = document.getElementById("form");
const inputEl = form.querySelector("input");
const modalButton = document.getElementById("modal-btn");
const modalEl = document.getElementById("modal");
const modalBodyEl = document.querySelector(".modal-body");
const modalText = modalBodyEl.querySelector("p");

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  if (inputEl.value) {
    inputEl.select();
    navigator.clipboard.writeText(inputEl.value);
    modalText.textContent = "Copied To Clipboard ...!";
    modalEl.style.display = "block";
  } else {
    modalText.textContent = "Please Enter Something...!";
    modalEl.style.display = "block";
  }
});

modalButton.addEventListener("click", () => {
  modalEl.style.display = "none";
  inputEl.value = "";
});
