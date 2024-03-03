// Primitive

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;          // null

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 484034095847342323839298n



// Reference (Non primitive)

// Array, Objects, Functions 

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof outsideTemp);



// ****************************************************************

//  Stack (Primitive), Heap (Non-Primitive)

// stack mein original value change nhi hoti hai
// Heap mein original value change hoti hai 

let myYoutubename = "hiteshchoudharydotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);


let userOne = {
    email : "user@google.com",
    upi : "user@google.com"
}

let userTwo = userOne

userTwo.email = "hitesh@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);