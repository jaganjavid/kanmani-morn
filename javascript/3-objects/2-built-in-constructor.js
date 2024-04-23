

// String

const name1 = "Jagan";
const name2 = new String("Jagan");


// console.log(name1);
// console.log(typeof name1);

// console.log(name2)
// console.log(typeof name2);

// if(name1 === name2){
//    console.log("Yes Im Matching")
// }else{
//     console.log("Im Not Matching")
// }

const num1 = "5";
const num2 = new Number(5);

console.log(num1)
console.log(num2)

// Boolean
const bool1 = true;
const bool2 = new Boolean(false);

console.log(bool1)
console.log(bool2);

// Function
const getSum1 = function(x, y){
    return x + y;
}

console.log(getSum1(5,5));

const getSum2 = new Function("x", "y", "return x + y");

console.log(getSum2(10, 10));

const obj1 = {name:"javid"};
const obj2 = new Object({name:"javid"});

console.log(obj1)
console.log(obj2)

const arr1 = [1,2,3,4,5];
const arr2 = new Array(1,2,3,4,5);

console.log(arr1);
console.log(typeof arr1);
console.log(arr2);
console.log(typeof arr2);


function test(){
    console.log(test);
}

test.x = "Hello";


console.log(test.x);