// for of loop

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
   // console.log(num);
}

const greetings = "Hello World!!"
for (const greet of greetings) {
   // console.log(`Each char is ${greet}`);
    
}

// Maps 
// unique values
const map = new Map();
map.set('IN',"India")
map.set('USA',"United States Of America")
map.set('FR',"France")
map.set('IN',"India")

// console.log(map);

for (const key of map) {
   // console.log(key);
}

// or
for (const [key, value] of map) {
   // console.log(key, `:-` , value);
    
}
// console.log(A.get["USA","IN","FR"]);
// const keys = ["USA", "IN", "FR"];

// const values = keys.map(key => A.get(key));

// console.log(values);]

// const myObject = {
//     game1 : 'temple run'
//     game2 : 'temple run2'
// }
 
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }

// Maps are iterable but for objects there are different ways