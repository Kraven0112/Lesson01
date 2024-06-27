const startbefore = document.querySelector('.startbefore')
const startingbeforecontinent  = document.querySelector('.startingbefore')
const state_1 = document.querySelector('.state-1')
const nextBtn = document.querySelector('.nextBtn')

const questionsArray = [
    'Which elemeny is used to highlight text in html ?',
    'Which element is used to put javascript in html ?',
    'whst is the use of append() method in javascript ?',
    "What is the fullform of CSS ? ",
    'What is the use of addEventListener() method ?'
]

startbefore.addEventListener('click',()=>{
    startingbeforecontinent.classList.add('none')
    state_1.classList.add('open')
})