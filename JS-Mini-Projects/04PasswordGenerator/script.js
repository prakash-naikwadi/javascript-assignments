const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");
const clipboardEl = document.getElementById("clipboard");

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

clipboardEl.addEventListener("click", () => {
  // Copy the text inside the text field
  navigator.clipboard.writeText(resultEl.textContent);

  // Alert the copied text
  alert("Copied the text: " + resultEl.textContent);
});

generateEl.addEventListener("click", () => {
  resultEl.textContent = generatePassword(
    randomFunc.lower,
    randomFunc.upper,
    randomFunc.number,
    randomFunc.symbol,
    lengthEl.value
  );
});

function generatePassword(lower, upper, number, symbol, length) {
  //   let lowerChar = String.fromCharCode(lower());
  console.log(length);
  console.log(String.fromCharCode(lower()));
  console.log(String.fromCharCode(upper()));
  console.log(number());
  console.log(String.fromCharCode(symbol()));
  console.dir(uppercaseEl);
  console.log(uppercaseEl.checked);

  // store all the arguments into array
  // then accessed them by random order
  // make array of elements from 0 to 3 number [0,1,2,3] and shuffled it.
  // accessed argument array using shuffled array for password forming
  // repeat this process for length/4 times.
  // length % 4 === 0 {shuffle length/4 times}
  // length % 4 != 0 {shuffle length-mod/4 times}
  // and shuffle mod times

  let uppercaseCheckedStatus = uppercaseEl.checked;
  let lowercaseCheckedStatus = lowercaseEl.checked;
  let numbersCheckedStatus = numbersEl.checked;
  let symbolsCheckedStatus = symbolsEl.checked;
  let password = "";

  if (
    // When all boxes are checked
    uppercaseCheckedStatus &&
    lowercaseCheckedStatus &&
    numbersCheckedStatus &&
    symbolsCheckedStatus
  ) {
    for (let i = 1; i <= length / 4; i++) {
      let lowerChar = String.fromCharCode(lower());
      let upperChar = String.fromCharCode(upper());
      let numberChar = number();
      let symbolChar = String.fromCharCode(symbol());

      password = password + lowerChar;
      password = password + upperChar;
      password = password + numberChar;
      password = password + symbolChar;
    }
    for (let i = 1; i <= length % 4; i++) {
      let lowerChar = String.fromCharCode(lower());
      password = password + lowerChar;
    }
  } else if (
    // when uppercase letter checkbox unchecked
    uppercaseCheckedStatus === false &&
    lowercaseCheckedStatus &&
    numbersCheckedStatus &&
    symbolsCheckedStatus
  ) {
    for (let i = 1; i <= length / 3; i++) {
      let lowerChar = String.fromCharCode(lower());

      let numberChar = number();
      let symbolChar = String.fromCharCode(symbol());

      password = password + lowerChar;
      password = password + numberChar;
      password = password + symbolChar;
    }
    for (let i = 1; i <= length % 3; i++) {
      let lowerChar = String.fromCharCode(lower());
      password = password + lowerChar;
    }
  } else if (
    // when lowercase letter checkbox unchecked
    lowercaseCheckedStatus === false &&
    uppercaseCheckedStatus &&
    numbersCheckedStatus &&
    symbolsCheckedStatus
  ) {
    for (let i = 1; i <= length / 3; i++) {
      let upperChar = String.fromCharCode(upper());
      let numberChar = number();
      let symbolChar = String.fromCharCode(symbol());

      password = password + upperChar;
      password = password + numberChar;
      password = password + symbolChar;
    }
    for (let i = 1; i <= length % 3; i++) {
      let lowerChar = String.fromCharCode(lower());
      password = password + lowerChar;
    }
  } else if (
    // when numbers checkbox unchecked
    numbersCheckedStatus === false &&
    uppercaseCheckedStatus &&
    lowercaseCheckedStatus &&
    symbolsCheckedStatus
  ) {
    for (let i = 1; i <= length / 3; i++) {
      let upperChar = String.fromCharCode(upper());
      let lowerChar = String.fromCharCode(lower());
      let symbolChar = String.fromCharCode(symbol());

      password = password + upperChar;
      password = password + lowerChar;
      password = password + symbolChar;
    }
    for (let i = 1; i <= length % 3; i++) {
      let lowerChar = String.fromCharCode(lower());
      password = password + lowerChar;
    }
  } else if (
    // when symbols checkbox unchecked
    symbolsCheckedStatus === false &&
    uppercaseCheckedStatus &&
    lowercaseCheckedStatus &&
    numbersCheckedStatus
  ) {
    for (let i = 1; i <= length / 3; i++) {
      let upperChar = String.fromCharCode(upper());
      let lowerChar = String.fromCharCode(lower());
      let numberChar = number();

      password = password + upperChar;
      password = password + lowerChar;
      password = password + numberChar;
    }
    for (let i = 1; i <= length % 3; i++) {
      let lowerChar = String.fromCharCode(lower());
      password = password + lowerChar;
    }
  } else if (
    // when uppercase and lowercase checkboxes checked
    uppercaseCheckedStatus &&
    lowercaseCheckedStatus
  ) {
    for (let i = 1; i <= length / 2; i++) {
      let upperChar = String.fromCharCode(upper());
      let lowerChar = String.fromCharCode(lower());

      password = password + upperChar;
      password = password + lowerChar;
    }
    for (let i = 1; i <= length % 2; i++) {
      let lowerChar = String.fromCharCode(lower());
      password = password + lowerChar;
    }
  } else if (
    // when uppercase and numbers checkboxes checked
    uppercaseCheckedStatus &&
    numbersCheckedStatus
  ) {
    for (let i = 1; i <= length / 2; i++) {
      let upperChar = String.fromCharCode(upper());
      let numberChar = number();

      password = password + upperChar;
      password = password + numberChar;
    }
    for (let i = 1; i <= length % 2; i++) {
      let numberChar = number();
      password = password + numberChar;
    }
  } else if (
    // when uppercase and symbols checkboxes checked
    uppercaseCheckedStatus &&
    symbolsCheckedStatus
  ) {
    for (let i = 1; i <= length / 2; i++) {
      let upperChar = String.fromCharCode(upper());
      let symbolChar = String.fromCharCode(symbol());

      password = password + upperChar;
      password = password + symbolChar;
    }
    for (let i = 1; i <= length % 2; i++) {
      let symbolChar = String.fromCharCode(symbol());
      password = password + symbolChar;
    }
  } else if (
    // when lowercase and numbers checkboxes checked
    lowercaseCheckedStatus &&
    numbersCheckedStatus
  ) {
    for (let i = 1; i <= length / 2; i++) {
      let lowerChar = String.fromCharCode(lower());
      let numberChar = number();

      password = password + lowerChar;
      password = password + numberChar;
    }
    for (let i = 1; i <= length % 2; i++) {
      let lowerChar = String.fromCharCode(lower());
      password = password + lowerChar;
    }
  } else if (
    // when lowercase and symbols checkboxes checked
    lowercaseCheckedStatus &&
    symbolsCheckedStatus
  ) {
    for (let i = 1; i <= length / 2; i++) {
      let lowerChar = String.fromCharCode(lower());
      let symbolChar = String.fromCharCode(symbol());

      password = password + lowerChar;
      password = password + symbolChar;
    }
    for (let i = 1; i <= length % 2; i++) {
      let lowerChar = String.fromCharCode(lower());
      password = password + lowerChar;
    }
  } else if (
    // when numbers and symbols checkboxes checked
    numbersCheckedStatus &&
    symbolsCheckedStatus
  ) {
    for (let i = 1; i <= length / 2; i++) {
      let numberChar = number();
      let symbolChar = String.fromCharCode(symbol());

      password = password + numberChar;
      password = password + symbolChar;
    }
    for (let i = 1; i <= length % 2; i++) {
      let symbolChar = String.fromCharCode(symbol());
      password = password + symbolChar;
    }
  } else if (
    // only uppercase checked
    uppercaseCheckedStatus
  ) {
    for (let i = 1; i <= length; i++) {
      let upperChar = String.fromCharCode(upper());
      password = password + upperChar;
    }
  } else if (
    // only lowercase checked
    lowercaseCheckedStatus
  ) {
    for (let i = 1; i <= length; i++) {
      let lowerChar = String.fromCharCode(lower());
      password = password + lowerChar;
    }
  } else if (
    // only numbers checked
    numbersCheckedStatus
  ) {
    for (let i = 1; i <= length; i++) {
      let numberChar = number();
      password = password + numberChar;
    }
  } else if (
    // only symbols checked
    symbolsCheckedStatus
  ) {
    for (let i = 1; i <= length; i++) {
      let symbolChar = String.fromCharCode(symbol());
      password = password + symbolChar;
    }
  }

  console.log(password.length);
  console.log(password);
  return password;
}

function getRandomLower() {
  let a = 97;
  let z = 122;
  let random = Math.random();
  //   console.log(typeof z);
  // returning random number from 97 to 122
  return Math.floor(random * (z - a + 1) + a);
}

function getRandomUpper() {
  let A = 65;
  let Z = 90;
  let random = Math.random();

  // returning random number from 65 to 90
  return Math.floor(random * (Z - A + 1) + A);
}

function getRandomNumber() {
  let random = Math.random();

  // returning random number from 0 to 9
  return Math.floor(random * (9 - 0 + 1) + 0);
}

function getRandomSymbol() {
  let random = Math.random();

  // returning random number from 33 to 47
  return Math.floor(random * (47 - 33 + 1) + 33);
}
