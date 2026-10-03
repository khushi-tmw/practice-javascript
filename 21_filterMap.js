// const coding = ["js", "ruby", 'java', "python", "cpp"]

// const values = coding.forEach( function (item) {
//     // console.log(item);
//     return item
// })

// console.log(values);

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => num > 4)

// const newNums = myNums.filter( (num) => {
   // return num > 4
// })

// // const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// })
// console.log(newNums);
//
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// //const myNumber = numbers.map( (num) => { return num +10})

// const myNumber = numbers 
//                .map( (num) => num * 10 )
//                .map( (num) => num + 1)
//                .filter( (num) => num >= 40)

// console.log(myNumber);


// function add(a,b) {
//    return console.log(a + b) ;
// }
// const add1 = (a,b) => { return console.log ( a+b )}



// add(1,2)
// add1(9,2)

// function sub(a,b) {
//    return console.log(a - b) ;
// }

// sub(4,3)

// const a= [1,2,3,4]
// const result = a.reduce((a,b)=> a+b)
// console.log(result)

// ****************Reduce****************

// const myNums = [2, 3, 4, 5]
// const myTotal = myNums.reduce(function (acc, currval) {
//    console.log(`acc: ${acc} and currval: ${currval}`);
//    return acc + currval
// }, 0)
// console.log(myTotal);

// const myTotal = myNums.reduce( (acc, cur) => acc + currval, 0)
// console.log(myTotal);

// ****************Solved Examples******************

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2)

console.log(doubled);


const users = [
   {name: "Alice", age: 20},
   {name: "Bob", age: 25},
   {name: "charlie", age: 28}

];

const names = users.map(user => user.name);

console.log(names);

//**************Events*************** */

