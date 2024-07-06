const output = document.querySelector('.output')


function makeHttpRequest(method,url){
    const xhr = new XMLHttpRequest()

    xhr.responseType = "json"
    
    const promise = new Promise((resolve,reject)=>{
    xhr.addEventListener('load',()=>{
        resolve(xhr.response)
        
        output.innerHTML = `${xhr.response.users[0].firstName} ${xhr.response.users[0].lastName}`
    })

    xhr.addEventListener('error',()=>{
        reject("Request failed")
    })

    })

    xhr.open(method,url)
    xhr.send()

    return promise
}


makeHttpRequest('GET','https://dummyjson.com/users')
.then((userData)=>{
    console.log(userData)
    return 'https://dummyjson.com/comments'
}).then((message)=>{
    console.log(message)
}).catch((error)=>{
    console.log(error)
})





// makeHttpRequest('GET','https://dummyjson.com/users',(userData)=>{
//     console.log(userData)
//     makeHttpRequest('GET','https://dummyjson.com/posts',(posts)=>{
//         console.log(posts)
//         makeHttpRequest('GET','https://dummyjson.com/comments',(comments)=>{
//             console.log(comments)
//         })
//     })
// })