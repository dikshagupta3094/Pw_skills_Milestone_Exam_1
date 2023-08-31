
let button = document.getElementById('btn')
let NumOfDays = document.getElementById('NumOfDays')
let TypeOfCar = document.getElementById('Type')
let result =  document.getElementById('display')

button.addEventListener('click',()=>{
    let car_rented_per_day = 0;
    let NumOfDaysVal  = parseInt(NumOfDays.value);
    console.log(NumOfDaysVal);
    let TypeOfCarVal  =TypeOfCar.value
    console.log(TypeOfCarVal);

    if(TypeOfCarVal==="Economy"){
      car_rented_per_day = 4000;
    }

    else if(TypeOfCarVal==="Midsizd"){
        car_rented_per_day = 10000;
    }

    else if(TypeOfCarVal==="Luxury"){
        car_rented_per_day = 20000;
    }

    else{
       result.innerHTML = "Invalid Input"
       return;
    }
    
    const total_cost =  car_rented_per_day*NumOfDaysVal;
    console.log(total_cost);
    result.innerHTML = `Total cost per day ${total_cost}`;
});