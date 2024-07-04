const blockBtn  =  document.querySelector('.block')
const message = document.querySelector('.get')

// blockBtn.addEventListener('click',()=>{
//     const starttime = Date.now()
//     let currenttime = starttime

//     while(starttime+5000 > currenttime)
//         {
//             currenttime = Date.now()
//             // console.log(currenttime)
//         }
// })

blockBtn.addEventListener('click',()=>{
    const xhr = new XMLHttpRequest()

    xhr.addEventListener('load',()=>{
        message.innerHTML = JSON.parse(xhr.response).message
        console.log(JSON.parse(xhr.response))
    })

    xhr.open("GET","https://procodrr.vercel.app/?sleep=2000")

    xhr.send()
})

