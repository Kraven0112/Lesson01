//when we use new keyword it automatically returns an object 
function makeUserg(firstName,lastName,age){
    this.firstName=firstName
    this.lastName=lastName
    this.age=age
}

const userMech = new makeUserg("Sushil","Chaudhary",21)
const userEng = new makeUserg("Ramesh","Rana",22)



//prototype in javascript -- where CreatePrototype
//So the prototype is mechanism of inheriting all properties and its methods from another object in javascript.
//I javascript prototype mechanism only available when we use new keyword and this keyword

function CreatePrototype(firstName,lastName,age){
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
}

CreatePrototype.prototype.getYourBirthYear=function(){
    return new Date().getFullYear()-this.age
}


const userMe = new CreatePrototype("Me","Mine",23)
const userYou = new 