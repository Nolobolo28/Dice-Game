let randomNumber1 = Math.floor(Math.random() * 6) + 1;

let randomImageSource1 = "images/dice" + randomNumber1 + ".png"; //This will create a new variable structuring the image that should be displayed

document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1); //This will set the first image's attribute to the random structured src

let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

//If player 1 wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";  //checking to see who wins based off of the highest number
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
