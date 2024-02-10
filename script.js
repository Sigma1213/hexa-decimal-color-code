const hexadecimalNumberSystem = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

let button= document.getElementById("button");


let firstColorBox= document.getElementById("first-color-box");
let secondColorBox= document.getElementById("second-color-box");
let thirdColorBox= document.getElementById("third-color-box");

let firstHexCode= document.getElementById("first-hex-code");
let secondHexCode= document.getElementById("second-hex-code");
let thirdHexCode= document.getElementById("third-hex-code");

function generateRandomNumber(){
  let ramdomNumber= Math.floor(Math.random()*hexadecimalNumberSystem.length);
  return ramdomNumber; 
}

function hexColorGenerator(hexColorBox, hexText){
    button.addEventListener("click", function(){
  let hexColor= "#";
  for(let i=0; i<6; i++){
    hexColor+= hexadecimalNumberSystem[generateRandomNumber()];
  }
 hexColorBox.style.backgroundColor= hexColor;
    hexText.textContent= hexColor;
});
}

hexColorGenerator(firstColorBox, firstHexCode);
hexColorGenerator(secondColorBox, secondHexCode);
hexColorGenerator(thirdColorBox, thirdHexCode);
