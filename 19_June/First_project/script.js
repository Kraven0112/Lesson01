const span1 = document.querySelector('#firstSpan')
const span2 = document.querySelector('#secondSpan')
const span3 = document.querySelector('#thirdSpan')
const firstInput = document.querySelector('#first')
const secondInput = document.querySelector('#second')
const thirdInput = document.querySelector('#third')
const label1 = document.querySelector('#one')
const label2 = document.querySelector('#two')
const label3 = document.querySelector('#three')


firstInput.addEventListener('click',()=>{
   span2.innerHTML="1/3"
   label1.classList.add('labelin')
})

secondInput.addEventListener('click',()=>{
    span2.innerHTML="2/3"
    span1.innerHTML=""
    label1.classList.add('labelin')
    label2.classList.add('labelin')
 })

 thirdInput.addEventListener('click',()=>{
    span3.innerHTML=""
    span2.innerHTML="3/3"
    span1.innerHTML=""
    label1.classList.add('labelin')
    label2.classList.add('labelin')
    label3.classList.add('labelin')
 })
 