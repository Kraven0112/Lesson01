const result = function()
{
    for(let i=0; i<arguments.length;i++)
        {
            console.log(arguments[i])
        }
}

result(12,13,14)
result(["Apple","Banana","Grape"])
result({
    name:"Sushil",
    age:20
})