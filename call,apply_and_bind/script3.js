//bind method in javascript

const user3={
    firstName:"Kailash",
    lastName:"Kumar",
    age:21,
    address:"India"
}

function getUser3(user,param1,param2){
    console.log(user)
}
getUser3.call(this,user3)

//bind method is used to copy the existing method and invoke it for the operation

const emp=["Radhe","Resham","Kailash","Kaksha","Akshay"]

const bindMethod = getUser3.bind(this,emp)
// console.log(bindMethod)//as it is function

//invoking after binding
bindMethod()