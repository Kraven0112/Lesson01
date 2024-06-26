const openpop = document.querySelector('.open-popup')
const modal = document.querySelector('.modal')
const closepop = document.querySelector('.close-icon')

openpop.addEventListener('click',()=>{
    modal.classList.add('open')
    modal.classList.remove('close')
    openpop.style.display="none"
    closepop.addEventListener('click',()=>{
        modal.classList.add('close')
        modal.classList.remove('open')
        openpop.style.display="block"
    })
})
