let button = document.getElementById('btn')
let dishPrice = document.getElementById('PriceOfDish')
let array = new Array();
let sum = 0;

button.addEventListener('click', CalcTotalBill);

function CostOfDish (event){
  if(event.key==="Enter"){
    let dishPriceValue = parseInt(dishPrice.value);
    dishPrice.value = "";
    console.log("Value",dishPriceValue);

    // Value append to p
    let display  = document.getElementById('display')
    let PValue = document.createTextNode(dishPriceValue)    
    display.appendChild(PValue)

    //value stored in array
    array.push(dishPriceValue);
    console.log(array);
  //  console.log('Total',sum);
    display.innerHTML+= `<br>`
  }
  return array;
}

function CalcTotalBill(){
  let NumOfPeople = document.getElementById('people').value
  console.log(NumOfPeople);
  let TotalCostOfDish =  CostOfDish(event);
  console.log(TotalCostOfDish);
  for(let i =0;i<TotalCostOfDish.length;i++){
    sum+= TotalCostOfDish[i];
  }
  let BillSpillter = parseInt(sum/NumOfPeople);
  console.log(BillSpillter);
  document.getElementById('result').innerHTML = `Cost of total dish is ${sum} and cost of each dish per person ${BillSpillter}`;
}




// let p = document.createElement('p')
// let PArrayVal = Array.from(PValue.textContent)
// console.log(PArrayVal);
// display.appendChild(PArrayVal)
// let val = Array.from(ArrVal)
// console.log(val);
// display.innerHTML = dishPriceValue; 




