const facebook = document.querySelector('.facebook')
const instagram = document.querySelector('.instagram')
const twitter = document.querySelector('.twitter')
const youtube = document.querySelector('.youtube')
const github = document.querySelector('.github')


facebook.addEventListener('click',(event)=>{
    window.location.href="https://www.facebook.com/help/246962205475854"
    event.stopPropagation()
})

instagram.addEventListener('click',(event)=>{
    window.location.href="https://www.instagram.com/withfoundation/?hl=en"
    event.stopPropagation()
})

twitter.addEventListener('click',(event)=>{
    window.location.href="https://x.com/foundation?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
    event.stopPropagation()
})

github.addEventListener('click',(event)=>{
    window.location.href="https://github.com/"
    event.stopPropagation()
})

youtube.addEventListener('click',(event)=>{
    window.location.href="https://www.youtube.com/"
    event.stopPropagation()
})






