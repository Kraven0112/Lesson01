//setTimeout and setInterval are the provided by webApi in browser , they are not the part of javascript


// setTimeout
// function data() {
//   setTimeout(() => {
//     console.log(arguments)
//     console.log("------------------------")
//     console.log("------------------------")
//   }, 1000)
// }

// data(["Cow", "Cat", "Dog", "Rat"])
// data(12, 13, 14, 15, 16, 17, 18, 19, 20)
// data(
//   {
//     name: "Sushil Chaudhary",
//     age: 20,
//     country: "Nepal",
//     continent: "Asia",
//     district: "Kanchanpur",
//   },
//   {
//     name: "Hira Lal Chaudhary",
//     age: 35,
//     country: "Nepal",
//     continent: "Asia",
//     district: "Kanchanpur",
//   }
// )

// function add(x, y) {
//   setTimeout(() => {
//     console.log(`Sum is ${x + y}`)
//   }, 5000)
// }
// add(122, 122)


// setInterval
// Method-1

// function groot(x,y)
// {
//     setInterval(()=>{
//         console.log(x+y)
//     },4000)
// }
// groot(122,122)

// Method-2
setInterval(()=>{
    function get(x,y)
    {
        return x+y
    }
    console.log(get(12,12))
},5000)

