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
         removeTaskFromLocalStorage(e.target.parentElement.parentElement);
       }
    }

}

// function removeTaskFromLocalStorage(taskElement){

//     let tasks;

//     if(localStorage.getItem("tasks") === null){
//         tasks = [];
//     } else {
//        tasks = JSON.parse(localStorage.getItem("tasks"));
//     }
    
  
//     tasks.forEach(function(task, index){
//         if(taskElement.innerText === task){
//           tasks.splice(index,1)
//         }
//     })

//     localStorage.setItem("tasks", JSON.stringify(tasks));

// }

function removeTaskFromLocalStorage(taskElement) {
    // Get tasks from localStorage or initialize an empty array
    let tasks = JSON.parse(localStorage.getItem("tasks") || "[]");

    // Find index of the task to remove
    const indexToRemove = tasks.findIndex(task => task === taskElement.innerText);

    // Remove the task if found
    if (indexToRemove !== -1) {
        tasks.splice(indexToRemove, 1);
    }

    // Update localStorage with the updated tasks array
    localStorage.setItem("tasks", JSON.stringify(tasks));
}



// Clear All Tasks

function clearTask(){
    taskList.innerHTML = "";
    // taskList.remove();

    clearTaskFromLocalStorage();
}

function clearTaskFromLocalStorage(){
    localStorage.removeItem("tasks");
}



// JSON

// const array = ["Jagan", "Javid"];

// console.log(array);

// arrayToString = JSON.stringify(array);

// console.log(arrayToString);

// stringToArray = JSON.parse(arrayToString);

// console.log(stringToArray);


// const colors = ["red", "green", "blue"];


// colors.splice(1,0,"orange");


// console.log(colors);


const array = [1,2,3,4,5];

const result = array.findIndex(function(item){
    return item === 4
});

console.log(result);