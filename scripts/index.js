const newListButton = document.querySelector(".new-task");

newListButton.addEventListener("click", addNewTask);

function addNewTask() {
    const list = document.querySelector(".list");
    const newTaskElement = document.createElement("div");
    newTaskElement.classList.add("task");
    newTaskElement.innerHTML = "<ion-icon name='close-circle-outline' class='delete'></ion-icon><p contenteditable = 'true' class='editable-task'>New Task</p><ion-icon name='checkbox-outline'class='checkmark'></ion-icon>";
    
    
    list.appendChild(newTaskElement);
    newTaskElement.addEventListener("input", handleTaskInput);
    const checkmarkBtn = document.querySelectorAll(".checkmark") 
    const deleteTaskBtn = document.querySelectorAll('.delete')
    checkmarkBtn.forEach(element => {
        element.addEventListener("click", finishTask)
    });
    deleteTaskBtn.forEach(element => {
        element.addEventListener("click", deleteTask)
    })
    
    

    
  }
  function handleTaskInput(event) {
    const taskElement = event.target;
    
    
    
}
    
   

   function deleteTask(event) {
    const closestTask = event.target.closest('.task')
    closestTask.remove()
    
   }
    
    function finishTask(event) {
        const checkmark = event.target
        checkmark.classList.toggle('finished')

    }