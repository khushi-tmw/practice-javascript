// Date&Time
// 1 january 1970

// Date
 let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());

// let myCreatedDate = new Date (2026, 8, 02)
// console.log(myCreatedDate.toLocaleString());

// let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/10000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay() );

newDate.toLocaleString('Default', {
    Weekend: "long"
})