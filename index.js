var randomNumber1 =  1 + Math.floor(Math.random() * 6);
var randomNumber2 =  1 + Math.floor(Math.random() * 6);
var imgPathString1 = "images/dice" + randomNumber1 + ".png";
var imgPathString2 = "images/dice" + randomNumber2 + ".png";
document.querySelector(".img1").setAttribute("src", imgPathString1);
document.querySelector(".img2").setAttribute("src", imgPathString2);

var result = document.querySelector("h1");
if(randomNumber1 > randomNumber2){
      result.innerHTML = "Player 1 wins";            
}
else if(randomNumber1 < randomNumber2){
      result.innerHTML = "Player 2 wins";  
}
else{
      result.innerHTML = "Draw !"; 
}