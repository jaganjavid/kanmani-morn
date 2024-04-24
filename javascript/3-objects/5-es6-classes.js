
class Person{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greeting(){
        return `Hello there ${this.firstName} ${this.lastName}`
    }
}


class Customer extends Person{

    constructor(firstName, lastName, phone, membership) {
        super(firstName, lastName);
        this.phone = phone;
        this.membership = membership;
    }

    greeting(){
        return `Hello there ${this.firstName} ${this.lastName} welcome`
    }

}


const javid = new Person("Jagan", "Javid");
const john = new Customer("John", "Doe", "222-2222-2222", "prime");

// console.log(javid.greeting());

// console.log(javid);
// console.log(john.greeting());
