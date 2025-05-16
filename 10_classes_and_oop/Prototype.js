let myName = "hitesh      "
let myChannel = "chai     "


// console.log(myName.trueLength)

// creating our own property(like custom property) in string

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor : "hammer",
    spiderman : "sling",

    getSpiderPower : function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

// prototype   ===A reference to the prototype for a class of objects.

Object.prototype.hitesh = function(){    // all array,function and string are treated as object in js 
    console.log(`hitesh is present in all objects`);   // so we access the top level hierarchy(object) and we add our own property(custom property)
}

Array.prototype.heyHitesh = function(){  // we add the custom property in array so this property only accerssible to array
    console.log(`Hitesh says hello`);
}

// heroPower.hitesh()
// myHeros.hitesh()
// myHeros.heyHitesh() 
// heroPower.heyHitesh()  // heyHitesh() is an array property and it is not accessible in object



//inheritance

const User = {
    name : "chai",
    email : "chai@google.com"
}

const Teacher = {                     
    makeVideo : true
}

const TeachingSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssignment : 'JS assignment',
    fullTime : true,
    __proto__ : TeachingSupport          //this old syntax 
}

Teacher.__proto__ = User



// Modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)


let anotherUsername = "ChaiAurCode      "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is :${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()