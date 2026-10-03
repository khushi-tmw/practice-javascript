const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descripter);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const chai = {
    name: `ginger chai`,
    price: 250,
    isAvailable: true, 

    orderChai: function (){
        console.log("chai ");
        
    }
}

console.log(Object.getOwnPropertyDescriptor(chai));

Object.defineProperty(chai, 'name', {
    writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(chai,"name"));

for (let [key, value] of object.entries(chai)) {
    if (typeof value != 'function') {
    
    console.log(`${key}: ${value}`);
    }
}