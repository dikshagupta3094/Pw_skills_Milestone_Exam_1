let pickBtn = document.getElementById("pick-btn");

pickBtn.addEventListener("click",()=>{

    let resetBtn = document.getElementById("reset-btn");
    let displayResult = document.getElementById("displayResult")

    let number;
    // random number generator will start from 1 to 100
     let min = 1;
     let max = 100;

    number = Math.floor(Math.random()* max-min+1)+min
   
    displayResult.innerHTML = number;
    displayResult.style.color = "black"

    resetBtn.addEventListener("click",()=>{
         displayResult.innerHTML = "Pick a number"
         displayResult.style.color = "#444444"
    })
})


