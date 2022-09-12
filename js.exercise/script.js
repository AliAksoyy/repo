// 'use strict';
// console.log(document.querySelector(".message").innerText)

// document.querySelector(".message").textContent = "😍 Correct Number"

// console.log(document.querySelector(".message").innerText)

// let h1 = document.querySelector(".number").textContent = 13
// document.querySelector(".score").innerText = 10



//  document.querySelector(".guess").value = 23
// console.log(document.querySelector('.guess').value);

const secretNumber = Math.trunc(Math.random() * 20) + 1

console.log(secretNumber)
document.querySelector(".number").textContent = secretNumber

document.querySelector(".check").addEventListener("click", function() {
    const guess= Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess)

    if(!guess) {
    document.querySelector(".message").textContent = "😢 No number";
    } else if (guess === secretNumber) {
        document.querySelector(".message").innerText = "😍 Correct Number";
    }else if (guess>secretNumber) {
        document.querySelector(".message").textContent = "🅰Too high"
    }else if (guess<secretNumber) {
        document.querySelector(".message").innerText = "💥Too lower"
    }
    
})