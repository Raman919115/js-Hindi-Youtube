 
 function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
 }

// sayMyName            // sayMyName is the reference of function 
// sayMyName()        // refernce ke baad agar parenthesis laga de to ho jayega execution

// function addTwoNumbers(number1, number2){        //here (number1,number2)  are called parameters
//    console.log(number1 + number2)             //jab function ki definition banate h to iske ander jo bhi 
// }                                             //input lete h usko parameter bolte h chahe wo string ho ya numbers 

// const result = addTwoNumbers(3,5)         //here (3,4) are called arguments
//                                       // function ko jab call karate h tb uske ander jo value pass krte use bola jata h arguments
//  console.log("result: ", result)                


function addTwoNumbers(number1,number2){
   // let result = number1 + number2
   // return result
   return number1 + number2
}

const result = addTwoNumbers(3,5)

// console.log("Result: ", result);

function loginUserMessage(username = "Sam"){       // we can set a default value of username if username is not given, 
   // if(username === undefined){             //if username is given the value overwrite itself
   //    console.log("please enter a username")
   //    return
   // }
   if(!username){
      console.log("please enter a username")         // this is same code as written above
      return
      }
   return `${username} just logged in`
}

// console.log(loginUserMessage())
// agar hum yha pr empty string("") pass krein to wo  just logged in  return krega
// agar hum yha pr kuch pass na krein to wo undefined return krega 

function CalculateCartPrice(...num1){
   return num1
}
 
// console.log(CalculateCartPrice(200,400,500,2000)) 

const user ={
   username : "hitesh",
   price : 199
}

function handleObject(anyobject){      // passing object in function
   console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({           //we can pass direct object just like that
   username : "Sam",
   price : 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){    // we can pass array in function just like that
   return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,600,1000]));  // we can direct pass array in function just like that

