// for of loop in javascript
// used for array  and object mostly


const animals = ["Cat", "Dog", "Rat", "Cow", "Buffalo"]

for (let i = 0; i < animals.length; i++) {
  console.log(animals[i])
}

console.log("*************************")

for (let animal of animals) {
  console.log(animal)
}

console.log("************************")

const fruits = ["Dates", "Jackfruit", "Orange", "apple", "Banana"]

for (let fruit of fruits) {
  console.log(fruit)
}

console.log("************************")

const books = ["Happy moment", "Passed MBBS", "Creation"]

for (let book of books) {
  console.log(book)
}

console.log("************************")
console.log("************************")


const user={
    name:"Sushil",
    age:20,
    country:"Nepal"
}
const userKeys = Object.keys(user)//for keys of objec
for(let key of userKeys)
    {
        console.log(key)
    }


    console.log("************************")
    console.log("************************")

const userValues  = Object.values(user)//for values of keys in object
for(let value of userValues)
    {
        console.log(value)
    }


    console.log("************************")
    console.log("************************")



const userEntries  = Object.entries(user)//for the keys and values in the form of array
for( let array of userEntries)
    {
        console.log(array)
    }


