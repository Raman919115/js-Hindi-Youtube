const coding = ["js","ruby", "java", "python", "cpp"]

// coding.forEach( function (val){
//     console.log(val);          //forEach using normal/ callback function
// })

// coding.forEach( (item) => {
//     console.log(item);          // forEach using arrow function
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)       // another method of using foreach with external function

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// })

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {          // method to iterate the multiple object from array 
    console.log(item.languageName);
})