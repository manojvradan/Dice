var randomNumber1 = Math.random() * 6 + 1;
var dicenumber = Math.floor(randomNumber1);
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src","images/dice" + dicenumber + ".png");

var randomNumber2 = Math.floor(Math.random()*6+1);
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src","images/dice" + randomNumber2 + ".png");



if (dicenumber>randomNumber2) {
    document.querySelector("h1").innerHTML="Player 1 Wins!";
}

else if (dicenumber<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 Wins!";
}

else {
    document.querySelector("h1").innerHTML="Draw!";
}
