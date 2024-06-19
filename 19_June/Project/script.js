const error = document.querySelector('.error')
const radios = document.querySelectorAll('#radio')
const inputfields = document.querySelectorAll('#inputfield')

const fieldsInput = [...inputfields]

radios.forEach((radio)=>{
    radio.addEventListener('click',(event)=>{
        fieldsInput.every((input)=>{
            return input.value
        })
        if(fieldsInput)
            {
                radio.parentElement.classList.toggle('completed')
            }
            else{
                error.style.display = "block"
            }
    })
})
