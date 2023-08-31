
 let calBtn = document.getElementById("button")
 let result =  document.getElementById("result")
 let vowelcounter = 0;

 function reload(){
    location.reload();
 }
 calBtn.addEventListener("click",()=>{
    let input = document.getElementById("input").value.toLowerCase();

    
    for(let i =0;i<input.length;i++){
        if(input[i]=="a"||input[i]=="e"||input[i]=="i"||input[i]=="o"||input[i]=="u"){
            vowelcounter++;
        }
    }

    result.innerHTML = input+" has "+vowelcounter+" vowels" ; 

     setTimeout(reload,3000)
 })

