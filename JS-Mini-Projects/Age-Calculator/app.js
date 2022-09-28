// const container;
const error = document.getElementsByClassName("error");

const inputBirthDate = document.getElementById("dob");
const yearsEl = document.getElementById("years");
const monthsEl = document.getElementById("months");
const daysEl = document.getElementById("days");

const date = new Date();

const todayDay = date.getDate();
const todayMonth = date.getMonth();
const todayYear = date.getFullYear();

inputBirthDate.addEventListener("change", () => {
  const birthDate = new Date(inputBirthDate.value);
  const age = getAge(birthDate);
  displayAge(age);
});

function getAge(birthDate) {
  const ageDiff = {
    day: "",
    month: "",
    year: "",
  };

  // console.log(todayMonth - birthDate.getMonth() - 1);

  // calculating years gap
  if (
    todayMonth > birthDate.getMonth() ||
    (todayMonth == birthDate.getMonth() && todayDay >= birthDate.getDate())
  ) {
    ageDiff.year = todayYear - birthDate.getFullYear();
  } else {
    ageDiff.year = todayYear - birthDate.getFullYear() - 1;
  }

  // calculating months gap

  if (todayDay >= birthDate.getDate()) {
    ageDiff.month = todayMonth - birthDate.getMonth();
  } else if (todayDay < birthDate.getDate()) {
    ageDiff.month = todayMonth - birthDate.getMonth() - 1;
  }

  // calculating days

  const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (todayDay >= birthDate.getDate()) {
    ageDiff.day = todayDay - birthDate.getDate();
  } else {
    ageDiff.day =
      todayDay - birthDate.getDate() + monthDays[birthDate.getMonth()];
  }
  // console.log(ageDiff);

  // if birth date is entered future
  if (ageDiff.month) {
    error[0].style.display = "block";
    // console.log("error");
    yearsEl.textContent = "";
    monthsEl.textContent = "";
    daysEl.textContent = "";
    return;
  } else {
    error[0].style.display = "none";
  }

  return ageDiff;
}

function displayAge(age) {
  // console.log(age);
  try {
    yearsEl.textContent = age.year;
    monthsEl.textContent = age.month;
    daysEl.textContent = age.day;
  } catch {}
}
