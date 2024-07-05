const promise = new Promise((resolve,reject)=>{
resolve("Promise is resolved")
})
console.log(promise)

promise.then((data)=>{
    console.log(data)
}).catch(error=>{
    console.log(error)
})

