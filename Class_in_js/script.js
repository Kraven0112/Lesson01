class User{
    constructor(firstName,lastName,age){
        this.firstName=firstName
        this.lastName=lastName
        this.age=age
    }

    getBirthYear(){
        return new Date().getFullYear()-this.age
    }

    getFullName(){
        return `My name is ${this.firstName} ${this.lastName}.`
    }
}

const user1 = new User("Sushil","Chaudhary",21)

console.log(user1.getBirthYear())
console.log(user1.getFullName())