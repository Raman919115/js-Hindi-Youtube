// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello world"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}

// maps 

const map = new Map()
map.set('IN', 'India')
map.set('USA', 'United States of America')
map.set('Fr', 'France')

// console.log(map);


for (const [key, value] of map) {  //to print map key value pair individual 
// console.log(key ,':-', value);           // we use square bracket to print & seperate by comma
}


const myObject = {
    game1 : 'NFS',
    game2 : 'Spiderman'
}

// for (const [key, value] of myObject) {   //objects are not iterable by for of loop
//     console.log(key ,':-', value); 
// }