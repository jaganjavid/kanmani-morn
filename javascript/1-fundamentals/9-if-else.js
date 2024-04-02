// if(something){
//     do something
// }else{
//     do something else
// }


const id = 100;


// Equal to value
if(id == "100"){
    console.log("CORRECT");
} else{
    console.log("INCORRECT");
}

// Not Equal to value
if(id != 100){
    console.log("CORRECT");
} else{
    console.log("INCORRECT");
}

// Equal to value and type
if(id === 100){
    console.log("CORRECT");
} else{
    console.log("INCORRECT");
}

// Not equal to value and type
if(id !== "100"){
    console.log("CORRECT");
} else{
    console.log("INCORRECT");
}

// Test if undefined

let greet = "Hello";

if(typeof greet !== "undefined"){
    console.log(`true : ${greet}`)
} else {
    console.log(`false : ${greet}`)
}

// Greater or less than

if(100 >= 99){
    console.log("CORRECT");
} else{
    console.log("INCORRECT");
}

if(100 <= 99){
    console.log("CORRECT");
} else{
    console.log("INCORRECT");
}

// if else

const color = "green";

if(color === "red"){
    console.log(`Color is ${color}`)
} else if(color === "blue"){
    console.log(`Color is ${color}`)
} else{
    console.log("IDK");
}

// Logical Operator

const name = "Javid";
const age = 16;

// AND - && check both value are true

if(age > 0 && age < 12){
    console.log(`${name} is a child`);
} else if(age >= 13 && age <= 19){
    console.log(`${name} is a teen`);
} else {
    console.log(`${name} is a adult`);
}

// OR - || check one true or false

if(age < 16 || age > 66){
    console.log(`${name} can not run the race`);
} else{
    console.log(`${name} can run the race`);
}

// Ternary operator

console.log(100 === 100 ? "CORRECT" : "INCORRECT");