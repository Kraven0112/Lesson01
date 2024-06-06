//reduce method 

// const numbers =[2,2,true,true,false]
// // debugger
// // const result = numbers.reduce((accumulator,current,index,array)=>{
// //     return accumulator
// // },20) //<------- is initial value 

// // console.log(result)




// debugger
// const numbers1 =[2,2,true,true,false]
// const result1 = numbers1.reduce((accumulator,current)=>{
//    return accumulator == current 
// })
// console.log(result1)//output is false


const numbers2 =[2,2,true,true,false]
const result2 = numbers2.reduce((accumulator,current)=>{
    return accumulator >= current
})
console.log(result2) //output is true