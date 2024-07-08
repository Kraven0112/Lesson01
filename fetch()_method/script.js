const idNo = document.querySelector('.id')
const title = document.querySelector('.title')
const detail = document.querySelector('.descript')
const Brand = document.querySelector('.brand')
const Image = document.querySelector('.mblImage')


const promise = fetch('https://dummyjson.com/products')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)

    idNo.innerHTML =`Id : ${data.products[0].id}`

    title.innerHTML = `title : ${data.products[0].title}`

    detail.innerHTML = `description : ${data.products[0].description}`

    Brand.innerHTML =`Brand : ${data.products[0].brand}`
    Image.src = `${data.products[0].images[0]}`
})
.catch((error)=>{
    console.log(error)
})