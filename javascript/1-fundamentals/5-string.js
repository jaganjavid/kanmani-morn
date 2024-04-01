

const firstName = "Jagan bro";
const lastName = "Javid";
const age = 1000;

const str = "Hello im jagan and im a web dev";

const tags = "Web Dev,UI/UX,Designer";

let val;

val = firstName + lastName;

// Concatenation
val = firstName + " " + lastName;

val = "Hello, My name is " + firstName + " and I am " + age;

// Append
val = "John";
// val = val + " Doe";
val += " Doe"

// Concat

val = firstName.concat(" ", lastName," ", age);

// Change Case

val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[0];
val = firstName[1];

// CharAT()

val = firstName.charAt("2");
val = firstName.charAt(firstName.length - 1);

// Slice()

const furit = "Lemon";

val = furit.slice(1,4);

// Split()

val = str.split(" ");

val = tags.split(",");

// Replace
val = str.replace("jagan", "Arun");

// Include
val = str.includes("jagan");


console.log(val);