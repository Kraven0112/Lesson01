// document.getElementsByTagName('h1')[0].innerHTML="Boot"
const imageUrl = [
  "https://t3.ftcdn.net/jpg/05/56/14/58/360_F_556145886_Tj5D7LLYUCsg5ep3PePd5m8R7eSZB7hy.jpg",
  "https://t4.ftcdn.net/jpg/05/80/33/47/360_F_580334720_5KfjRRpqHsUeQtRemd5dl1Y0R9H71juN.jpg",
  "https://i.pinimg.com/736x/6a/b8/ec/6ab8ec14edef686627aac3219c8b4512.jpg",
]

//spread operator -- converting into actual array
const imagesAll = [...document.images]

//using querySelector --- accessing NodeList[] of images
const images = document.querySelectorAll("img")

//first way
// for(let i =0 ; i < imageUrl.length; i++)
//     {
//         images[i].src = imageUrl[i]
//     }

//second way
// for (let i = 0; i < images.length; i++) {
//   images[i].src = imageUrl[i]
// }

//third way --- for _in loop
// for(const i in imageUrl)
//     {
//         images[i].src=imageUrl[i]
//     }

//fourth way for_of loop
// let num = 0
// for(const i of imageUrl)
//     {
//         images[num].src= i
//         num=num+1
//     }

//fifth way --- using forEach() loop as well as method.
imagesAll.forEach((image, i,array) => {
  image.src = imageUrl[i]
  console.log(array)
})
