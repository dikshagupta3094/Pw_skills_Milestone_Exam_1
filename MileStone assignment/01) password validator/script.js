let submit = document.getElementById("Submit");

    submit.addEventListener("click",()=>{
    let reset = document.getElementById("Reset");
    let Pinput = document.getElementById("Pinput").value;
    let Cinput = document.getElementById("Cinput").value;
    let message = document.getElementById("display");
    if(Pinput.length!=0){
        if(Pinput==Cinput){
            message.textContent = "Password matched you can submit"
            message.style.color = "Green";
            message.style.fontSize = "15px";
            message.style.backgroundColor= "white";
            message.style.textAlign = "center";
        
        }
        else{
            message.textContent = "**Password do not matched**"
            message.style.color = "red";
            message.style.fontSize = "15px";
            message.style.backgroundColor= "white";
            message.style.textAlign = "center";
        }
        reset.addEventListener("click",()=>{
            message.textContent = " ";
            document.getElementById("Pinput").value = "";
            document.getElementById("Cinput").value = "";
        })
    }
   else{
     alert("Please give the password");
   }
    })

