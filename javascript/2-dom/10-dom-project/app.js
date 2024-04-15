// Define UI Vars

const form = document.querySelector("#task-form");
const taskInput = document.querySelector("#task");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");


// Load All Event Listeners

function loadEventListeners(){
    
    // Add Task Event
    form.addEventListener("submit", addTask);

    // Remove Task Event
    taskList.addEventListener("click", removeTask);

}

loadEventListeners();



// Event for add a element

function addTask(e){
   
    e.preventDefault();

    // Add a Validation

    if(taskInput.value === ""){
        alert("Please fill the form");
    } else {
      
        // Create a li element
        const li = document.createElement("li");

        // Add a class to li
        li.className = "collection-item";

        // Create text node
        li.appendChild(document.createTextNode(taskInput.value));

        // Create a new link element
        const link = document.createElement("a");

        // Add class to link
        link.className = "delete-item secondary-content";

        // Add a icon to html
        link.innerHTML = `<i class="fa fa-remove"></i>`;

        // Append a link to li
        li.appendChild(link);

        // Append to ul
        taskList.appendChild(li);

        // remove a value in input
        taskInput.value = "";


    }
    

}


// Event for remove element

function removeTask(e){

    if(e.target.parentElement.classList.contains("delete-item")){
       if(confirm("Are you sure")){
         e.target.parentElement.parentElement.remove();
       }
    }

}


