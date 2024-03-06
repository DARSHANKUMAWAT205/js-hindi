class User{
    constructor(email,password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password} darshan`
    }

    set password(value){
        this._password = value;
    }
}
const hitesh = new User("darshangmail","iqwjdi")
console.log(hitesh.password);
console.log(hitesh.email);