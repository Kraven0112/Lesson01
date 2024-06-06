const animals=["Cat","Dog","Buffalo","Cow"]

const result = animals.forEach((animal ,index,array)=>{
    // return animal //undefined
    console.log(index,animal) //output all elements
    // console.log(array)//prints array
})
console.log("---------------")
console.log("---------------")

const result1 = animals.forEach((animal,index,array)=>{
    console.log(index,animal)
    // console.log(array)//prints array
})