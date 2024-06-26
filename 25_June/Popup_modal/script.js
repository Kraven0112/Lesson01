const openpopup = document.querySelector(".open")
const modal =  document.querySelector('.main')
const close = document.querySelector('.close-icon')
const subscribeBtn = document.querySelector('.subscribeBtn')
const newsletter = document.querySelector('.newsletter')
const letter = document.querySelector('.letter')
const inputField = document.querySelector('.inputField')
const error = document.querySelector('.error')
const back = document.querySelector('.back')

openpopup.addEventListener('click',()=>{
    modal.style.display="block"
    openpopup.style.display="none"
    close.addEventListener('click',()=>{
        modal.style.display="none"
        openpopup.style.display="block"
    })
})
subscribeBtn.addEventListener('click',()=>{
    if(inputField.value == false)
        {
            error.style.display="block"
        }
    else{
        newsletter.style.display="flex"
        modal.style.display="none"
        inputField.value=""
        openpopup.style.display="none"
        error.style.display="none"
    }
})

letter.addEventListener('click',()=>{
    alert("Thankyou for your support and subscription.")
})
back.addEventListener('click',()=>{
     openpopup.style.display="none"
     newsletter.style.display="none"
     modal.style.display="block"
})