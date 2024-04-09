

// document.getElementById();


// console.log(document.getElementById("task-title"));

const taskTitle = document.getElementById("task-title");

// console.log(taskTitle);

// Change Style

taskTitle.style.backgroundColor = "blue";
taskTitle.style.color = "#ffffff";
taskTitle.style.padding = "15px";


// Change Content
taskTitle.innerText = "Hello";

// document.querySelector();

// console.log(document.querySelector("#btn-test"));
// console.log(document.querySelector(".card-action"));
// console.log(document.querySelector("h5"));

document.querySelector("li").style.color = 'green';
document.querySelector("li:nth-child(2)").style.color = 'blue';