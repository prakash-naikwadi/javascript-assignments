const url =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

const jokeEl = document.getElementById("joke");
const getJokeBtn = document.getElementById("jokeBtn");

// getting API data using async and await

async function getApiData(url) {
  const response = await fetch(url);
  var data = await response.json();
  console.log(data.joke);
  // console.log(response);

  jokeEl.textContent = data.joke;
}

getApiData(url);

getJokeBtn.addEventListener("click", () => {
  getApiData(url);
});
