// array
/*The array Object, as with arrays in other programming languages,
enables storing a collection of multiple items under a single variable name,
and has members for performing common array operations.*/

/*avascript array-copy operations create shallow copies. (All standard built-in copy
operations with any Javascript objects create shallow copies, rather than deep copies).*/


// Shallow Copy

/*A shallow copy of an object is a copy whose properties share the same references
(point to the same underlying values)as those of the source object from which the 
copy was made. As a result, when you change either the sourceor the copy, you may 
also cause the other object to change too--and so, you may end up unintentionally causing changes
changes to the sourceor copy that you don't expect. That behaviour contrasts with
the behaviour of a deep copy, in which the source and copy are completely independent.


// Deep Copy

/*A deep copy of an object is a copy whose properties do not share the same references
(point to the same underlying values) as those of the source object from which the copy 
was made. As a result, when you change either the source or the copy, you can be assured you're
not causing the other object to change too; that is, you won't unintentionally be causing changes
to the source or copy that you don't expect. That behaviour contrasts with the behaviour of a shallow
copy, in which changes to either the source or the copy may also cause the other object to change too
(because the two objects share the same references). */



const myArr = [0,1,2,3,4,5]
const myHeros = ["shaktiman", "naagraj"]

const myArr2 = new Array(1,2,3,4)
// console.log(myArr[5]);

// Array methods

// myArr.push(6);
// myArr.push(7);
// myArr.pop()
 
// myArr.unshift(9);
// myArr.shift();
 
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(5));

// const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);

 
// slice, splice

console.log("A", myArr);

const myn1 = myArr.slice(1,3) // slice didn't manipulate the original data

console.log(myn1);
console.log("B", myArr);


const myn2 = myArr.splice(1,3) // splice manipulates the original array 
console.log("C", myArr);
console.log(myn2);

