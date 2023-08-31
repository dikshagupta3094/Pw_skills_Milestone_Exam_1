//Making variables
let inputBox = document.getElementById('inputBox');
let addBtn = document.getElementById('addBtn');
let todolist = document.getElementById('todolist');
let editTodo = null;
addBtn.addEventListener('click',()=>{
    let value = inputBox.value.trim();
    if(value.length<=0){
        alert("Write something in your to do list");
    }

     else if(addBtn.innerHTML==="Edit"){
           editTodo.target.previousElementSibling.innerHTML= inputBox.value;
           addBtn.innerHTML = "Add";
           inputBox.value = "";
    }

    else{
        // create list
        let li = document.createElement('li');
        let p = document.createElement('p');
        p.innerHTML = value;
        li.appendChild(p);
        todolist.appendChild(li)
        

        //create edit button
        let editBtn = document.createElement("button")
        editBtn.innerText = "Edit";
        li.appendChild(editBtn);
        todolist.appendChild(li);
        editBtn.classList.add("btn","editBtn");

       // Event listener on edit button
       editBtn.addEventListener('click',(e)=>{
           inputBox.value  = e.target.previousElementSibling.innerHTML;
           inputBox.focus();
           addBtn.innerHTML = "Edit";
            editTodo = e;
       })


        //create delete button
        let deletBtn = document.createElement("button")
           deletBtn.innerText = "X";
            li.appendChild(deletBtn);
            todolist.appendChild(li);
            deletBtn.classList.add("btn","deleteBtn");
           
            //event listener on delete button 
            deletBtn.addEventListener('click',()=>{
                li.removeChild(p);
                todolist.removeChild(li);
            })
            inputBox.value = "";   
    }

    
})
