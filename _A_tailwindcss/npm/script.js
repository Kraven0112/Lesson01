import axios from "axios"

let login = document.querySelector('#login')
let id = document.querySelector("#id")
let image = document.querySelector('#image')

axios.get("https://api.github.com/users/Kraven0112")
.then((response)=>{
    login.innerHTML = `Login : ${response.data.login}`
    id.innerHTML = `Id : ${response.data.id}`
    image.src = `${response.data.avatar_url}`
})
.catch(error => console.log(error))