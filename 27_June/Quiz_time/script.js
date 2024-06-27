const startbefore = document.querySelector('.startbefore')
const startingbeforecontinent  = document.querySelector('.startingbefore')
const state_1 = document.querySelector('.state-1')


startbefore.addEventListener('click',()=>{
    startingbeforecontinent.classList.add('none')
    state_1.classList.add('open')
})