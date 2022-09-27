let url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";

const imageEl = document.getElementById("img");
const inputText = document.getElementById("input");
const submitBtn = document.getElementById("submit");

submitBtn.addEventListener("click", () => {
  if (inputText.value) {
    imageEl.src = url + inputText.value;
    imageEl.style.display = "block";
  }
});
