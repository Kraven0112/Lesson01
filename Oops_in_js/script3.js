function getYearOfBirth(firstName,lastName,age){
    const user={
        firstName,
        lastName,
        age,
        getYourBirthYear(){
            return new Date().getFullYear()-this.age
        }
    }
    return user
}

const userOne = getYearOfBirth("Sushil","CHaudhary",21)
const userTwo = getYearOfBirth("Ramesh","CHaudhary",22)


//when I check
console.log(a=userOne.getYourBirthYear === userTwo.getYourBirthYear) // output is false because it is creating different memory loaction