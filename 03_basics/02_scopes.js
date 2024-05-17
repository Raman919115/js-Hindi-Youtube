// var c = 300
let a =  300
if(true) {      // {} curly braces k andar jo h usse block scope bolte h .block scope ki value ko hum global scope mein access nhi kr skte 
  let a = 10;    // {} curly braces k bahar jo use global scope bolte h. global scope mein jo bhi value h use hum block scope mein access kr skte h
  const b = 20;
  var c = 30;
  // console.log("INNER :", a);
}



// console.log(a);
// console.log(b);
// console.log(c);


 function one(){
  const username = "hitesh"

  function two(){
    const website = "youtube"
    console.log(username);
  }
  // console.log(website);  //scope of website is inside in function two

  two()

 }

//  one() 

if(true){
  const username = "hitesh"
  if(username === "hitesh"){
    const website = " youtube"
    // console.log(username + website) ;
  }
  // console.log(website);
}

// console.log(username);


// +++++++++++++++++++ intresting ++++++++++++++


console.log(addone(5))   // we can get the result even we declare it before initialize

function addone(num){        // this is simple function
  return num + 1
}

// addone(5)


console.log(addTwo(5))     // we can't access it before initialization because it depends on how the function is initialize 
const addTwo = function(num){       // it is also function sometime it is called expression
  return num + 2   
}

// addTwo(5)  