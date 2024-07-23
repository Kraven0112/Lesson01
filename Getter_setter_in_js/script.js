class Company{
    constructor(name,ceo,noOfEmp){
        this.name=name
        this.CEO=ceo
        this.noOfEmp=noOfEmp
    }

    getFullDetail(){
        return `The name of the company is ${this.name}. There are ${this.noOfEmp} employs in the company. The CEO of this company is ${this.CEO}.`
    }

    get FullDetail(){
            return `The name of the company is ${this.name}. There are ${this.noOfEmp}employs in the company. The CEO of thiscompany is ${this.CEO}.`
    }

    set FullDetail(data){
        const [name,ceo,noOfEmp] = data.split(' ')
        this.name = name
        this.ceo = ceo
        this.noOfEmp = noOfEmp


    }
}
const company1 = new Company("SSk Production Pvt Ltd","Srikant Sharma",5000)

company1.FullDetail="SSK Srikant 5000"










// const user={
//     name:"Sushil Chaudhary",
//     age:21,
//     get getDetail(){
//         console.log("getter.........")
//         return `My name is ${this.name}. I am ${this.age} years old.`
//     },
//     set getName(position){
//         this.odda=position
//     },
//     odda:[]
// }
// console.log(user.getDetail)
// user.getName="Software Developer"

// console.log(user.odda)



// const user2={
//     set getPosition(position){
//         this.myPosition=position
//         console.log(position)
//     },
//     myPosition:[]
// }

// user2.getPosition="developer"

// console.log(user2.myPosition)