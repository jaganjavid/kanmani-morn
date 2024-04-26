

const person = new Object();

person["firstName"] = "Jagan";
person["lastName"] = "Javid";
person.email = "jagan@gmail.com"; // ***

person.address = new Object();
person.address.street = "111 main st";
person.address.city = "Chennai";
person.address.state = "TN";

person.getFullName = function(){
    return `${this.firstName} ${this.lastName}`;
} 

console.log(person.getFullName());