//style.cssText to manipulate DOM
const arrh4 = document.querySelectorAll("h4")

for (const element of arrh4) {
  element.style.cssText = `
        color:white;
        background-color:blue;
        padding:10px;
        font-size:17px;
        font-family:sans-serif;
        border-radius:10px;
        rotate:-20deg;
        border:2px solid red;
        box-shadow:5px 5px 5px green;
         `
}

//className is also used to manipulate DOM in javascript
const arrh3 = document.querySelectorAll('h3')

for(const elements of arrh3)
    {
        elements.className='update'
    }