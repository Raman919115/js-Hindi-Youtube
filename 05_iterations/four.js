const myObject = {
    js : 'javascript',
    cpp : 'c++',
    rb : 'ruby',
    swift : 'swift by apple'
}

for (const key in myObject) {   // for in method used to extract the object's key value
//   console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
//   console.log(programming[key]);
}

// const map = new Map()
// map.set('IN', "India"),
// map.set('USA', "United States of America"),
// map.set('Fr', "France"),
// map.set('IN', "India")

// for (const key in map) {       // for in loop map mein iterable nhi h 
//   console.log(key);
// }