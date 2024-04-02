

const numbers = [5,66,4,33,78,87,56];


let val;

// Get array length
val = numbers.length;

// Check if is array
val = Array.isArray(numbers);

// Get a single value
val = numbers[0];
val = numbers[7];

// Insert into array
// val = numbers[1] = 33;

// Find the index of value

val = numbers.indexOf(100); // if array match is return the index else -1

// console.log(val);

// Mutating Array

// Add on the end
// numbers.push(1000);

// Add on the front
// numbers.unshift(2000);

// Take off from end
// numbers.pop();

// Take off from front
// numbers.shift();

// console.log(numbers);


const fruits = ["Apple", "Orange", "Lemon"];

// Splice can help to add and remove

// Remove
// fruits.splice(0,1);

// Add
// fruits.splice(1,0,"Kiwi");

// Reverse the array
val = numbers.reverse();




console.log(val);