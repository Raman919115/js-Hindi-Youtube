// if
const isUserloggedIn = true;
const temperature = 41;

// if(temperature < 50){
//     console.log("less than 50");
// } else{
// console.log("temperature is greater than 50");
// }

// if(2 !== 3){
//     console.log("executed");
// }

// <, >, <=, >=, ==, !=, ===, !==
// const score = 200
//  if (score > 100){
//     const power = "fly"
//     console.log(`User power: ${power}`);
//  }

// console.log(`User power: ${power}`);

const balance = 1000;

// if (balance > 500) console.log("test"),console.log("test2");   //short hand notation of if condition it's very code practice

// if (balance < 500) {
//   console.log("less than 500");

// } else if (balance < 750) {
//   console.log("less than");

// } else if (balance < 900) {
//   console.log("less than 900");

// } else {
//   console.log("less than 1200");
// 

const userLoggedIn = true 
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3){  // in and(&&) condition we can check multiple condtition
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail ){  //in in or(||) condition we can check multiple condition
    console.log("user logged in");
}