const newListButton = document.querySelector(".new-task");

newListButton.addEventListener("click", addNewTask);
//Adding a new task function
function addNewTask() {
    const list = document.querySelector(".list");
    //Creates a new div
    const newTaskElement = document.createElement("div");
    //Gives my new div a class
    newTaskElement.classList.add("task");
    //Creates my innerhtml elements on the div.
    newTaskElement.innerHTML = "<ion-icon name='close-circle-outline' class='delete'></ion-icon><p contenteditable = 'true' class='editable-task'>New Task</p><ion-icon name='checkbox-outline'class='checkmark'></ion-icon>";
    //Adds my element to the parent (list)
    list.appendChild(newTaskElement);
    const checkmarkBtn = document.querySelectorAll(".checkmark") 
    const deleteTaskBtn = document.querySelectorAll('.delete')
    checkmarkBtn.forEach(element => {
        element.addEventListener("click", finishTask)
    });
    deleteTaskBtn.forEach(element => {
        element.addEventListener("click", deleteTask)
    })
    
    

    
  }
  
    
   
//Remove the task from the list.
   function deleteTask(event) {
    const closestTask = event.target.closest('.task')
    closestTask.classList.add('removed')
    
    
   }
    //Function, for when a task is completet, it should toggle the finished class and run the confetti.
    function finishTask(event) {
        const checkmark = event.target
        
        checkmark.classList.toggle('finished')
        if (checkmark.classList.contains('finished')) {
            confetti()
        }

    }


    //Confetti canvas
    var myCanvas = document.createElement('canvas');
document.body.appendChild(myCanvas);



//Confetti effect
var myConfetti = confetti.create(myCanvas, {
  resize: true,
  useWorker: true
});
myConfetti({
  particleCount: 100,
  spread: 160,
  
  // any other options from the global
  // confetti function
});

    // const randomNum = ["Test1", "2", "3", "4", "5"]

    // const randomElement = randomNum[(Math.floor(Math.random() * (randomNum.length)))];

    // console.log(randomElement);