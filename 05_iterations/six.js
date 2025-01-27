// const coding = ["js", "ruby", "java", "python", "cpp"]


// const values = coding.forEach( (item) => {  
//     // console.log(item);
//     return item   // forEach didn't return any value if you wanted or not
// } )

// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => num > 4)  // filter return the value
// const newNums = myNums.filter( (num) => {  // agar arrow function mein hum scope{} start 
//     return num > 4                    // krte h to to hume return keyword likhna hi padega
// }) 

const newNums = []

myNums.forEach( (num) =>{         // another method of forEach used to iterate on array
    if(num > 4){
        return newNums.push(num)
    }
})

// console.log(newNums);

const books = [
    {title: 'Book One', genre: 'Fiction', publish: 1981,
        edition: 2004 },
    {title: 'Book two', genre: 'Non-Fiction', publish: 1992,
        edition: 2008 },
    {title: 'Book three', genre: 'History', publish: 1999,
        edition: 2007 },
    {title: 'Book four', genre: 'Non-Fiction', publish: 1989,
        edition: 2010 },
    {title: 'Book five', genre: 'Fiction', publish: 2009,
        edition: 2014 },
    {title: 'Book six', genre: 'Science', publish: 1987,
        edition: 2010 },
    {title: 'Book seven', genre: 'History', publish: 1986,
        edition: 1996 },
    {title: 'Book eight', genre: 'Science', publish: 2011,
        edition: 2016 },
    {title: 'Book nine', genre: 'Non-Fiction', publish: 1981,
        edition: 1989 },
];

// const userBooks = books.filter( (bk) => bk.genre === 'History')

const userBooks = books.filter( (bk) => {
    return bk.publish >= 1995 && bk.genre === 'History'})

console.log(userBooks);