let score = "33"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number (score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN  => not a number
// true => 1 ; false => 0

// "" => false
//"string" => true

let isLoogedIn = "khuhsi"

let booleanIsLoogedIn = Boolean(isLoogedIn)
console.log(booleanIsLoogedIn);

//before
let someNumber = 33
console.log(typeof (someNumber));

//after
let some1Num = String(someNumber)
console.log(some1Num); 
console.log(typeof (some1Num));