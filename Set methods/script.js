// // const date = new Date("1997-02-13 11:12:13:14")
// const date = new Date("20 Jun 2023 11:12:13:14")

// console.log(date)
// console.log(`miliseconds : ${date.getMilliseconds()}`)
// console.log(`minutes : ${date.getSeconds()}`)
// console.log(`minutes : ${date.getMinutes()}`)
// console.log(`hour : ${date.getHours()}`)
// console.log(`month : ${date.getMonth()}`)
// console.log(`day : ${date.getDay()}`)
// console.log(`year : ${date.getFullYear()}`)
// console.log(date.getYear()) //current year - 1900 


const date = new Date()

//toLocaleTimeString()
console.log(date.toDateString()) //Sun Jul 28 2024
console.log(date.toTimeString()) // 14:59:32 GMT+0530 (India Standard Time)
console.log(date.toJSON()) //2024-07-28T09:30:47.839Z
console.log(date.toLocaleTimeString('en',{timeStyle:"short"})) // 3:03:42 PM
console.log(date.toLocaleTimeString('en',{timeStyle:"medium"}))
console.log(date.toLocaleTimeString('en',{timeStyle:"full"}))
console.log(date.toLocaleTimeString('en',{timeStyle:"long"}))


//toLocaleDateString()
console.log(date.toLocaleDateString('en-GB',{dateStyle:"short"}))
console.log(date.toLocaleDateString('en-GB',{dateStyle:"medium"}))
console.log(date.toLocaleDateString('en-GB',{dateStyle:"long"}))
console.log(date.toLocaleDateString('en-GB',{dateStyle:"full"}))


//function dayName
function getDayName(date){
    const format = date.toLocaleDateString('en-GB',{dateStyle:"full"})
     return format.split(' ')[0]
}
const dayName = getDayName(date)
console.log(`Day : ${dayName}`)




//function monthName
function getMonthName(date){
    const format = date.toLocaleDateString('en-GB',{dateStyle:"full"})

    return format.split(' ')[2]
}
const month = getMonthName(date)

console.log(`Month : ${month}`)





//shorthand way to get month name
function getMonthName2(date){
    return date.toLocaleDateString('en-GB',{month:"long"})
}

//shorthand way to get weekday name
function getDayName2(date){
    return date.toLocaleDateString('en-GB',{weekday:"long"})
}
