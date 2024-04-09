// const tinderUser = new Object()    //singleton object
const tinderUser = {}; // non singleton object

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser)

const regularUser = {
  email: "some@gmail.com",
  fullName: {
    userfullname: {
      firstname: "hitesh",
      lastname: "choudhary",
    },
  },
};

// console.log(regularUser.fullName.userfullname.firstname); // object ko bhi hum dot(.) notation se access krte h

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" }; // merging two or more objects

// const obj3 = Object.assign(obj1, obj2)

/* first method to merge object it gives
    unexpected result / output */

// const obj3 = Object.assign({},obj1, obj2)

/* secnd method to merge object it gives 
    expected result / output */

const obj3 = { ...obj1, ...obj2 }; // merge objects using spread operator
// console.log(obj3);

// access value from array of object

const users = [
  {
    id: 1,
    email: "h@gmail.com",
  },
  {
    id: 2,
    email: "i@gmail.com",
  },
  {
    id: 3,
    email: "t@gmail.com",
  },
  {
    id: 4,
    email: "e@gmail.com",
  },
  {
    id: 5,
    email: "s@gmail.com",
  },
];

// console.log(users[3].email)
// console.log(Object.keys(tinderUser))  
/*Object.keys method se hum kisi bhi 
object k key print kr skte hain
or ye method hume data ko array mein store krke deta h
jis pr hum loops ke through operations laga skte h
*/

// console.log(Object.values(tinderUser))
/*Object.values method se hum kisi bhi 
object k value print kr skte hain
or ye method hume data ko array mein store krke deta h
jis pr hum loops ke through operations laga skte h
*/

// console.log(Object.entries(tinderUser))
/*Object.entries method hume object ke every key-value
ko seprate array store kreke deta h
Basically ye hume array of array return krta h
*/

// console.log(tinderUser.hasOwnProperty('isLoggedIn')) 
/*kaafi baar hum object ko loop through krke 
value nikalte hain agar wo value exist nhi krti h to 
 webapp/app k crash hone k chances bhad jaaate hain
 isliye hum Object.hasOwnProperty ka use krke simply 
 puch skte h ki ye value exist krti h ya nhi
  */



//  ******************Object de-structureing and JSON api******************

const course = {
  coursename : "js in hindi",
  price : "999",
  courseInstructor : "hitesh"
}

// console.log(course.courseInstructor)

const {courseInstructor : instructor } = course     // this is how  we destructure object and also can assign a name to them

// console.log(courseInstructor);
console.log(instructor);


// {
//   "name" : "hitesh",
//   "coursename" : "js in hindi",              //example of JSON 
//   "price" : "free"
// }