const play = document.querySelector('#play')
const reverse = document.querySelector('#reversebtn')
const pause = document.querySelector('#pause')
const nextbtn = document.querySelector('#nextbtn')

const music = [
    'Bura_Haal.mp3',
    'Jalsa.mp3',
    'Jhaanjar.mp3',
    'Lehnga.mp3',
    'Chann Sitare.mp3'
]

let num = 0
let audio = new Audio(music[num])


play.addEventListener('click',()=>{
    num++
    if(num == music.length)
        {
            num = 0
        }
   audio.play()
})

pause.addEventListener('click',()=>{
    audio.paused ? audio.play() : audio.pause()
})

nextbtn.addEventListener('click',()=>{
   audio = new Audio(music[num++])
   audio.play()
})


