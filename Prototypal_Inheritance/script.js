//prototypical inheritance
class User{
    constructor(firstName,lastName,age){
        this.firstName=firstName
        this.lastName=lastName
        this.age=age
    }

    getFullDetail(){
        return `${this.firstName}  ${this.lastName} ${this.age}`
    }
    getBirthYear(){
        return new Date().getFullYear()-this.age
    }

    get Fullname(){
        return `${this.firstName} ${this.lastName}`
    }

    set setValue(value){
        const[firstName,lastName,age] = value.split(' ')
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }

    study(){
        console.log("Studying")
    }

    work(){
        console.log("working")
    }
}

//extending User in Student class
class Student extends User{
    constructor(firstName,lastName,age,standard){
        super(firstName,lastName,age)
        this.standard = standard
    }

    study(){
        console.log("I am studying now.")
    }
}


//extending User in Employee class
class Employee extends User{
    constructor(firstName,lastName,age,company){
        super(firstName,lastName,age)
        this.company = company
    }

    work(){
        console.log("I am working now.")
    }
}


const student1 = new Student("Sushil","Chaudhary",21,"BCA")
const employee1 = new Employee("Hikmat","Kumar",28)
const user1 = new User("Mahesh","Yadav",25)