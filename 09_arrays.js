// Array

// const myArr = [0, 1, 2, 3, 4, 5]

// const myArr2 = new Array(1, 2, 3, 4)
// // console.log(myArr[1]); 

// // // Methods
// // myArr.push(6 , 7)  // add
// // console.log(myArr);

// // myArr.pop()        // remove
// // console.log(myArr);

// // myArr.unshift(9) // adds a value at the start
// // myArr.shift() // removes a value

// // console.log(myArr.includes(9));
// // console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// // console.log(myArr);
// // console.log( newArr);

// // slice, splice

// console.log("A ", myArr);

// const myn1 = myArr.slice(1, 3)

// console.log(myn1);
// console.log("B ", myArr);

// const myn2 = myArr.splice(1, 3)
// console.log("C ",myArr);

// console.log(myn2);

const myHeros = ["ironman", "cap america", "thor", "spiderman"]
const dcHeros = ["suoerman", "flash", "batman"]

// myHeros.push(dcHeros)

// console.log(myHeros);

// const allHeros = myHeros.concat(dcHeros)
// console.log(allHeros);

// const all_heros = [...myHeros, ...dcHeros,] //

// console.log(all_heros);

// const another_array = [1, 2, 3, [4, 5, 6],[6, 7, [4, 5]]]

// const real_array = another_array.flat()
// console.log(real_array);

console.log(Array.isArray("khushi"));
console.log(Array.from("khushi"));
console.log(Array.from({name: "khushi"})) // intersting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of (score1, score2, score3));


