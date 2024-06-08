//regular function
const result = function () {
    return arguments//return all code
//   console.log(arguments)
}
console.log(result(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))


//Arrow function
const result1 = ((...arguments)=>{
    console.log(arguments)
})
result1(1,2,3,4,5)



///Array element in regular function using rest operator
const result3 = function(...arguments)
{
console.log(arguments)
}
result3({
    name:"Suhsil",
    age:21,
    country:"Nepal"
})
result3(2,4,6,8,10)