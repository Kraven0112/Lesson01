const hamburgerMenu= document.querySelector('.menu')
const menulist = document.querySelector('.vertical')
const close  = document.querySelector('.close')

hamburgerMenu.addEventListener('click',() => {
    menulist.classList.add('showMenu')
    menulist.classList.remove('vertical')
    hamburgerMenu.style.visibility="hidden"
    close.addEventListener('click',() => {
        menulist.classList.add('vertical')
        hamburgerMenu.style.visibility="visible"
    })
})