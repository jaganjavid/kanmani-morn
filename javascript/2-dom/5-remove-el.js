

// Replace Element

const newHeading = document.createElement("h4");
newHeading.id = "task-title";

newHeading.appendChild(document.createTextNode("Task Title"));

const oldHeading = document.querySelector("#task-title");


const cardAction = document.querySelector(".card-action");

cardAction.replaceChild(newHeading, oldHeading);


// Remove Element

const lists = document.querySelectorAll("li");


// lists[0].remove();
// lists[4].remove();

// Class & Attr

const firstLi = document.querySelector("li:first-child");

const link = firstLi.children[0];

let val; 

val = firstLi.className;
val = link.classList; // DOMTOKENLIST

val.add("bruh");

val.forEach(function(cls){
    console.log(cls);
})

val.remove("test");

console.log(val.contains("bruh"));

val.replace("bruh", "Bruh");

console.log(val.contains("bruh"));

