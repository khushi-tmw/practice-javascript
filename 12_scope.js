// let a = 10
// const b = 20
// var c = 30

// {} => scopes

if (true) {
    let a = 10
    const b = 20   // => block scope
    var c = 30
//   console.log("block scope:", a);
}
// outside bracket global scope
  
// console.log(b);
// console.log(c);

let a = 300
// console.log(a);

// ************** Document Object Model***************

function one(){
    const username = "khsuhi"

    function two(){
        const website = "youtube"
       // console.log(username);
        
    }
    // console.log(website);

    two()

}

// one()

if (true) {
    const username = "khushi"
    if (username === "khushi") {
        const website = " youtube"
       // console.log(username + website);
        
    }
   // console.log(website); // error
    
}
// console.log(username); // error

// ********interesting***********

console.log(add1(5))

function add1(value){
    return value + 1
}

// type 2

add2(5)

const add2 = function(value){
    return value + 2
}


