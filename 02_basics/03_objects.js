// singleton
// Object.create    it is used to define objects as constructor

// objects ko agar literals ki tarah declare krein to singleton nhi bnta hai
// constructor se agar declare krein to hamesha singleton banega

// object literals

const mySym = Symbol("key1")   // declaring symbol datatype   

const JsUser = {
    name : "Hitesh",
    "full name" : "Hitesh Choudhary",
    [mySym]: "myKey1",      // declaring symbol datatype in objects
    age : 18,
    location : "Jaipur",
    email : "hitesh@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}

// console.log(JsUser.email);    // first method to acces objects 
// console.log(JsUser["email"]); // second method to access objects and access symbol from objects
                                // this method is used specially where the key name has two or more words

// console.log(JsUser["full name"])
// console.log(JsUser[mySym]);     //access symbol value from objects
 
JsUser.email = "hitesh@chatgpt.com"  // object value changed/overwrite
// console.log(JsUser)

// Object.freeze(JsUser)               // to freeze the object i.e. object mein koi change na krske
JsUser.email = "hitesh@microsoft.com" 
// console.log(Js User)

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user,${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
