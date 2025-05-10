// A promise is an Object represents the eventual completion(or failure) of an asynchronous operation and its resulting value. 
const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()      // resolve basically .then() ko or promise ko connect krta hai
    }, 1000)
})

// .then() ka sidha relation resolve k saath hai 

promiseOne.then(function(){
    console.log("Promise consumed");
})



// another syntax to write promise

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
})


const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
    // console.log("Async task 3");  
    resolve({username: "Chai", Email: "chai@example.com"})        // resolve() k parameters mein hum data bhi pass kr skte h. Mostly object ki form mein hota h.but hum array, function bhi pass kr skte hain
    },1000)
})

promiseThree.then(function(user){   // resolve() mein jo parameter pass krte hain wo hume yaha mil jaata hai
    console.log(user);
})


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        // console.log("Async task 4");
        let error =true
        if(!error){
            resolve({username: "hitesh", password: "123"})
        } else{
            reject('ERROR: Something went wrong')
        }
    },1000)
})

promiseFour.then((user) =>{
    console.log(user);
    return user.username
}).then((username) =>{
    console.log(username)
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))
    // promise mein resolve ho ya reject ho finally hota hi hota h


// async await and try catch 
    const promiseFive = new Promise(function(resolve, reject){
        setTimeout(function(){
            let error = true 
            if(!error){
                resolve({username: "javascript", password: "123"})
            } else{
                reject('ERROR: JS went wrong')
            }
        }, 1000)
    })

    async function consumePromiseFive(){
        try {
            const response = await promiseFive
            console.log(promiseFive);
        } catch (error) {
            console.log(error);
        }
    }

    consumePromiseFive()


// async function getAllUsers(){
//     try {
//         const response  = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E:", error);
//     }
// }
// getAllUsers()


fetch('https://jsonplaceholder.typicode.com/users')
.then((response) =>{
    return response.json() 
})
.then((data) =>{
    console.log(data);
})
.catch((error) =>{
    console.log(error);
})

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) =>{
    return response.json()
})
.then((data) =>{
    console.log(data);
})
.catch((error) =>{
    console.log(error);
})