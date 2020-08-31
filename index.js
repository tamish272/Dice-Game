//generating random number for dice-1
var randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1 * 6) + 1;

//generating random number for dice-2
var randomNumber2 = Math.random();
randomNumber2 = Math.floor(randomNumber2 * 6) + 1;

//changing the dice image according to the random number generated
document.getElementsByClassName(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
document.getElementsByClassName(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

//showing the result of the match
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 wins!";
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 wins! 🚩";
} 
else {
    document.querySelector("h1").innerHTML = "Draw!";
}
