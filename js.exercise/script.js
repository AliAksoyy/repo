// 

const check = document.querySelector(".check")
  

const message = document.querySelector(".message")
let score = 20
const secretNumber =Math.trunc( Math.random() *20 +1)
// console.log(secretNumber)
document.querySelector(".number").textContent = secretNumber
check.addEventListener("click", () => {
const guess = Number(document.querySelector('.guess').value);
  if(!guess) {
    document.querySelector(".message").textContent = "No number"
  }else if(guess === secretNumber) {
    document.querySelector('.message').textContent = 'Corret number';
    document.querySelector("body").style.background = "green"
    document.querySelector(".number").style.width = "30rem"
  } else if (guess > secretNumber) {
    if(score>1) {
       document.querySelector('.message').textContent = 'to high';
       score--;
       document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'the lost';
       document.querySelector('.score').textContent = 0
    }
    
  } else if (guess < secretNumber) {
    if(score>1) {
       document.querySelector('.message').textContent = 'to low';
       score--;
       document.querySelector('.score').textContent = score;
    } else {
         document.querySelector('.message').textContent = 'the lost';
           document.querySelector('.score').textContent = 0;
    }
  }   
})