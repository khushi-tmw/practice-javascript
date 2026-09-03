const name = "khushi"
const repoCount = 50

console.log(`HEllo my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('khushi')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));

console.log(gameName.indexOf('s'));

const newString = gameName.substring(0, 3)
console.log(newString);

const anotherString = gameName.slice(-2, 5)
console.log(anotherString);

const newStringOne = "    khushi    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "something://khushi.com/somethingg"

console.log(url.replace('somethingg' , '/'));

console.log(url.includes('include'));

console.log(gameName.split('-'));

