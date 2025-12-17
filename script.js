const toDoList = document.getElementById('toDoList');
const newToDoInput = document.getElementById('newToDoInput');
const addTodoBtn = document.getElementById('addToDoBtn');

addTodoBtn.addEventListener("click",()=>{
    const newToDoText = newToDoInput.value;

 if(newToDoText!==""){
   const newToDoItem = document.createElement('li');
   newToDoItem.innerText = newToDoText;
   const deleteTodoBtn = document.createElement("button");
   deleteTodoBtn.innerText = "X";

   deleteTodoBtn.classList.add("delete-todo-btn");
   deleteTodoBtn.addEventListener('click',function(){
   newToDoItem.remove();
   });

newToDoItem.appendChild(deleteTodoBtn);
toDoList.appendChild(newToDoItem);
newToDoInput.value = "";
}
});