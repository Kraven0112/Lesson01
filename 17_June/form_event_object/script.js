const form = document.querySelector('form')

//event.target --- using click
//event.target could be change
form.addEventListener('click',(event)=>{
    event.preventDefault()
    console.log(event.target)
    console.log(event.currentTarget)
})
// form.addEventListener('submit',(event)=>{
//     event.preventDefault()
//     const myFromData =  new FormData(form)
//     // console.log(myFromData)

//     // console.log(myFromData.entries())
//     for(const p of myFromData.entries())
//         {
//             console.log(p)
//         }
// })


// const user = document.querySelector('#user')
// const paragraph = document.createElement('p')
// document.body.append(paragraph)

//input event 
// user.addEventListener('input',(event)=>{
//     paragraph.innerHTML=event.target.value
// })

//change event
// user.addEventListener('change',(event)=>{
//     paragraph.innerHTML = event.target.value
// })

//focus event 
// user.addEventListener('focus',(event)=>{
//     paragraph.innerHTML = event.target.value
// })

//blur event 
// user.addEventListener('blur',(event)=>{
//     console.log(event)
//     paragraph.innerHTML = event.target.value
// })
