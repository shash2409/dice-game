var randNum1= Math.floor(Math.random()*6)+1;

var diceName="images/"+"dice"+randNum1+".png";
var image1=document.querySelector(".img1");
image1.setAttribute("src",diceName);

var randNum2= Math.floor(Math.random()*6)+1;

var diceName="images/"+"dice"+randNum2+".png";
var image2=document.querySelector(".img2");
image2.setAttribute("src",diceName);

if(randNum1>randNum2)
{
  document.querySelector("h1").innerHTML="Player 1 wins!";
}
else if(randNum1<randNum2)
{
  document.querySelector("h1").innerHTML="Player 2 wins!";
}
else if(randNum1===randNum2)
{
  document.querySelector("h1").innerHTML="Draw!";
}
