// ****************New***************

// function multipleBy5 (num){
//     return num*5
// }

// multipleBy5.power = 2

// console.log(multipleBy5(5));
// console.log(multipleBy5.power);
// console.log(multipleBy5.prototype);

// // everthing is a object
// // jis ka mtlb this

// function createUser(username, score){
//     this.username = username 
//     this.score = score
// }

// createUser.prototype.increment = function () {
//     this.score++
// }
// createUser.prototype.printMe = function () {
//     console.log(`price is ${this.score}`);
    
// }

// const chai = new createUser("chai", 15)
// const tea = createUser("tea", 25)

// chai.printMe()

// *************Prototype*************

// let myName = "khushi          "
// console.log(myName.truelength);


let myHeros = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);       
    }
}

// myHeros.heyKhushi()
// inheritance

const User = {
    name: "Khushi",
    email: "khus@gmail.com",
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvalaible: false
}

const TASupport = {
    makeAssignmnet: `JS assignment`,
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__= User

// modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "KhushiSneha       "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
    
}

anotherUsername.trueLength()
"khushi".trueLength()
"sneha".trueLength()