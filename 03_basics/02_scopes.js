// var c = 300
let a =  300
if(true) {      // {} curly braces k andar jo h usse block scope bolte h .block scope ki value ko hum global scope mein access nhi kr skte 
  let a = 10;    // {} curly braces k bahar jo use global scope bolte h. global scope mein jo bhi value h use hum block scope mein access kr skte h
  const b = 20;
  var c = 30;
  console.log("INNER :", a);
}

console.log(a);
// console.log(b);
// console.log(c);
 