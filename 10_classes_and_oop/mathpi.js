const descripter = Object.getOwnPropertyDescriptor(Math, "PI")   //   this property tells the hidden feathers of object

// console.log(descripter);

// console.log(Math.PI);
// Math.PI = 5 
// console.log(Math.PI);

const chai = {
    name : 'ginger chai',
    price : 250,
    isAvailable : true,

    order: function(){
        console.log(`chai nhi bni`);
    }
}

// console.log(chai);
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, 'name', {      //Defining a new property called name on the chai object.
    writable : false,                     //writable: false → value cannot be changed.
    enumerable : false                   //enumerable: false → property will not appear in loops like for...in or Object.keys().
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));   //This prints the full descriptor (details) of the name property on the chai object.

for (let [key, value] of Object.entries(chai)) {   //forof loop mostly object k liye use hota h
    if (typeof value !== 'function') {           
        console.log(`${key} : ${value}`);
    }
}