function SetUsername(username){
    //complex DB calls
    this.username = username  
    // console.log("called"); 
}

function createUser(username, email, password){
    SetUsername.call(this, username)

    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);


// Understanding Execution Contexts
// The concept of the call stack is introduced, explaining how functions are executed in a global execution context.
// Every time a function is invoked, a new execution context is created and added to the call stack, which is removed once the function execution is complete.
// The presenter emphasizes the importance of understanding how the 'this' keyword relates to the current execution context, especially when nested functions are involved.

// The Role of 'this' in JavaScript
// The keyword 'this' is discussed in relation to the current execution context, with a focus on how it can reference different contexts based on the function's invocation.
// The presenter notes that in certain situations, 'this' may refer to the global execution context, particularly in environments like the browser.
// The video highlights the difference in behavior of 'this' in Node.js, where it may not refer to the global window object.

// Practical Example of Using 'call'
// A practical example is presented where a function is defined to set a username in an application, demonstrating how 'this' can be used within method calls.
// The example illustrates the importance of ensuring that the correct context is maintained when calling methods, especially when using 'this' to access properties.
// The presenter explains how using 'call' allows for explicit binding of the context, which is crucial for accessing the appropriate properties within an object.

// Challenges with Context in JavaScript
// The video discusses potential issues that arise when the execution context is not properly maintained, particularly when methods are called within other functions.
// It is emphasized that failing to bind the correct context can result in properties not being accessible, leading to unexpected behavior.
// The use of 'call' is suggested as a solution to maintain the correct context when invoking methods, ensuring that the necessary properties remain accessible.

// Conclusion and Call to Action
// The video concludes by summarizing the key points discussed regarding the 'call' method and its significance in JavaScript.
// Viewers are encouraged to subscribe for more content and to continue exploring JavaScript concepts to enhance their understanding.
// The presenter expresses gratitude for the audience's attention and invites them to engage with future videos.