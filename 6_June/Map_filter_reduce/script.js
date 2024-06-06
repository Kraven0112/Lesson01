const animals = ["Cat","Dog","Cow","Buffalo","Rat"]

// forEach() method return undefined always

const result1 = animals.forEach((animal)=>{
    // return animal
    console.log(animal)
})

console.log(result1)



console.log("--------------")
console.log("--------------")



//map return array

const result2 = animals.map((animal)=>{
    return animal
})

console.log(result2)