const parent = document.createElement('div')
const addBtn = document.createElement('button')
const hr = document.createElement('hr')
addBtn.innerHTML="+"
parent.classList.add('parent')
addBtn.classList.add('button')

document.body.append(addBtn,hr,parent)
let num = 1
addBtn.addEventListener('click',()=>{
    const child = document.createElement('p')
    child.innerHTML = `${num}`
    child.classList.add('child')
    parent.append(child)
    num++
})

parent.addEventListener('click',(event)=>{
    if(event.target !== parent)
        {
            event.target.remove()
        }
})