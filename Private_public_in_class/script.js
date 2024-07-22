class Company{
    #name //private 
    #age //private
    #country //private
    constructor(name,age,country){
        this.name=name
        this.age=age
        this.country=country
    }

    getDetail(){
        //accessing private method in javascript
        console.log(this.#getBirthYear())

       return`My name is ${this.name}. I am ${this.age} years old. I am from ${this.country}.`
    }

#getBirthYear(){
        return new Date().getFullYear()-this.age
    }
}

const emp1 = new Company("Sushil Chaudhary",21,"Nepal")
const emp2 = new Company("Rakesh Chaudhary",22,"India")

