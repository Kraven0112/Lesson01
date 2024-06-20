const inputName =  document.querySelector('#username')
const inputAge =  document.querySelector('#userage')
const inputEmail =  document.querySelector('#useremail')
const showName = document.querySelector('#showname')
const showAge = document.querySelector('#showage')
const showEmail = document.querySelector('#showemail')


const userData = JSON.parse(localStorage.getItem("userData")) || {}

// if(userData.name)
//     {
//         showName.innerHTML = userData.name
//     }
// if(userData.age)
//     {
//         showAge.innerHTML  = userData.age
//     }
// if(userData.email)
//     {
//         showEmail.innerHTML = userData.email
//     }

inputName.addEventListener('input',(event)=>{
    userData.name = event.target.value
    localStorage.setItem('userData',JSON.stringify(userData))
    showName.innerHTML =userData.name
})
inputAge.addEventListener('input',(event)=>{
    userData.age = event.target.value
    localStorage.setItem('userData',JSON.stringify(userData))
    showAge.innerHTML =userData.age
})
inputEmail.addEventListener('input',(event)=>{
    userData.email = event.target.value
    localStorage.setItem('userData',JSON.stringify(userData))
    showEmail.innerHTML =userData.email
})

// showName.innerHTML =userData.name
// showAge.innerHTML =userData.age
// showEmail.innerHTML =userData.email