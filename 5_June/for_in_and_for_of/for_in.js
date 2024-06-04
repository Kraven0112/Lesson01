//for in loop works in array as well as object

const books=["Happy moment","Passed MBBS","Creation"]

    for(let book in books)
         {
             console.log(books[book])
        }

console.log("******************************")
console.log("******************************")

const user={
    firstName:"Sushil",
    lastName:"Chaudhary",
    age:20,
    country:"Nepal"
}

for(let key in user)
    {
        console.log(key,":",user[key])
    }


