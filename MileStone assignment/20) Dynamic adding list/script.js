let array = [
    "HTML and Semantics",
    "Starting with CSS", 
    "Working Template",
    " Mobile responsive webpages",
    " Grid and Flex-box in CSS",
    "Projects using HTML & CSS",
    "Version Control and Git",
    "Getting Started with JavaScript",
    "Advance JavaScript",
    "Working with DOM",
    " Making Projects using HTML, CSS and JavaScript",
    "Understanding Fundamental of Computer Science",
    "Getting Started with Database",
    " Understanding the Database",
    "Starting with NodeJS and Express",
    "Understanding React and its Fundamentals",
    "Understanding Hooks and Routers",
    "Starting and Completing Full Fledge Projects"
]

let add_btn = document.querySelector("#add");
let delete_btn = document.querySelector("#delete");
let ol = document.querySelector('.ordered-list');
let counter = 0;
add_btn.addEventListener('click',()=>{
    let li =  document.createElement('li');
    let p = document.createElement('p')
   if(array.length>counter){
    p.innerHTML = array[counter]
    console.log(li);
    li.appendChild(p)
    ol.appendChild(li)
    counter++;
   }
   else{
    alert("All items have been added")
   }
 //delete btn
   delete_btn.addEventListener('click',()=>{
    console.log(ol);
    li.removeChild(p)
    ol.removeChild(li);
   }) 
})



