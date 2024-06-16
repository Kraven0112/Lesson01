const parent = document.querySelector('.container')

for(let i = 1; i<=100; i++)
    {
        const element = document.createElement('p')
        element.innerHTML=i
        if(i)
            {
                const heading =document.createElement('h4')
                heading.innerHTML="Sanam"
                heading.style.cssText=`color:;
                font-family:sans-serif;`
                parent.append(heading)
            }
        parent.append(element)
    }