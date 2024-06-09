//Destructuring array
const animals = ["Cat", "Dog", "Cow", "Buffalo", "Rat"]

//first-way
const [a, b, ...all] = animals
console.log([a, b, ...all])
console.log(a)
console.log(b)
console.log(...all)

console.log("-------------------------")
console.log("-------------------------")

//second-way
const { 0: animal1, 1: animal2, 2: animal3, 3: animal4, 4: animal5 } = animals
console.log({ 0: animal1, 1: animal2, 2: animal3, 3: animal4, 4: animal5 })
console.log(animal1)
console.log(animal2)
console.log(animal3)
console.log(animal4)
console.log(animal5)

console.log("-------------------------")
console.log("-------------------------")

//Destructuring object
const user = {
  name: "Sushil Chaudhary",
  age: 21,
  country: "Nepal",
  continent: "Asia",
  address: {
    city: "Mahendranagar",
    town: "Belauri",
    village: "Bhakunda",
  },
}
//first layer of object-- single-level dstructuring
const { name: userName, age: userAge } = user
console.log({ name: userName, age: userAge })
console.log(userName)
console.log(userAge)

console.log("-------------------------")
console.log("-------------------------")

//second layer of object---multi-level destructuring
const {
  address: { city: cityName },
  address: { town: townName },
  address: { village: villageName },
} = user
console.log(cityName)
console.log(townName)
console.log(villageName)

console.log("-------------------------")
console.log("-------------------------")

//Destructuring in function passing object
const city = {
  name: "Bangalore",
  state: "Karnataka",
  distrcit: "Bengaluru",
}
function obj({ name: cityName, state: stateName, distrcit: distrcitName }) {
  console.log(cityName, stateName, distrcitName)
}
obj(city)

console.log("-------------------------")
console.log("-------------------------")

//Destructuring in function using array
const fruits = ["Apple", "Banana", "Orange", "Grape", "Dates"]

//first-way
function printFruit1([fruit1, fruit2, , , fruit5]) {
  console.log(fruit1, fruit2, fruit5)
}
printFruit1(fruits)

//second-way === object type key:value
function printfruit2({ 4: fruit5 }) {
  console.log(fruit5)
}
printfruit2(fruits)
