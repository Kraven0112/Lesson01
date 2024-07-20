const mechanic = {
  name: "Kailash Patil",
  age: 23,
  address: "Delhi",
  country: "India",
}

// //using forEach in Object.entries()
// Object.entries(mechanic).forEach((entries) => {
//   // console.log(entries) //key value in array form
// })

// //using map in Object.entries()
// Object.entries(mechanic).map((entries) => {
//   // console.log(entries)
// })

// //using reduce in Object.entries()
// Object.entries(mechanic).reduce((acc, current, index, array) => {
//   console.log(array)
// })

Object.keys(mechanic).reduce((acc,curr,index,array)=>{
    console.log(array)
    console.log(acc)
    return"I am acc"
})



// const animal =["cat","dog","cow","buffalo"]

// animal.forEach((animal,index,array)=>{
//     // console.log(animal)
//     // console.log(array)
// })
// animal.map((animal,index,array)=>{
//     // console.log(animal)
//     console.log(array)
// })

// animal.reduce((acc,curr,index,array)=>{
//   console.log(array)
//   console.log(acc)
//   return "I an acc"
// })