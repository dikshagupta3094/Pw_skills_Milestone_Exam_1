
let clickBtn = document.getElementById("btn");


function chagecolor(){
   let color1 = document.getElementById("color1")
   let color2 = document.getElementById("color2")

  let updatecolor = color1.value.toLowerCase() + color2.value.toLowerCase();

  switch(updatecolor){
  
   case 'redblue':
   document.body.style.background = "purple";
   break;

   case 'bluered':
      document.body.style.background = "purple";
       break;

   case 'redyellow':
   document.body.style.backgroundColor = "orange";
    break;

    case 'yellowred':
      document.body.style.background = "orange";
      break;

   case 'blueyellow':
      document.body.style.background = "green";
      break;
   case 'yellowblue':
      document.body.style.background = "green";
      break;

      default:
         alert("Inavlid color combination")
         document.body.style.background = "transparent";
  }


}