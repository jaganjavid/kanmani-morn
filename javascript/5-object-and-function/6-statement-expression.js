

//  Function statement

// greet();

// function greet(){
//     console.log("HAI");
// }

// greet();


// Function expression

// Assing them to a var

// anonymousGreet();

var anonymousGreet = function(){
    console.log("Hello");
}

// anonymousGreet();

// Pass them around

function log(a){
    a();
}

log(anonymousGreet);

var a = 5;
var b = {name:"Test"}
function innerTest(){
    return "Hello"
}

var result = innerTest();

var test = function(a,b,c){
    console.log(a,b,c)
}

test(a,b,result);

// On the fly

log(function(){
    console.log("Vanakam");
})