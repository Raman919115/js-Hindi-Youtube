const user = {
    username : "hitesh",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()   // yaha tak current context mein username ki value hitesh hai
// user.username = "sam"   // yaha pe humne context change krdiya ,context ka simple mtlb hai value
// user.welcomeMessage()
// console.log(this);   // node environment mein current context hai {} empty object
        // browser k {ander jo sabse jayda  global object hai wo winddow object h

// function chai(){
//     let username = "hitesh" 
//     console.log(this.username); // it gives result undefined  
// }

// chai()

// const chai = function(){
//     let username  = "hitesh"
//     console.log(this.username);
// }

// const chai = () => {            //Arrow function
//     let username  = "hitesh"
//     console.log(this.username);
// }


// chai()

// explicit arrow function 
// const addTw0 = (num1, num2) => {     // agar {} curly braces mein wrap kiya to return keyword  likhna hi padega  
//     return num1 + num2 
// }

// implicit arrow function        implicit means maan liya
// const addTw0 = (num1, num2) =>  num1 + num2

// const addTw0 = (num1, num2) =>   (num1 + num2)     // another method to implement implicit arrow function 
                                                 // agar  () parenthisis  mein hi wrap kiya h to return keyword nhi likhna padega
                                                 
// how to Object in arrow function
 const addTw0 = (num1, num2) =>   ({username : "hitesh"})   // object ko return krne k liye object ko () parenthesis mein wrap krena hi padega

console.log(addTw0(3, 4))
