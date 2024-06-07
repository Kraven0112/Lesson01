const numbers = [9,12,0,3,2,4,5,1,8,5]

// const result = numbers.some((number,index,array)=>{
//     // return number > 20 //return false
//     // return number >= 10 //return true
//     // return number < numbers[index] //return false
//     // return number > 0 //return true
// })


debugger
//print odd numbers from array
const result2 = numbers.some((number,iundex,array)=>{
    // if(number % 2 ==1)
    //    {
    //     console.log(number)
    //    }
    //    else{
    //     return false
    //    }

    return number % 2 == 1
    // return number % 2 == 0
})
console.log(result2) // output is true