let button = document.getElementById('SubmitBtn')

function reload(){
    location.reload();
 }

button.addEventListener('click',()=>{
    let EmailInput = document.getElementById('inputEmail').value;
    let PasswordInput = document.getElementById('inputPassword').value;
    let Result  = document.getElementById('result');
    if( EmailInput.includes('@') && PasswordInput.length>=8){
        Result.innerHTML = "Valid Email and password";
        Result.style.color = "Green";
    }
    else if( EmailInput==="" && PasswordInput.length===0){
        alert("Fullfill the details");
    }  
    else{
        Result.innerHTML = "Invalid Email and password";
        Result.style.color = "Red";
    }

    setTimeout(reload,3000);
})
