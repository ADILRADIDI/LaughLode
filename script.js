let jokes = document.getElementById("jokes");
let btn = document.getElementById("button");
const URL =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let getJokes = () => {
    fetch(URL)
    .then(data => data.json())
    .then(items => {
        jokes.textContent = items.joke;
    });
};
getJokes();

btn.addEventListener("click",()=>{
    getJokes();
})