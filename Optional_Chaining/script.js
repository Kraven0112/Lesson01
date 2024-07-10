const user={
    name:"Sushil",
    age:21,
    address:{
        city:"Mahendranagar",
        village:"Bhakunda"
    },
    address2:{
        area:"belauri"
    }
}
const x = 'area'
console.log(user.address.city)
console.log(user?.name)
console.log(user.address2?.[x])

//error occurs --> if question mark is removed then, error generate
console.log(user.address1?.village) //output is undefined