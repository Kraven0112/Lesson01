//spread operator using in object combining
const city = {
  name: "Bangalore",
  state: "Karnataka",
}
const updateCity = {
  population: "10cr",
  condition: "polluted",
}

const combinedObj = { ...city, ...updateCity }
console.log(combinedObj)

//Spread operator using in array combining
const sweetFruit =["Apple","Banana","Orange","Grape","Dates"]
const sourFruit = ["Lemon","pear","peach"]

const combineFruit = [...sweetFruit,...sourFruit]

console.log(combineFruit)

//combine of numbers using spread operator
const odd = [1,3,5,7,9]
const even = [2,4,6,8,10]

const combineNum = [...odd,...even]
console.log(combineNum)

function addition()
{
    let sum = 0
    for(const num of arguments)
        {
            sum = sum + num
        }
        console.log(sum)
}
addition(...combineNum)

function addition1()
{
    let sum = 0
    for(const i in arguments)
        {
            sum = sum + arguments[i]
        }
        console.log(sum)
}
addition1(...combineNum)