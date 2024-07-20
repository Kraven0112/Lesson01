//call method in an array and in an object
const user1={
    name:"Sushil Chaudhary",
    address:"Nepal",
    age:21
}

function getUser1(para1,para2,para3,para4){
    console.log(para1)
    console.log(para2)
    console.log(para3)

    return getUser1.para1
}

getUser1.call(this,user1,"Vikash","Nikesh")
//so this is representing to this in getUser1 function


const animal=["cat","dog","cow","buffalo","goat"]

function getAnimal(animal,other1,other2){
    animal.forEach((animal)=>{
        console.log(animal)
    })
    console.log(other1)
    console.log(other2)
}

getAnimal.call(this,animal,user1,"I am back")
//so this is representing to this in getAnimal function