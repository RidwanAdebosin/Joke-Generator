const jokeGenerator = document.getElementById("btn");
const displayJoke = document.getElementById("joke");
const apiKey = "mpOkw6eAQQ3TeYv0k4Y1aA==VhWjjMwaZCR98XRZ";

const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1;";

async function getJoke() {
  try {
    displayJoke.innerText = "Updating...";
    jokeGenerator.disabled = true;
    jokeGenerator.innerText = "Loading...";
    const response = await fetch(apiURL, options);
    const data = await response.json();
    jokeGenerator.disabled = false;
    jokeGenerator.innerText = "TELL ME  A JOKE";
    displayJoke.innerText = data[0].joke;
  } catch (error) {
    displayJoke.innerText = "An error happened, try again later";
    jokeGenerator.disabled = false;
    jokeGenerator.innerText = "Reload Page";
  }
}

jokeGenerator.addEventListener("click", getJoke);
