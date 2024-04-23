
function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

// Move a getfullname tp prototype

// console.log(Person.prototype);

Person.prototype.getFullName = function(){
    return this.firstName + " " + this.lastName;
}

// Person.prototype.__proto__.getFullName = function(){
//     return this.firstName + " " + this.lastName;
// }


const javid = new Person("Jagan", "Javid");
const jagan = new Person("Javid", "Jagan");

console.log(jagan)

console.log(jagan.getFullName());
console.log(javid.getFullName());




let a = 1;

console.log(a);

let b = a;

a = 2;

console.log(b);


console.log(a);
console.log(b);


let c = {
    a:1
}

let d = c;

console.log(c);
console.log(d);

d.a = 2;

console.log(c)
console.log(d)
