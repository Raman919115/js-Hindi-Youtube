// ES6

class User {                       //You're creating a class named User.A class is a blueprint for creating objects with specific properties and methods.
    constructor(username, email, password){  //This is the constructor method. It's automatically called when you create a new object using new User(...).   
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword(){                     //This is a class method — a function defined inside the class that acts on instances of that class.
        return `${this.password}abc`       //  It takes the user's password and adds "abc" to the end (just as a pretend “encryption”).
                                     
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`  //It takes the user's username and convert into uppercase 
    }
}

const chai = new User("chai", "chai@gmail.com", "123")   //You're creating an instance of the User class and storing it in a variable called chai.

console.log(chai.encryptPassword());   // You're calling the encryptPassword() method on the chai object.It returns "123abc" and logs that to the console.

console.log(chai.changeUsername());

                                    //    | Concept         | What it does                                               |
                                    //    | --------------- | ---------------------------------------------------------- |
                                    //    | `class`         | Defines a blueprint for creating objects                   |
                                    //    | `constructor()` | Initializes the object with given values                   |
                                    //    | `this`          | Refers to the current instance                             |
                                    //    | Instance method | Function defined inside the class (like `encryptPassword`) |
                                    //    | `new User(...)` | Creates a new object from the class                        |


// behind the scene  

function user(username, email, password){
    this.username = username
    this.email = email
    this.password = password
}

user.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

user.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const tea = new user("tea", "tea@gmail.com", "1234")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());