class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptionPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }

}

const khush = new User("reena", "reena@mail.com" , "123")

console.log(khush.encryptionPassword());
console.log(khush.changeUsername());

// behind the scene

function User(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

User.prototype.encryptionPassword = function(){
    return `${this.password}abc`
}

User.prototype.encryptionPassword = function(){
    return `${this.username.toUpperCase()}`
}


