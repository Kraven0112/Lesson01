document.querySelector("h1").style.color = "green"
document.querySelector("h1").style.fontFamily = "sans-serif"
document.querySelector("body").style.fontFamily = "cursive"

const arrh5 = document.querySelectorAll("h5")

for (let i = 0; i < arrh5.length; i++) {
  arrh5[i].style.cssText = `
  font-size:25px;
  background-image: linear-gradient(40deg,green,blue,red);
  `
  
}


const arrAnker = document.querySelectorAll('a')

for(let i=0;i<arrAnker.length;i++)
    {
        arrAnker[i].color="teal"
        arrAnker[i].style.textDecoration="none"
        arrAnker[i].style.fontWeight="bold"
        console.log(arrAnker[i].style.cssText)
    }