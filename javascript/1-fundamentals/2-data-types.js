

// String, Number, Boolean, Undefined, NUll, BigInt, Symbols


// Primitive Types

// String
const name = "Jagan";

// console.log(name);
// console.log(typeof name);

// Number
const age = 26;

// console.log(age);
// console.log(typeof age);

// Boolean
const hasCruise = true;

// console.log(hasCruise)
// console.log(typeof hasCruise)

let undef;

// console.log(undef);
// console.log(typeof undef);

// Null
const box = null;

// console.log(box);
// console.log(typeof box);

// Reference Types

const myArr = [
    "Jagan",
    "Javid",
    25,
    true,
    null,
    undefined
];

// console.log(myArr);
// console.log(typeof myArr);

// console.log(myArr[2]);

// Key - value or Name - Value
const car = {
     name:"BMW",
     color:"Black",
     model: "5 series",
     year: 2022,
     start: function(){
        console.log("Yeah im started");
     },
     break: function(){
        console.log("Yeah im Stopped");
     }
}

// console.log(car);
// console.log(typeof car);

console.log(car.name);
console.log(car.color);
car.start();

