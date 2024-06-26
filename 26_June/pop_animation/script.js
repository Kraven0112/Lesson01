const parent = document.querySelector('.image-carousel')

const imgArray = [
    'https://t4.ftcdn.net/jpg/05/54/52/13/360_F_554521329_ngmDQSjSrUSRnbK2xK0bkcprsinG9Xdv.jpg',
    'https://t4.ftcdn.net/jpg/05/48/87/11/360_F_548871133_1qUoweE7LcAmJOlVtNOikZKjXJoR4fhz.jpg',
    'https://t4.ftcdn.net/jpg/05/64/21/75/360_F_564217549_pshtpwr3pSS0BcH8StTSMG98bY01jlok.jpg',
    'https://t3.ftcdn.net/jpg/05/55/35/96/360_F_555359600_ugPv704RasCZclc19uTB51Q1YlzTsI1N.jpg',
    'https://t4.ftcdn.net/jpg/05/82/08/69/360_F_582086939_iCvLhu0qnLU8wOSunw3glDqzZLzGwmJU.jpg',
    'https://t4.ftcdn.net/jpg/05/62/77/29/360_F_562772962_S6tWqgGGFEwPlSJvlMmBQlpvJmSxtCKP.jpg',
    'https://cdn4.sharechat.com/compressed_gm_40_img_928065_2f31998f_1701960925531_sc.jpg?tenant=sc&referrer=pwa-sharechat-service&f=531_sc.jpg',
    'https://thumbs.dreamstime.com/b/couple-panda-taking-dynamic-selfie-shoot-gramicing-face-bathed-pink-sunset-bamboo-sticks-flower-cartoon-love-302086052.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN9IFCkWkSSI9yVsQFZUjJcgkwuysGW_d-6nv-mnBsCi07VSegFCMZrlxnw50r8HDZDug&usqp=CAU',
    'https://imagesvibe.com/wp-content/uploads/2023/03/Cute-Panda-Images2.jpg'
]

let image = document.createElement('img')
let num = 0

function imageCarousel()
{
    if(num == imgArray.length)
        {
            num = 0
        }
        image.src = imgArray[num]
        image.classList.add('image')
        parent.append(image)
        parent.classList.add('opendiv')
        num++
}

setInterval(imageCarousel,1500)





