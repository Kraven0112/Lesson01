//Using GET request method
// fetch('https://dummyjson.com/products',{
//     method : 'GET'
// })
// .then((response) => response.json())
// .then((data) => console.log(data))


//using POST request method
// fetch('https://dummyjson.com/products/add',{
//     method:'POST',
//     headers:{'Content-Type':'application/json'},
//     body: JSON.stringify({
//         title:"SOftaware tools",
//         description:"00112-m14-cgp25"
//     })
// })
// .then((response)=>response.json())
// .then((data)=>console.log(data))
// .catch((error)=>console.log(error))


//using DELETE request method
fetch('https://dummyjson.com/products/5',{
    method:'DELETE',
    headers:{'Content-Type':'application/json'},
})
.then((Response) => Response.json())
.then((data) => console.log(data))
.catch((error) => console.log(error))