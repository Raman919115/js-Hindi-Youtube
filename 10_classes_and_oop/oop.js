const user = {
    username : "hitesh",
    loginCount : 8,
    signedIn : true,

    getUserDetails : function(){
        console.log("Got user details from database");
        console.log(`Username: ${this.username}`);
        console.log(this);
    }

} 

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

// example of constructor function

class User {
    constructor(name) {
      this.name = name;
    }
  }
  
//   const user1 = new User("Akshay"); // ← this is an instance of the User class
//   const user2 = new User("Hitesh"); // ← this is an instance of the User class
//   console.log(user1); // Output: User { name: 'Akshay' }
//   console.log(user2); // Output: User { name: 'Hitesh' }
  
//   console.log(user1 instanceof User); // true   check if something is an instance


// | Concept      | Meaning                         |
// | ------------ | ------------------------------- |
// | `User`       | A blueprint (class)             |
// | `new User()` | Makes a real object (instance)  | new keyword creates a new object (an instance) using the User class.
// | `user1`      | An instance of the `User` class |
// | `this.name`  | Sets the name inside the object |



function RealUser(username, loginCount, isLoggedIn){
    this.username = username;    //  left handside wali value variable h or right handside value   jo aap pass krke de rhe ho
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn; 

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    // return this    // return this krte hi humne object ko pass on kr diya ||| or ye this return krein ya na krein ye optional h
}

const user1 = new RealUser("Hitesh", 12, true)
const user2 = new RealUser("ChaiAurCode", 11, false)
// console.log(user1);
// console.log(user1.constructor);
console.log(user1 instanceof RealUser);
// console.log(user2);


// jasie aap new keyword use krege to sabse phele empty object create hota h or usse instance bola jaata h . 
// steps
// 1 object create ho rha h
// 2 constructor function call hota h new keyword k kaarn , ye(constructor function) jitne bhi argument hote h unko pack krke de deta h
// 3 ye this keyword h or jitne bhi argument likhe h ye sb isme inject ho jaate h 
// 4 or saare aapko function k ander mil jaate h

