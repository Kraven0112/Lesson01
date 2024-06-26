const openpop = document.querySelector('.open-popup')
const modal = document.querySelector('.modal')
const closepop = document.querySelector('.close-icon')
const inputValue = document.querySelector('.email')
const subscribeBtn = document.querySelector('.subscribeBtn')
const error = document.querySelector('.error')
const newsletter = document.querySelector('.newsletter')
const goback = document.querySelector('.goback')
const message = document.querySelector('.letter')

openpop.addEventListener('click',()=>{
    modal.classList.add('open')
    modal.classList.remove('close')
    openpop.style.display="none"
    closepop.addEventListener('click',()=>{
        modal.classList.add('close')
        modal.classList.remove('open')
        openpop.style.display="block"
        inputValue.value=""
    })
})

subscribeBtn.addEventListener('click',()=>{
    if(inputValue.value == '')
        {
            error.style.display="block"
        }
    else{
        error.style.display="none"
        newsletter.classList.add('newsopen')
        newsletter.classList.remove('newsclose')
        modal.classList.add('close')
        inputValue.value=""
    }
})
goback.addEventListener('click',()=>{
    newsletter.classList.add('newsclose')
    newsletter.classList.remove('newsopen')
    modal.classList.add('open')
    modal.classList.remove('close')
    inputValue.value=""
})
message.addEventListener('click',()=>{
    alert("Thankyou for your subscription and support.")
})