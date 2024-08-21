// axios library in javascript
import axios from "axios"

axios.get('https://api.github.com/users/Kraven0112')
.then(response => response.data)
.then(data => console.log(data))
.catch(error => console.log(error))


// fetching data using api 
fetch('https://api.github.com/users/Kraven0112')
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error))