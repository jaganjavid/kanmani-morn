

const person = {

    // Properties
    firstName:"Jagan", // name and value or key and value
    lastName:"Javid",
    age: 26,
    email:"jj@gmail.com",
    hasKids:true,
    hobbies:["Music", "Sports"],
    address:{
        city:"Chennai",
        state:"TN"
    },
    // Method
    getFullName: function(){
        return person.firstName + " " + person.lastName;
    }

}


let val;

val = person.firstName; // ***
val = person["lastName"];
val = person.age;
val = person.email;
val = person.hasKids;
val = person.hobbies[0];
val = person.address.city;
val = person.getFullName();

console.log(val);