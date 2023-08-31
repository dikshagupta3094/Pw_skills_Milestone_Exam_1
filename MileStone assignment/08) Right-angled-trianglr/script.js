
 
let button = document.getElementById("button")
let display = document.getElementById("display")
function reload(){
    location.reload();
}
button.addEventListener("click",()=>{
let n = document.getElementById("input").value
let right = "";
   for(let i =1;i<=n;i++){
    for(let j =1;j<=n-i+1;j++){
        right+="* "
    }
    right+="<br>"
   
}

display.innerHTML = right;
display.style.color = "#009900"
display.style.fontSize = "30px"
display.style.fontWeight = "900"


  console.log(right)
  setTimeout(reload,2000)
})
   
    