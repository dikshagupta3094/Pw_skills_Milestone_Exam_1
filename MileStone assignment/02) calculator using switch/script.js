
let calculate = document.getElementById("calculate-btn");

calculate.addEventListener("click",()=>{
    let firstInput = document.getElementById("first-input").value;
    let secondInput = document.getElementById("second-input").value;
    let operator = document.getElementById("operator").value;
    let reset = document.getElementById("Delete-btn");
    let displayResult = document.getElementById("result");
    let calc;
    switch(operator){
        case '+':
        calc = eval(firstInput) + eval(secondInput);
        displayResult.innerHTML = "Answer is: "+ calc.toFixed(2);
        displayResult.style.fontSize = "18px";
       break;

       case '-':
        calc = eval(firstInput) - eval(secondInput);
        displayResult.innerHTML = "Answer is: "+ calc.toFixed(2);
        displayResult.style.fontSize = "18px";
        break;

        case '*':
         calc = eval(firstInput) * eval(secondInput);
         displayResult.innerHTML = "Answer is: "+ calc.toFixed(4);
         displayResult.style.fontSize = "18px";
        break;

        case'/':
        calc = eval(firstInput) / eval(secondInput);
        displayResult.innerHTML = "Answer is: "+ calc.toFixed(4);
        displayResult.style.fontSize = "18px";
        break;

       default:
        displayResult.innerHTML = "please given valid operator";
        displayResult.style.fontSize = "18px";
        break;
    }
      
    reset.addEventListener("click",()=>{
        document.getElementById("first-input").value ="";
        document.getElementById("second-input").value ="";
        document.getElementById("operator").value = "";
        displayResult.innerHTML = "";
    })
})