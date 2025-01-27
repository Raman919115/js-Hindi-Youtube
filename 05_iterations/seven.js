const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumbers.map( (num) => {return num + 10})

// console.log(newNums);

// **********************chaining method***************************

const newNums = myNumbers
               .map( (num) => {return num * 10} )    //chaining mein agar hum ek return likhe ya saare return 
               .map( (num) =>  {return num + 1})    //likhe ya return hi na likhe  likhe code tb bhi chalega but hume return krna padega
               .filter( (num) => num >= 40)        // filter mein sirf true false check hota to isme likhne ki need nhi h
    console.log(newNums);    