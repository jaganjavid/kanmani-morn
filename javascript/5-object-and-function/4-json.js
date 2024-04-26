

var objectLiterals = {
    firstName:"Jagan",
    isProgrammer: true
}

console.log(objectLiterals);

console.log(JSON.stringify(objectLiterals))

var jsonValue = JSON.parse(`{"firstName":"Jagan","isProgrammer":true}`);

console.log(jsonValue);
