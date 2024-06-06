// Every method is function in javscript

const maths ={
    add : function(a,b)
    {
        return a+b
    },
    square : function(x)
    {
        return x**2
    },
    substract(x,y)
    {
        return x-y
    },

    cube(x)
    {
        return x**3
    }
}

function get() //get() is a function but toUpperCase() is a method
{
    return "hello"
}
console.log(get().toUpperCase())