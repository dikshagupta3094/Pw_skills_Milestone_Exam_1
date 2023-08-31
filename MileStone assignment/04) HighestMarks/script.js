
let submitBtn = document.getElementById("submit-btn")

function  findHighestMarks(){
   
    let result = document.getElementById("display");

    let marks = [];
 
    for(let j =1;j<=5;j++){
    let input = document.getElementById("student"+j);
     let arrayValue  = parseInt(input.value);
       marks.push(arrayValue);
    }
    
    let highest_marks =0;

    for(let i =0;i<marks.length;i++){
        highest_marks = highest_marks < marks[i] ? highest_marks  = marks[i] : highest_marks;
    }

     result.innerHTML ="Highest marks: "+ highest_marks;
     result.style.fontSize = "20px";
     result.style.backgroundColor = "green";
     result.style.color = "white";
}


