//spread operator 
const fruit = ["Apple", "Banana", "Watermelon", "Dates", "Orange", "Grape"]

const result = { ...fruit }
console.log(result)


//rest operator
const rest = ((...arguments)=>{
    console.log(arguments)
    // return arguments
})
rest(1,2,3,4,5)
rest("Sushil")