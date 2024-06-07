//object creation
const city = {
  name: "Bangalore",
  state: "Karnataka",
  population: "7 crore",
  condition: "pollution",
  development: "High Sustainable-development",
}

//Accessing keys from object
const cityKeys = Object.keys(city)
for (const key of cityKeys) {
  console.log(`key : ${key}`)
}

console.log("----------------")
console.log("----------------")

//Accessing values of keys from object
const cityValues = Object.values(city)
for (const value of cityValues) {
  console.log(`value : ${value}`)
}

console.log("----------------")
console.log("----------------")

//Accessing all properties of object in the form of an array
const cityEntries = Object.entries(city)
for(const entry of cityEntries)
    {
        console.log(entry)
    }