const requestBtn = document.querySelector('.btn')
const dogImage = document.querySelector('img')

requestBtn.addEventListener('click',()=>{
    const xhr1 = new XMLHttpRequest()

    // xhr1.responseText = 'json'


    xhr1.addEventListener('load',()=>{
    // console.log(JSON.parse(xhr.response))
    
    dogImage.src =JSON.parse( xhr1.response).message
    console.log(xhr1)
    })


    // xhr1.onload = ()=>{
    //     dogImage.src = xhr1.response.message
    //     console.log(xhr1)
    // }


    xhr1.open('GET','https://dog.ceo/api/breeds/image/random')
    xhr1.send()
})




// requestBtn.addEventListener('click',()=>{
// fetch('https://dog.ceo/api/breeds/image/random')
// .then(response => response.json())
// .then(data => {
// dogImage.src = data.message
// })
// })