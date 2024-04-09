

// document.getElementsByClassName();

const items = document.getElementsByClassName("collection-item"); // HTML COLLECTION

// const tagItems = document.getElementsByTagName("h5");


// const arr = [1,2,3,4,5];

// console.log(Array.isArray(items));
// console.log(Array.isArray(arr));


// Convert to array

let lists = Array.from(items);


// for(let i = 0; i < items.length; i++){
//     items[i].style.color = "blue";
// }

// items.forEach(function(element){
//   console.log(element);
// })

// lists.forEach(function(element, index){

//    console.log(element);
//    console.log(index);

// })


const listItems = document.querySelectorAll(".collection-item"); // NodeList

// console.log(Array.isArray(listItems));

listItems.forEach(function(element){
    console.log(element);
})





