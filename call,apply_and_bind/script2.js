//apply method in an array and in an object
const user2 ={
    firstName:"Ram",
    lastName:"Singh",
    address:"Nepal",
    age:19
}

function getUser2(user,other1,other2){
    Object.entries(user).forEach((property)=>{
        console.log(property)
    })

    Object.keys(user).forEach((keys)=>{
        console.log(keys)
    })

    Object.values(user).forEach((values)=>{
        console.log(values)
    })

    console.log(other1)
    console.log(other2)
}

getUser2.apply(this,[user2,"I am other1","I am other2"])
//so this is representing to the getUser2 function


const fruit = ["apple","banana","dates","orange"]

function getFruit(fruit,param1,param2){
    fruit.forEach((fruit)=>{
        console.log(fruit)
    })
    console.log(param1)
    console.log(param2)
}

getFruit.apply(this,[fruit,"I am param1","I am param2"])
//so this is representing to the getFruit function