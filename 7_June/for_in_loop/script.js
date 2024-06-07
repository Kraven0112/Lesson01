//using for_in loop in an array
const animals = ["Cat", "Dog", "Cow", "Buffalo", "Rat"]
for (const animal in animals) {
  console.log(animal) //<---- this is index
  console.log(animals[animal]) //<---elements
}

console.log("----------------------------")
console.log("----------------------------")

//using for_in loop in object
const user = {
  name: "Sushil",
  age: 20,
  city: "Mahendranagar",
  country: "Nepal",
}

for (const key in user) {
  console.log(key) //<---this is key only
  console.log(user[key]) //<---value of keys of object
}
