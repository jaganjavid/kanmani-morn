// Define UI Vars

const form = document.querySelector("#task-form");
const taskInput = document.querySelector("#task");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");


// Load All Event Listeners

function loadEventListeners(){

    // DOM Event Load
    document.addEventListener("DOMContentLoaded", getTasks);
    
    // Add Task Event
    form.addEventListener("submit", addTask);

    // Remove Task Event
    taskList.addEventListener("click", removeTask);

    // Clear Task
    clearBtn.addEventListener("click", clearTask)

}

loadEventListeners();


// Get the task from ls
function getTasks(){

    let tasks;

    if(localStorage.getItem("tasks") === null){
        tasks = [];
    } else {
       tasks = JSON.parse(localStorage.getItem("tasks"));
    }

    tasks.forEach(function(task){
    
          // Create a li element
          const li = document.createElement("li");

          // Add a class to li
          li.className = "collection-item";
  
          // Create text node
          li.appendChild(document.createTextNode(task));
  
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

    });
    
   

}



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

        // Store in local Storage
        storeTaskInLocalStorage(taskInput.value); 

        // remove a value in input
        taskInput.value = "";

    }
    
}

function storeTaskInLocalStorage(task){
    
    let tasks;


    if(localStorage.getItem("tasks") === null){
        tasks = [];
        console.log(1);
    } else {
       tasks = JSON.parse(localStorage.getItem("tasks"));
       console.log(2);
    }

    tasks.push(task);

    localStorage.setItem("tasks", JSON.stringify(tasks));

}

// Event for remove element

function removeTask(e){

    if(e.target.parentElement.classList.contains("delete-item")){
       if(confirm("Are you sure")){
         e.target.parentElement.parentElement.remove();
       }
    }

}

// Clear All Tasks

function clearTask(){
    taskList.innerHTML = "";
    // taskList.remove();
}



const x = 5;

if(x === 5){
    console.log("Yes");
}



// JSON

// const array = ["Jagan", "Javid"];

// console.log(array);

// arrayToString = JSON.stringify(array);

// console.log(arrayToString);

// stringToArray = JSON.parse(arrayToString);

// console.log(stringToArray);

