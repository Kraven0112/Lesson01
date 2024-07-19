function makeUser(firstName,lastName,age){
    const user={
        firstName,
        lastName,
        age,
        getBirthYear:makeUser.commonMethod.getBirthYear
    }
    return user
}

makeUser.commonMethod={
    getBirthYear:function(){
        return new Date().getFullYear()-this.age
    }
}

const user01 = makeUser("Sushil","CHaudhary",21)
const user02 = makeUser("Ramesh","Upreti",22)

console.log(user01.getBirthYear === user02.getBirthYear)
//output is true -- because function is creating same memory location in storage .