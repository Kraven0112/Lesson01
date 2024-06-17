const parent = document.createElement("div")
const add = document.createElement("button")
const hr = document.createElement("hr")
let num = 1

add.innerHTML = "+"
add.title="Add new card"
hr.className = "hr"
parent.className = "container"
add.className = "button"
parent.append(add, hr)

add.addEventListener("click", () => {
    const child = document.createElement("div")
    child.className = "child"
    child.innerHTML =`${num}`
    child.title="Hum aagaye"
    parent.append(child)
    num++

})
document.body.append(parent)

// const button =  document.createElement('button')
// button.innerHTML="Click to add"
// button.className='group'

// button.addEventListener('click',()=>{
//     const paragraph = document.createElement('p')
//     paragraph.innerHTML="Using onclick eventListener."
//     document.body.append(paragraph)
// })
// document.body.append(button)

// button.removeEventListener('click')
