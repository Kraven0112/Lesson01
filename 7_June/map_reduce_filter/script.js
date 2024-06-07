const fruits = ["Apple", "Banana", "Orange", "Grape", "Dates"]

//using filter() in array
const result1 = fruits.filter((fruit) => {
  return fruit.toLowerCase().includes("p")
})
console.log(result1)

console.log("---------------------------")


//using map() in array
const result2 = fruits.map((fruit) => {
  return fruit
})
console.log(result2)

console.log("---------------")


//using reduce() in array
const result3 = fruits.reduce((fruit, index, array) => {
    return `${fruit},${index}`
//   return fruit === index //false
})
console.log(result3)
