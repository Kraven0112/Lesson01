// this keyword in nested function
function getting(){
    function myget(){
        console.log(this) //presenting window object
    }
    myget()
}
getting()


//this in arrow function
const result=()=>{
     function get(){
        console.log(this) //presents window object
    }
    get()
}



// this keyword in object which have single handed function
const user1={
    firstName:"Sushil",
    lastName:"Chaudhary",
    age:21,
    print(){
        console.log(this) //presents users object
    }
}

// this keyword in an object which has nested function
const user2={
    firstName:"Sushil",
    lastName:"Chaudhary",
    age:21,
    print(){
        function myprint(){
            console.log(this) //present window object
        }
        myprint()
    }
}

// this keyword in an object which has arrow function
const user3={
    firstName:"Aman",
    lastName:"Shreshtha",
    age:20,
    print:()=>{
        console.log(this) //presents window object
    }
}

//arrow forEach method
const user4 = {
  myName: "Sushil Chaudhary",
  numbers: [1, 2, 3, 4],
  print() {
    this.numbers.forEach((num) => {
      console.log(this) //presents user4 object
    })
  },
}

//arrow forEach method using this in end of method
const user5 = {
  myName: "Sushil Chaudhary",
  letter: ["a", "b", "c", "d", "e"],
  print() {
    this.letter.forEach((letter)=> {
      console.log(this) //presents user object
    }, this)
  },
}

//regular forEach method
const user6 = {
  myName: "Sushil Chaudhary",
  letter: ["a", "b", "c", "d", "e"],
  print() {
    this.letter.forEach(function (letter) {
      console.log(this) //presents window object
    })
  },
}

//arrow forEach method without using this keyword in the end
const user7 = {
    myName: "Sushil Chaudhary",
    letter: ["a", "b", "c", "d", "e"],
    print() {
      this.letter.forEach((letter)=> {
        console.log(this) //presents user7 object
      })
    },
  }
