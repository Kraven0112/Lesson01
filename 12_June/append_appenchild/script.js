//accessing elements using document object
const heading1 = document.querySelector('h1')
const heading2 = document.querySelector('h2')
const paragraph = document.querySelector('p')

// //creating clone of element
// const copyPrargrsaph =  paragraph.cloneNode(true)
// const copyHeading2 = heading2.cloneNode(true)
// const copyHeading1 = heading1.cloneNode(true)

// //using of append() in javascipt
// const parent = document.querySelector('#parent').append(copyHeading1,copyHeading2,copyPrargrsaph)

const parent1 = document.querySelector('#parent1').appendChild(heading1)



// const parent = document.querySelector('#parent')
// const  child = document.querySelector('#child')



// for(let i = 2; i<=10 ; i++)
//     {
//         const copy = child.cloneNode()
//         copy.innerHTML = i
//         parent.appendChild(copy)
//     }



    
   