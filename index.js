
var player1 = "Player1";
var player2 = "Player2";
function change(){
  player1 = prompt("What is player1's name:");
  if (player1 !== "") {
    document.querySelector('.p1').textContent = player1;
  }else {
    player1 = "palyer1";
  }

  player2 = prompt("What is player2's name:");
  if (player2 !== "") {
    document.querySelector('.p2').textContent = player2;
  }else {
    playe2 = "player2";
  }

}

function showName() {
  var randomNumber1 = Math.floor(Math.random()*6) + 1;
  var imgName1 =  "images/dice" + randomNumber1 + ".png";

  document.querySelector(".img1").setAttribute("src",imgName1);

  var randomNumber2 = Math.floor(Math.random()*6) + 1;
  var imgName2 =  "images/dice" + randomNumber2 + ".png";

  document.querySelector(".img2").setAttribute("src",imgName2);

  var newTitle;
  if (randomNumber1 > randomNumber2) {
    newTitle = "✌️ " + player1 + " won";
  } else if (randomNumber1 === randomNumber2) {
    newTitle = "Draw game";
  } else {
    newTitle =  player2 + " won" + "✌️ ";
  }
  document.querySelector('h1').textContent = newTitle;
}
