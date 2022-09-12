// 'use strict';
// console.log(document.querySelector(".message").innerText)

// document.querySelector(".message").textContent = "😍 Correct Number"

// console.log(document.querySelector(".message").innerText)

// let h1 = document.querySelector(".number").textContent = 13
// document.querySelector(".score").innerText = 10



//  document.querySelector(".guess").value = 23
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1
let score = 20
let highScore = 0
console.log(secretNumber)



document.querySelector(".check").addEventListener("click", function() {
    const guess= Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess)

    if(!guess) {
    document.querySelector(".message").textContent = "😢 No number";
    } else if (guess === secretNumber) {
        displayMessage("'😍 Correct ")

         document.querySelector("body").style.backgroundColor = "green";
         document.querySelector(".number").style.width = "30rem";
         document.querySelector('.number').textContent = secretNumber;

         if(score>highScore){
            highScore = score
            document.querySelector(".highscore").innerText = highScore
         }
        
    }else if (guess !==secretNumber) {
         if(score>1) {
            document.querySelector('.message').innerText = guess > secretNumber ? "To high" : "Too lower";
            score--;
           document.querySelector(".score").innerText = score;
         }   
        
         else {
           document.querySelector('.message').textContent = 'you lost';
           document.querySelector('.score').innerText = 0;
         }
    
}

document.querySelector(".again").addEventListener("click", function() {
    score = 20
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector(".message").innerText = "Star quessing"
    document.querySelector(".score").innerText = 20
    document.querySelector(".number").textContent = "?"
    document.querySelector(".guess").value = "";
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";



})

const displayMessage = function(message) {
    document.querySelector(".message").textContent = message
}