let myIntro = '       My name is Sushil Chaudhary.     '

let myAge = 20

const dateOfBirth = 2003

//use of includes method to declare that given word is exists or not
console.log(myIntro.includes('My'))
console.log(myIntro.includes('name'))
console.log(myIntro.includes('is'))
console.log(myIntro.includes('Sushil'))
console.log(myIntro.includes('Chaudhary'))

// use of indexOf method to declare the index of character if available in word.
console.log(myIntro.indexOf('u'))
console.log(myIntro.indexOf('C'))
console.log(myIntro.indexOf('n'))
console.log(myIntro.indexOf('m'))
console.log(myIntro.indexOf('y'))

// use of replace method
console.log(myIntro.replace('My','I'))
console.log(myIntro.replaceAll("Sushil","Krishna"))

// use of concate method
console.log(myIntro.concat("I am from Nepal."))
console.log(myIntro.concat('I am 20 years old.'))

// use of padStart methodm- not function
// const account = 3230
// const accountNo = account.padStart(16,'#')
// console.log(accountNo)

// use of padEnd method - not function
// const phone = 987777
// const phonee= phone.padEnd(12,'*')

// use of charAt method
const name = 'Sushil'
const namee = name.charAt(3)
console.log(namee)

// use of charCodeAt method to see ascii code of any character.
const my = 'Sushil'
const asci = my.charCodeAt(0)
console.log(asci)
console.log(my.charCodeAt(0))

// use of split method
console.log('I am programmer'.split()) // it split whole sentence in one array area.
console.log('I am programmer'.split('')) // it split single charcter of every word as  an array 
console.log('I am programmer'.split(' ')) // it split one word as an array in sentence.


// template string
const num= '0000'
const you = `last four digit number is `.concat(num.padStart(16,'#'))
const me = `last four digit number is ${num.padStart(16,'*')}`
const num2=2222
const balance = `I have ₹${num2} in my account`