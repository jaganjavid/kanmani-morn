

let val;

const list = document.querySelector(".collection");
const listItem = document.querySelector("li:last-child")

val = list;
val = list.childNodes;
val = list.childNodes[0].nodeName;
val = list.childNodes[1].nodeName;
val = list.childNodes[2].nodeName;
val = list.childNodes[1].nodeType;


// 1 - Element
// 3 - Text Node
// 8 - Comment

// Get the children element 

val = list.children; // ***
val = list.children[0];
val = list.children[1];
val = list.children[1].innerText = "Hello Good morn";
val = list.children[1].style.color = "brown";
val = list.children[3].children[0];

// FirstChild
val = list.firstChild;
val = list.firstElementChild;

// LastChild
val = list.lastChild;
val = list.lastElementChild;

// Count child node
val = list.childElementCount;

// Get parent node
val = list.parentElement;

val = listItem;
val = listItem.nextElementSibling;

val = listItem.previousElementSibling;


console.log(val);