// singleton 
// object.create

// object literals 
 
// const mySym = Symbol("house1")
// // const mySym = Symbol("house2")

// const jsUser = {
//     name: "khushi" ,
//     age: 20 ,
//     location: "mumbai",
//     email: "khushi1@google.com",
//     isLoggedIn: false ,
//     lastLoginDays: ["Monday " ,"Saturday"],
//     "full name":"khushi pal",
//     [mySym]: "house1" ,

// }

// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser["full name"])
// console.log(jsUser[mySym])

// jsUser.email = "khushi@google.com"
// Object.freeze(jsUser)
// jsUser.email = "khushi1@google.com"
// console.log(jsUser);

// jsUser.greetings = function() {
//     console.log("hello khushi");
// }
   
// jsUser.greetingstwo = function(){
//     console.log('hello khsuhi, ${this.name}');
// }     

// console.log(jsUser.greetings());
// console.log(jsUser.greetingstwo);



// const tinderUser = new oject()
// const tinderUser = {}

// tinderUser.id = "1010xyz"
// tinderUser.name = "adtiya"
// tinderUser.isLoggedIn = false

// // console.log(tinderUser);

// const regularUser = {
//     email : "adii1@gmail.com",
//     fullname : {
//         userfullname : {
//             firstname : "khushi",
//             lastname: "pal" 
//         }
//     }
// }

// // console.log(regularUser.fullname.userfullname.firstname);

// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "a", 4: "b"}

// // const obj3 = {obj1, obj2}
// const obj3 = Object.assign({} , obj1, obj2)

// console.log(obj3);

// const users = [
//     {
//         id: 1,
//         email: "h@gamil.com"
//     },
//     {
//         id: 2,
//         email: "a@gamil.com"
//     },
//     {
//         id: 3,
//         email: "b@gmail.com"
//     },

// ]

// users[1].email

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


// de structing

const course = {
    coursename: "javascript",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor 

const {courseInstructor} = course
const {courseInstructor: instruct} =course

console.log(courseInstructor);
console.log(instruct);

// API

// {
//     "name": "reena",
//     coursename: "javascript",
//     price: "free"

// }

[
    {},
    {},
    {},

]