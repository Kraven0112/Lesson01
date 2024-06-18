const parent = document.createElement('div')
const increaseBtn = document.createElement('button')
const decreaseBtn = document.createElement('button')
const inputField = document.createElement('input')
const hr = document.createElement('hr')
const output  = document.createElement('h2')

increaseBtn.innerHTML="Increase"
decreaseBtn.innerHTML="Decrease"

increaseBtn.classList.add('btn')
decreaseBtn.classList.add('btn')
output.classList.add('h2')

inputField.classList.add('input')
inputField.setAttribute('type','number')

parent.classList.add('container')
parent.append(inputField,increaseBtn,decreaseBtn)

let value = inputField.value=12
increaseBtn.addEventListener('click',()=>{

    output.innerHTML = value++
})

decreaseBtn.addEventListener('click',()=>{
    output.innerHTML = value--
})


document.body.append(parent,hr,output)




