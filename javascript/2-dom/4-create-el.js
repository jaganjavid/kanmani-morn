

// Create Element
const li = document.createElement("li");


// Add Class 
li.className = "collection-item";
// li.setAttribute("class", "collection-item");


// Add Id
// li.id = "test";

// Add id
li.setAttribute("id", "test");

// Create a text node and append
li.appendChild(document.createTextNode("Hello world"));

// Create a new link element
const link = document.createElement("a");

// Add a classname to link
link.className = "delete-item secondary-content";

// Add icon to link
link.innerHTML = `<i class="fa fa-remove"></i>`;

// add a link to li
li.appendChild(link);

// add a li to ul
document.querySelector(".collection").appendChild(li);

// console.log(li);
// console.log(link);

