const foodId = document.querySelector('.id')
const name = document.querySelector('.name')
const image = document.querySelector('.image')
async function getRequest(){
    const response = await fetch('https://dummyjson.com/recipes')
    // console.log(response)// returns response 

    // const promise = response.json() // returns promise
    // console.log(promise)

    const actualData = await response.json()//returns actual data
    console.log(actualData.recipes[0])
    foodId.innerHTML=`Food id is  : ${actualData.recipes[0].id}`
    name.innerHTML =`Name of food : ${actualData.recipes[0].name}`
    image.src = actualData.recipes[0].image

}
getRequest()