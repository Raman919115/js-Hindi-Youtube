class User {
    constructor(email, password){
        this.email = email
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }

    get password(){    // get is used to apply getter
        return this._password.toUpperCase()
    }

    set password(value ){  // set is used to apply setter
        this._password = value.toUpperCase()
    }
}

const hitesh = new User("h@hitesh.ai", "ABC")
console.log(hitesh.password);
console.log(hitesh.email);