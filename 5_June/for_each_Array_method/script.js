const fruits =["Apple","Banana","Orange","Grqpe","Dates"]
//callback function normal function
fruits.forEach(function(fruit)
{
    console.log(fruit)
})



console.log("-----------------")
console.log("-----------------")
console.log("-----------------")



//callback function arrow function
fruits.forEach((fruit)=>{
    console.log(fruit)
})


console.log("-----------------")
console.log("-----------------")
console.log("-----------------")



//map
fruits.map((fruit)=>{
    console.log(fruit)
})