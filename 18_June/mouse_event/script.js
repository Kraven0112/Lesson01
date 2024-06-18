const div = document.createElement('div')
const add = document.createElement('button')
const hr  = document.createElement('hr')
add.innerHTML="+"
add.classList.add('btn')
// add.draggable=true
div.classList.add('container')

let num = 1

// add.addEventListener('mousedown',()=>{
//     const element = document.createElement('h2')
//     element.innerHTML = num
//     element.classList.add('element')
//     num++
//     div.append(element)
// })


// add.addEventListener('mouseup',()=>{
//     const element = document.createElement('h2')
//     element.innerHTML = num
//     element.classList.add('element')
//     num++
//     div.append(element)
// })

// add.addEventListener('mouseenter',()=>{
//     const element = document.createElement('h2')
//     element.innerHTML = num
//     element.classList.add('element')
//     num++
//     div.append(element)
// })

// add.addEventListener('mouseleave',()=>{
//     const element = document.createElement('h2')
//     element.innerHTML = num
//     element.classList.add('element')
//     num++
//     div.append(element)
// })

// add.addEventListener('mousemove',()=>{
//     const element = document.createElement('h2')
//     element.innerHTML = num
//     element.classList.add('element')
//     num++
//     div.append(element)
// })


// add.addEventListener('mouseout',()=>{
//     const element = document.createElement('h2')
//     element.innerHTML = num
//     element.classList.add('element')
//     num++
//     div.append(element)
// })


// add.addEventListener('mouseover',()=>{
//     const element = document.createElement('h2')
//     element.innerHTML = num
//     element.classList.add('element')
//     num++
//     div.append(element)
// })

// add.addEventListener('wheel',()=>{
//     const element = document.createElement('h2')
//     element.innerHTML = num
//     element.classList.add('element')
//     num++
//     div.append(element)
// })

// document.addEventListener('scroll',()=>{
//     const element = document.createElement('h2')
//     element.innerHTML = num
//     element.classList.add('element')
//     num++
//     div.append(element)
// })


// add.addEventListener('touchstart',()=>{
//     const element = document.createElement('h2')
//     element.innerHTML = num
//     element.classList.add('element')
//     num++
//     div.append(element)
// })

// add.addEventListener('touchend',()=>{
//     const element = document.createElement('h2')
//     element.innerHTML = num
//     element.classList.add('element')
//     num++
//     div.append(element)
// })

// add.addEventListener('touchmove',()=>{
//     const element = document.createElement('h2')
//     element.innerHTML = num
//     element.classList.add('element')
//     num++
//     div.append(element)
// })

// add.addEventListener('drag',()=>{
//     const element = document.createElement('h2')
//     element.innerHTML = num
//     element.classList.add('element')
//     num++
//     div.append(element)
// })

// add.addEventListener('pointermove',()=>{
//     const element = document.createElement('h2')
//     element.innerHTML = num
//     element.classList.add('element')
//     num++
//     div.append(element)
// })

add.addEventListener('pointerenter',()=>{
    const element = document.createElement('h2')
    element.innerHTML = num
    element.classList.add('element')
    num++
    div.append(element)
})

document.body.append(add,hr,div)