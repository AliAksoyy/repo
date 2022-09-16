const text = document.querySelector("#text");
const btn = document.querySelector("#button")
const paraf = document.querySelector("#par")

btn.addEventListener("click", () => {
    
   let str= text.value;
   let vowel = "aeiouAEIOU"
   let counter = 0
   for(let i = 0 ; i<str.length; i++) {
        for(let j = 0; j<vowel.length; j++) {
            if(str[i] == vowel[j]) {
                counter++
            }
        }
   }
   paraf.innerHTML = `There ara ${counter} vowels in <span style="color:red;">${text.value}</span>`
})
