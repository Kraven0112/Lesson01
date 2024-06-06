const animals = ["Cat","Dog","Cow","Buffalo","Rat"]

// forEach() method return undefined always

// const result1 = animals.forEach((animal,index,arr)=>{
//     // return animal
//     console.log(`Index-${index}: ${animal}`)
//     // console.log(arr)
// })

// console.log(result1)



// console.log("--------------")
// console.log("--------------")



//map return array

// const result2 = animals.map((animal,index,arr)=>{
//     console.log(`Index-${index}: ${animal}`)
//     // console.log(arr)
//     return animal.toUpperCase()
// })

// console.log(result2)



//using filter() method
// it creates another files or array to store
const months = ["January","February","March","April","May","December"]

//using month parameter
// const filteredMonth = months.filter((month,index,array)=>{
//     // return month.includes("M")
//     return month.toLowerCase().includes("m" || "M")
//     // return month.toUpperCase().includes("M" || "m")
// })


//using index parameter
const filteredMonth = months.filter((month,index,array)=>{
    return month.length >= 5
})

// console.log(filteredMonth)


const students =[
    {
        name:"Sushil",
        age:20
    },
    {
        name:"Aman",
        age:17
    },
    {
        name:"Suresh",
        age:18
    },
    {
        name:"Phurba",
        age:22
    },
    {
        name:"Akash",
        age:19
    }
]

// const result3 = students.filter((student,index,array)=>{
//     return student.age >= 18
// }).map((student)=>{
//     return student.name
// }).filter((student)=>{
//     return student.includes('S')
// })


// console.log(result3)