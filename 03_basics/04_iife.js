//  Immediately Invoked Function Expressions (IIFE)


(function chai(){               
    // this is the example of iife also known as named iife
    console.log(`DB CONNECTED`);
})();

// yaha pr iife invoke to ho gaya pr use ye nhi pta ki context rokna kaha h
// aisi situation mein javascript ke ander  aapko usko end krna pdta h 
// end krne k liye ek semicolon(;) ki jrurat h 
// ye problem tab aati h jb hum 2 ya 2 se jayada iife use krte h 

 ( () => {                      
    // example of iife using arrow function also known as unnamed iife
    console.log(`DB CONNECTED TWO`);
 } )();

// global scope ke pollution se ki baar problem hoti h. 
// global scope ke variable ua fir jo declaration h uske pollution ko hataaae ke liye humne iife ka use kiya 

( (name) => {    
    // passing parameter in iife or in unnamed iife
    console.log(`DB CONNECTED THREE ${name}`);
 } )('hitesh')
