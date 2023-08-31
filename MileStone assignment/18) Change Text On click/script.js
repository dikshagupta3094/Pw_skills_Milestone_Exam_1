let button = document.getElementById("btn");
let text = document.getElementById("heading")
function ChangeText(){
    
    if(text.textContent.includes("The most affordable learning platform")){
        text.textContent = "PW Skills"
        
    }
    else{
        text.textContent ="The most affordable learning platform"
        // text.classList.add('translate')
    }
}