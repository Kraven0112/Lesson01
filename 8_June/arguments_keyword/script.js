//function declaration
function add() {
  let sum = 0
  for (const i in arguments) {
    sum = sum + arguments[i]
  }
  return `Total sum : ${sum}`
}
console.log(add(1, 2, 3, 4, 5, 6, 7))


//function expression
const product = function () {
  let mult = 1
  for (let i = 0; i < arguments.length; i++) {
    mult = mult * arguments[i]
  }
  return `Total product : ${mult}`
}
console.log(product(10, 10, 10, 10, 10, 10))


//rest operator
const result = ((...arguments)=>{
    console.log(arguments)
    // return arguments
})
result(12,12,13,13,13)



//Converting arguments into array in arrow function
const result1 = ((...arguments)=>{
    console.log(arguments)
    console.log(Array.from(arguments))
})
result1("Foodie","Groot","Saree","Fruit")
result1(1,2,3,4,5,6,7,8)



//Converting arguments into array in regular function
const result2 = function()
{
    console.log(Array.from(arguments))
}
result2('Apple','Ball','Cat','Dog')



//converting arguments into array
console.log(Array.from("Sushil"))
console.log(Array.from("Kailash"))


//new object
const result4 = new Set("Sushil")
console.log(Array.from(result4))
