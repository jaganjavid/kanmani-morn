
function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

// Greeting
Person.prototype.greeting = function(){
    return `Hello there ${this.firstName} ${this.lastName}`;
}

Person.prototype.test = function(){
    return `im a test`;
}

const javid = new Person("Jagan", "Javid");

// Customer Object

function Customer(firstName, lastName, phone, membership){
    Person.call(this, firstName, lastName);
    this.phone = phone;
    this.membership = membership; 
}



// Inherit the person prototype methods to customer
Customer.prototype = Object.create(Person.prototype);

Customer.prototype.constructor = Customer;

// Customer.prototype.greeting = function(){
//     return `Hello there ${this.firstName} ${this.lastName} welcome to our company`;
// }

const javidCustomer = new Customer("Jagan", "Javid", "111-1111-111", "standard");

console.log(javidCustomer);
console.log(javidCustomer.greeting());











