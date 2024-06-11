const imgUrl = [
    'https://i.pinimg.com/236x/79/93/21/7993211d8980249cfa7059daf45abeb4.jpg',
    'https://t4.ftcdn.net/jpg/05/60/45/17/360_F_560451768_jWYMPxmXeqHQmh6qQ1U70990Hzri5jO3.jpg',
    'https://t4.ftcdn.net/jpg/05/80/33/47/360_F_580334720_5KfjRRpqHsUeQtRemd5dl1Y0R9H71juN.jpg',
    'https://i.pinimg.com/736x/6a/b8/ec/6ab8ec14edef686627aac3219c8b4512.jpg',
    'https://i.pinimg.com/736x/4c/57/14/4c57143bc40674c3a843f1d0657b01de.jpg'
]

const arrImg = document.querySelectorAll('img')

for(const index in imgUrl)
    {
        arrImg[index].src=imgUrl[index]
    }

for(const image of arrImg)
    {
        image.style.width="100%"
        image.style.height="800px"
        image.style.borderRadius="130px"
    }