const user = {
    username: "khushi",
    price: 899,

    welcomeMessage: function(){
        console.log('${this.username} , welcome to the website');
        console.log(this);  // => speaks about current context
        
    }
}

// user.welcomeMessage()
// user.username = "sneha"
// user.welcomeMessage()

// console.log(this); // empty object

// function chai(){
//     let username = "sneha"
//     console.log(this); // u cant use this inside the function
    
// }
// chai()


// const chai = function (){
//      let username = "sneha"     // undefined
//      console.log(this.username);
// }

const chai = () => {
     let username = "sneha"     
     console.log(this);         // empty
}

// chai()

// const add2 = (num1 ,num2 ) => {
//     return num1 + num2              // return required with {} brackets
// }


// implisit return
// const add2 = (num1 ,num2 ) => num1 + num2

// const add2 = (num1 ,num2 ) => (num1 + num2) // no return required with ()brakets

const add2 = (num1 ,num2 ) => ({username: "khushi"})

console.log(add2(3, 5));

// const mtArray = [1, 2, 3, 4]
// mtArray.forEach = [2, 4, 2, 3]

