let clickBtn = document.getElementById("btn");

clickBtn.addEventListener("click",()=>{
    let input  = document.getElementById("input").value;
    let message = document.getElementById("result");

  
    
   if(input.charAt(0).toLowerCase()){
    input =  input.charAt(0).toUpperCase()+input.slice(1);
   }
  else{
    input =  input.charAt(0).toUpperCase()+input.slice(1);
 }
    message.innerHTML = input;
    
})