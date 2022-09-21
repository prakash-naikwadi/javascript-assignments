// started project on 21-09-22 at 5PM Ended at 5.45PM

// Math.floor(Math.random()*1000000)

const canvas = document.getElementById("canvas");
const clickBtn = document.getElementById("button");

clickBtn.addEventListener("click", () => {
  const colorCode = "#" + Math.floor(Math.random() * 1000000);
  canvas.style.backgroundColor = colorCode;
  clickBtn.style.backgroundColor = colorCode;
});
