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

for (let [key, value] of Object.entries(chai)) {   
    if (typeof value !== 'function') {           
        console.log(`${key} : ${value}`);
    }
}



//forof loop mostly object k liye use hota h
//Object is not iteratable by default, we can make object iterable using Object.entries 
// Object.entries() is a built-in method that returns an array of key-value pairs from an object.


const user = {
    name: "Raman",
    age: 24,
    email: "r@gmail.com"
  };
  
  const entries = Object.entries(user);
  console.log(entries);

//   Now you can loop through it like this:

for (const [key, value] of Object.entries(user)) {
    console.log(`${key}: ${value}`);
  }
  