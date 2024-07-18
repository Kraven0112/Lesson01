// function getYearOfBirth(age){
//     return new Date().getFullYear()-age
// }
// console.log(getYearOfBirth(21))

// const user={
//     age:21,
//     getYear:function(){
//         return new Date().getFullYear()-user.age
//     }
// }

// console.log(user.getYear())

// //one new update of js is that if there is key name same as argument then we can declare key only.

// function createUser(name,surname,userage){
//     const user={
//         firstName:name,
//         lastName:surname,
//         age:userage
//     }
//     return user
// }
// console.log(createUser("Sushil","Chaudhary",21))



function createUser(userFirstName,userLastName,userAge){
    const user = {
        firstName : userFirstName,
        lastName: userLastName,
        age : userAge,
        getYearOfBirth(){
            return new Date().getFullYear()-user.age
        }
    }
    return user
}

const user1 = createUser("Sushil","Chaudhary",21)
const user2 = createUser("Saliram","Chaudhary",22)
const user3 = createUser("Dinesh","Chaudhary",22)

const arr1=[1,2]
const arr2 =[2,3]
console.log(arr1.pop == arr2.pop) //output is true