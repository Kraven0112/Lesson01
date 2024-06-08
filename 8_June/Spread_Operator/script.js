//using spread operator in objects
const user = {
  name: "Sushil",
  age: 21,
}
const forUser = {
  country: "Nepal",
  district: "Kanchanpur",
  province: "SudurPashchim",
}
const update = {
  village: "Bhakunda",
  tole: "Sudarshanpur",
  wardNo: 5,
}

//combining object altogether using spread operator
const result1 = { ...user, ...forUser, ...update, continent: "Asia" }
console.log(result1.name)
console.log(result1.age)
console.log(result1.country)
console.log(result1.district)
console.log(result1.province)
console.log(result1.village)
console.log(result1.tole)
console.log(result1.wardNo)
console.log(result1.continent)

console.log("---------------")
console.log("---------------")
console.log("---------------")


//arguments keyword in function using for loop
function add() {
  let sum = 0
  for (let i = 0; i < arguments.length; i++) {
    sum = sum + arguments[i]
  }
  console.log(sum)
}
add(1, 2, 3, 4, 5)

console.log("---------------")
console.log("---------------")
console.log("---------------")


//argumnets keyword in function using for_of loop
function product() {
  let product = 1
  for (const num of arguments) {
    product = product * num
  }
  console.log(product)
}
product(10, 10, 10, 10, 10, 10, 10)

console.log("---------------")
console.log("---------------")
console.log("---------------")

//Combined array using spread operator---for_loop
const oddNum = [1, 3, 5, 7, 9]
const evenNum = [2, 4, 6, 8, 10]

const numbers = [...oddNum, ...evenNum]
console.log(numbers)

function add1() {
  let sum = 0
  for (let i = 0; i < arguments.length; i++) {
    sum = sum + arguments[i]
  }
  console.log(sum)
}
add1(...numbers)

console.log("---------------")
console.log("---------------")
console.log("---------------")

//using for_of loop

function adding()
{
    let sum = 0
    for(const num of arguments)
        {
            sum = sum + num
        }
        console.log(sum)
}
adding(...numbers)
