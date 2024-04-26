
var person = {
    firstName:"Jagan",
    lastName:"Javid",
    email:"jagan@gmail.com",
    address:{
        street: "222 main str...",
        city:"Chennai",
        state:"TN"
    },
    getFullName: function(){
        return `${this.firstName} ${this.lastName}`
    }
}

console.log(person);