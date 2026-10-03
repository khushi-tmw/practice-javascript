// if
const isUserLoggedIn = true
const temperature = 41

// if (temperature < 50) {
//     console.log("Less than 50");
    
// } else {
//     console.log("Temperature is greater than 50");
    
// }
// console.log("Temperature is less than 50");

// 2<=2
// <, >, <=, >=, ==, !=, ===, !==

// const score = 200
// if (score > 100) {
//     let power ;
//     if (power = "fly")
//    // console.log(`User power: ${power}`);   
// }

// if (power ="fly")
// // console.log(`User power: ${power}`);

// const balance = 1000

// if (balance < 500){
//     console.log("Less than 500");
    
// }else if (balance < 750){
//     console.log("Less than 750");
    
// } else if (balance < 900){
//     console.log("Less than 750");
    
// }else {
//     console.log("Less than 1200");
    
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard ) {
    console.log("Allow to buy course");
    
}

if (loggedInFromGoogle || loggedInFromEmail || true) {
    console.log("User logged in");
    
}