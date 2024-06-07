//Every method in javscript

const oddNumber = [1,3, 5, 7, 9, 11]

// const result = oddNumber.every((number, index, array) => {
// //   return number % 2 == 1
//   return number <= 12
// })
// console.log(result)

const result1 = oddNumber.every((number, index, array) => {
  if (number % 2 === 1) {
    return true
  } else {
    return false
  }
})
console.log(result1)
