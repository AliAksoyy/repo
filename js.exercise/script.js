// 'use strict';
// console.log(document.querySelector(".message").innerText)

// document.querySelector(".message").textContent = "😍 Correct Number"

// console.log(document.querySelector(".message").innerText)

// let h1 = document.querySelector(".number").textContent = 13
// document.querySelector(".score").innerText = 10



//  document.querySelector(".guess").value = 23
// console.log(document.querySelector('.guess').value);

const secretNumber = Math.trunc(Math.random() * 20) + 1
let score = 20
console.log(secretNumber)



document.querySelector(".check").addEventListener("click", function() {
    const guess= Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess)

    if(!guess) {
    document.querySelector(".message").textContent = "😢 No number";
    } else if (guess === secretNumber) {
         document.querySelector('.message').innerText = '😍 Correct Number';

         document.querySelector("body").style.backgroundColor = "green";
         document.querySelector(".number").style.width = "30rem";
         document.querySelector('.number').textContent = secretNumber;
        
    }else if (guess>secretNumber) {

         if (score > 1) {
           document.querySelector('.message').innerText = '💥Too higher';
           score--;
           document.querySelector(".score").innerText = score;
        } else {
          document.querySelector('.message').textContent = 'you lost';
          document.querySelector('.score').innerText = 0;
        }

       
    }else if (guess<secretNumber) {
         if (score > 1) {
           document.querySelector('.message').innerText = '💥Too lower';
           score--;
           document.querySelector(".score").innerText = score;
         } else {
           document.querySelector('.message').textContent = 'you lost';
           document.querySelector('.score').innerText = 0;
         }
      
    }
    
})