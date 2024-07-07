//callback hell to retrieve data from server.
// function makeHttpRequest(method,url,callback){
//     const xhr = new XMLHttpRequest()

//     xhr.responseType = 'json'

//     xhr.addEventListener('load',()=>{
//         callback(xhr.response)
//     })

//     xhr.open(method,url)
//     xhr.send()
// }

// makeHttpRequest('GET','https://dummyjson.com/users',(userData)=>{
//     console.log(userData)
//     makeHttpRequest('GET','https://dummyjson.com/posts',(posts)=>{
//         console.log(posts)
//         makeHttpRequest('GET','https://dummyjson.com/comments',(comments)=>{
//             console.log(comments)
//         })
//     })
// })



//using fetch() method retrieve data from server
const firstName = document.querySelector('.firstname')
const lastName = document.querySelector('.lastname')
const middleName = document.querySelector('.middlename')
const age = document.querySelector('.age')
const address = document.querySelector('.address')
const phone = document.querySelector('.phone')
const image = document.querySelector('.image')

const promise = fetch('https://dummyjson.com/users',{
    method:"GET",
    headers:{'Component-Type':'application/json'},
})
.then((userData)=>userData.json())
.then((actualData) =>{
    console.log(actualData.users[0])
    firstName.innerHTML =`firstName : ${actualData.users[0].firstName}`
    lastName.innerHTML = `lastName : ${actualData.users[0].lastName}`
    middleName.innerHTML =`moddleName : ${actualData.users[0].maidenName}`
    age.innerHTML = `Age : ${actualData.users[0].age}`
    address.innerHTML =`Address : ${actualData.users[0].address.country},${actualData.users[0].address.city},
    ${actualData.users[0].address.state},${actualData.users[0].address.address}`
    phone.innerHTML =`Phone-number : ${actualData.users[0].phone}`
    image.src = actualData.users[0].image
})
.catch(()=>console.log("unable to fetch"))

console.log(promise) //fetch is returning promise 