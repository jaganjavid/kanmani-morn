

// Two Phases

// 1 - Creation
// 2 - Exectation



//  Function Decalaration - Function Statement

// console.log(greet("Jagan", "Javid"));

function greet(firstName = "John", lastName = "Doe"){
    
    // if(typeof firstName === "undefined"){
    //     firstName = "John";
    // }

    // if(typeof lastName === "undefined"){
    //     lastName = "Doe";
    // }

    return `${firstName} ${lastName}`;
}


// console.log(greet("Jagan", "Javid"));


// Function Expression

// add(5,5);



// var add = function(x, y){
//   console.log(x + y);
// }


// add(5,5);

// Immediately invoked function expression)

(function(name){
  console.log(`Hello ${name}`)
})("Jagan");