

const name = "Javid";
const age = 1000;
const job = "Web Developer";
const city = "Chennai";


let html;

// Without Template Strings

html = "My name is " + name + " " + "im" + " " + age + " " + "my job is " + job + " from" + city;


// With Template Strings

html = `My name is ${name} im ${age} my job is ${job} and im from ${city}`;
 


console.log(html);