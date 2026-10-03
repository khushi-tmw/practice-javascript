// const promiseOne = new promise(function(resolve, reject){
//     //Do an async task
//     // DB calls, crytography, network
//     setTimeout(function(){
//         console.log('Async task is completed');
//     }, 1000)
// })

// promiseOne.then(function(){
//         console.log("Promise consumed");
// })

// new Promise(function(resolve, reject){
//     setTimeout(function(){
//     console.log("Async task 2");
//     resolve()
// }, 1000)

// }).then(function(){
//     console.log("Async 2 resolved");
    
// })

// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username: "khushi", email: "khushi@exp.com"})
//     }, 1000)
    
// })

// promiseThree.then(function(user){
//     console.log(user);
    
// })


// const promiseFour = new promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if (error) {
//             resolve({username: "khushi", password: "123"})
//         } else {
//             reject('ERROR: SOMETHING WENT WRONG')
//         }
//     }, 1000)
// })

// promiseFour.then ((user) => {
//     console.log(user);
//     return user.username
// }).then((username) => {
//     console.log(username);
// }).catch(function(error){
//     console.log(error);
// }).finally(() => console.log(" THE PROMISE IS EITHER RESOLVED OR REJECTED");
// )

// const PromiseFive = new promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if (!error) {
//             resolve({userame: "JAVASCRIPT", password: "123"})
//         } else {
//             reject('ERROR: JS WENT WRONG')
//         }
//     }, 1000)
// });

// async function consumePromiseFive(){
//     try {
//         const response = await PromiseFive
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
    
// }

// consumePromiseFive()


let checkEven = new Promise((resolve, reject) => {
    let number = 5;
    if (number % 2 === 0) resolve("The number is even!");
    else reject("The number is odd!");
});
checkEven
    .then((message) => console.log(message)) // On success
    .catch((error) => console.error(error)); // On failure