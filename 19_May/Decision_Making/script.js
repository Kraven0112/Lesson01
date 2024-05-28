const name = prompt('Enter name please.')
const age = parseInt(prompt('Enter age please'))
const gender = prompt('Enter gender')

// + converts null into 0.
// but parseInt() converts null as a NaN(Not a Number)
// `${}` this is called string user template.'

console.log(`Name:${name}`);
// console.log('Name:'+name);
console.log(`Age:${age}`);
// console.log('He is working as a professional.')Sushil

if(age>=20 && age<=45)
    {
        console.log(`${name} is a professional in his field `)
        console.log(`${name} is a college student.`)
       
        if(gender=='Male' || 'male')
            {
            return "He"
        }
        else{
            return "She"
        } 
        console.log(`${gender} is ok`)
        
    }

else{
    console.log('Not eligible for work.')
}