
function Person(firstName, lastName){

    this.firstName = firstName;
    this.lastName = lastName;
    this.getFullName = function(){
        return this.firstName + " " + this.lastName;
    }

}

const javid = new Person("Jagan", "Javid");


console.log(javid.getFullName());





// function test(){
//     console.log("Hai");
// }

// const result = new test();

// console.log(result);