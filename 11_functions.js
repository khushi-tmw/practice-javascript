
function sayMyName(){

    console.log("k");
    console.log("h");
    console.log("u");
    console.log("s");
    console.log("h");
    console.log("i");

}
//sayMyName => reference
// sayMyName() // => execution

// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2);
// }

function addTwoNumbers(num1, num2){
    // let result = num1 + num2
    // return result
    return num1 + num2
}
// addTwoNumbers(3, 7) 
// addTwoNumbers(3, "4")

// addTwoNumbers(4, "a") 
// addTwoNumbers(4, null)
// addTwoNumbers(4, "undefined")

// const result = addTwoNumbers(3, 2)
// console.log("Result:", result);

function loginUserMessage(username){
    return '${username} just logged in'
}

// console.log(loginUserMessage("sneha"))
 console.log( );
 
function CalculatePrice(...num1){
    return num1
}

// console.log(CalculatePrice(200, 400, 500));

const user = {
    username: "reena",
    price: 299
 
}

function handleObject(anyobject){
    console.log('Username is ${anyobject.username} and price is ${}');
    
}