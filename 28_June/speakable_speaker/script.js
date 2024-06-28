const play = document.querySelector('#play')

function playSound()
{
    const audio = new Audio("Bura_Haal.mp3")
    audio.play()
    play.addEventListener('click', playSound)
}
setTimeout(playSound,2000)


