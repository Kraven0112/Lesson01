
// result(12)   //cannot access before initialization
// debugger
const result = function(x)
{
    return x**2
}
// console.log(result(12))


//Arrow function

const arrow = (num) => num**2 //implicit return without using return keyword

const add = (x,y) => x+y //implicit return without using return keyword


const cube = (x) => x**3

const random = () =>Math.floor(Math.random()*10)


const product = (x,y) =>{
    return x*y
}



const square = (x) =>{
    return x**2
}

const timer1 = setInterval(square2,5000)
function square2(){
console.log( 12**2)
}



