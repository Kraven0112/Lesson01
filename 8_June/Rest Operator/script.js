//rest parameter in function
//first way
const numbers = [1, 2, 3, 4, 5]
function add(...num) {
  return num.reduce((acc, current) => {
    return acc + current
  })
}
const result = add(...numbers, 6, 7, 8, 9, 10)
console.log(result)



//second way
const evenNum = [2, 4, 6, 8, 10]

function addOfEven(...nums) {
  return [...arguments].reduce((acc, current) => {
    return acc + current
  })
}
const result1 = addOfEven(...evenNum)
console.log(result1)



//Third way
const oddNum = [1, 3, 5, 7, 9]

function addOdd(...nums) {
  return Array.from(arguments).reduce((acc, current) => {
    return acc + current
  })
}
const result2 = addOdd(...oddNum)
console.log(result2)
