const paragraph = document.querySelector('p')

paragraph.innerHTML //--> considers all style of elements
paragraph.innerText //--> considers only what we see in brpwser 
paragraph.textContent //--> considers  only styles in elements

const image = document.createElement('img')
image.src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcToGc3axmHEI0kzji9TR_FaGx8NIrYudOHC1Y9wmzkgtWdZdRV4"
document.querySelector('body').appendChild(image)
image.style.width="100%"