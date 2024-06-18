const green = document.querySelector('#green')
const blue = document.querySelector('#blue')
const orange = document.querySelector('#orange')


window.addEventListener('click',(event)=>{
    console.log("6.window event listener")
})
document.addEventListener('click',(event)=>{
    console.log("5.document event listener")
})
document.body.addEventListener('click',(event)=>{
    console.log("4.body event listener")
})
green.addEventListener('click',(event)=>{
    console.log("3.green event listener")
})

blue.addEventListener('click',(event)=>{
    console.log("2.blue event listener")
})

orange.addEventListener('click',(event)=>{
    event.stopPropagation()
    console.log("1.orange event listener")
})