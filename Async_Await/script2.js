//for try catch and finally  in javascript 
// try catch and finally is used for error handling in javascript.

try{
    console.log(num) //error num is not defined 
    const result = 2/0
    console.log(result)  //output will be infinity
}catch(error){
    console.dir(error)
}finally{
    console.log("Either error generated or not ,finally get printed ")
}