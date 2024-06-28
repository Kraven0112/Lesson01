const startbefore = document.querySelector('.startbefore')
const startingbeforecontinent  = document.querySelector('.startingbefore')
const state_1 = document.querySelector('.state-1')
const goback = document.querySelector('.goback')
const getquestion = document.querySelector('.getquestion')
const nextBtn = document.querySelector('.nextBtn')
const questionNo = document.querySelector('.count')

const option1 = document.querySelector('.option1')
const option2 = document.querySelector('.option2')
const option3 = document.querySelector('.option3')
const option4 = document.querySelector('.option4')

const optiondiv1 = document.querySelector('.firstoption')
const optiondiv2 = document.querySelector('.secondoption')
const optiondiv3 = document.querySelector('.thirdoption')
const optiondiv4 = document.querySelector('.fourthoption')

const question = document.querySelector('.question')
const option = document.querySelector('.option')

const questionsArray = [
    'Which element is used to highlight text in html ?',
    'Which element is used to put javascript in html ?',
    'What is the use of append() method in javascript ?',
    "What is the fullform of CSS ? ",
    'What is the use of addEventListener() method ?'
]

startbefore.addEventListener('click',()=>{
    startingbeforecontinent.classList.add('none')
    state_1.classList.add('open')
})

goback.addEventListener('click',()=>{
    state_1.classList.remove('open')
    state_1.classList.add('state-1')
    startingbeforecontinent.classList.remove('none')
    startingbeforecontinent.classList.add('startingbefore')
    questionNo.innerHTML=""
    option1.innerHTML=""
    option2.innerHTML = ""
    option3.innerHTML = ""
    option4.innerHTML = ""
    getquestion.innerHTML=""
    question.style.visibility ="hidden"
    option.style.visibility ="hidden"
})


let num = 0
nextBtn.addEventListener('click',()=>{
    if(num == questionsArray.length)
        {
            num = 0
        }
    getquestion.innerHTML=questionsArray[num]
    question.style.visibility ="visible"
    option.style.visibility ="visible"

    if(num == 0)
        {
            questionNo.innerHTML=`${num+1}/5`
            option1.innerText="<mark>"
            option2.innerText = "<p>"
            option3.innerText = "<b>"
            option4.innerText = "<hightlight>"
        }
    else if(num == 1)
        {
            questionNo.innerHTML=`${num+1}/5`
            option1.innerText="<script>"
            option2.innerText = "<scripting>"
            option3.innerText = "<javascript>"
            option4.innerText = "<img>"
        }
    else if(num == 2)
        {
            questionNo.innerHTML=`${num+1}/5`
            option1.innerText="To add new child element in parent element"
            option2.innerText = "To delete child element"
            option3.innerText = "To remove child element"
            option4.innerText = "To move child element"
        }
    else if(num == 3)
        {
            questionNo.innerHTML=`${num+1}/5`
            option1.innerText="Chai Sutta Secret"
            option2.innerText = "Cascade Scale Street"
            option3.innerText = "Cascading Style Sheet"
            option4.innerText = "None of above"
        }
    else if(num == 4)
        {
            questionNo.innerHTML=`${num+1}/5`
            option1.innerText="To add  event handlers to one element"
            option2.innerText = "To remove event handler from element"
            option3.innerText = "To handle element"
            option4.innerText = "None of above"
        }
    num++
})

function nextSound(){
    const next = new Audio("next-level-160613.mp3")
    window = next.play()
}

 nextBtn.addEventListener('click',nextSound)


function wrongsound(){
    const wrong = new Audio("wrongAnswer.mp3")
    window = wrong.play()
}

function correctsound(){
    const correct = new Audio("correct-6033.mp3")
    window = correct.play()
}


if(questionsArray[0])
    {
        option1.addEventListener('click',correctsound)
        option2.addEventListener('click',wrongsound)
        option3.addEventListener('click',wrongsound)
        option4.addEventListener('click',wrongsound)
    }

if(questionsArray[1])
    {
        option1.addEventListener('click',correctsound)
        option2.addEventListener('click',wrongsound)
        option3.addEventListener('click',wrongsound)
        option4.addEventListener('click',wrongsound)
    }

 if(questionsArray[2])
    {
        option1.addEventListener('click',correctsound)
        option2.addEventListener('click',wrongsound)
        option3.addEventListener('click',wrongsound)
        option4.addEventListener('click',wrongsound)
    }

if(questionsArray[3])
    {
        option3.addEventListener('click',correctsound)
        option2.addEventListener('click',wrongsound)
        option1.addEventListener('click',wrongsound)
        option4.addEventListener('click',wrongsound)
    }

if(questionsArray[4])
    {
        option1.addEventListener('click',correctsound)
        option2.addEventListener('click',wrongsound)
        option3.addEventListener('click',wrongsound)
        option4.addEventListener('click',wrongsound)
    }
