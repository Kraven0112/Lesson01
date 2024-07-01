const image = document.querySelector('img')


setInterval(()=>{
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => {
        image.src = data.message
        image.classList.add('image')
    })
},2000)
