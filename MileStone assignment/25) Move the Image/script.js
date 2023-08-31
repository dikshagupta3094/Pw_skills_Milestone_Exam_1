

let image = document.querySelector('#image');
let x = 0;
let y = 0;
// let step = 5;
function moveImage(xOffset, yOffset){
  x+= xOffset;
  y+= yOffset;
  image.style.transform = `translate(${x}px,${y}px)`
}

document.addEventListener("keydown",(e)=>{
    console.log(e);
    //Arrow Left key
   if(e.keyCode=='37'){
    moveImage(-5,0);
   }
    //right arrow key
   else if(e.keyCode=='39'){
    moveImage(5,0);
   }
    //up arrow key
  else if(e.keyCode=='38'){
    moveImage(0,-5);
   }
   //down arrow key
   else if(e.keyCode=='40'){
        moveImage(0,5);
   }
   else{
    alert('Please pressed arrow key')
   }
});





