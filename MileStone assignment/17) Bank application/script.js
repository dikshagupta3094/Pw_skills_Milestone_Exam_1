const customer = {
    name:'Diksha Gupta',
    balance: 2000
}

//Function to update an amount
function updateBalance(){
    let result = document.getElementById('result') 
    result.innerHTML = customer.balance;
}


//Function to deposit
let deposit = document.getElementById('Deposit')
deposit.addEventListener('click',function deposit(){
    let amount = parseInt(document.getElementById('balance').value)
    if(isNaN(amount)||amount<=0){
        alert("Wrong input")
        return;
    }
    customer.balance+= amount
   updateBalance();
})


//Function to withdraw an amount
let withdraw = document.getElementById('WitBtn')
withdraw.addEventListener('click',()=>{
    let amount = parseInt(document.getElementById('balance').value)
    if(isNaN(amount)||amount<0){
        alert("Invalid number")
        return;
    }

    if(amount>customer.balance){
        alert("Insufficent balance can not withdraw amount")
        return;
    }
    customer.balance-= amount;
    updateBalance();
})
