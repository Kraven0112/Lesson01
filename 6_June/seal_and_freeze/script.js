//using seal() method in object
const company1 ={
    name:"Big Corporation company",
    CEO:"Sushil Chaudhary",
    noOfEmployee:10000,
    location:"India Bengaluru",
    service:"product dealing and production"
}
Object.seal(company1)


//Modification in company1---this will work 
company1.name="Big International Company"
company1.noOfEmployee=20000


//Addition in company1---this will not work
company1.HR = "Madhu"


//deletion of properties---this will not work
delete company1.name


console.log(company1)


//using freeze() in object
const user ={
    name:"Sushil",
    age:20,
    country:"Nepal",
    district:"Kanchanpur",
    city:"Mahendranagar"
}

Object.freeze(user)

//Modification of existing properties --- not work
user.name="Hira Lal"
user.age=36

//Addition of new properties --- not work
user.village="Sudarshanpur"


//deletion of properties --- not work
delete user.name
delete user.age

console.log(user)