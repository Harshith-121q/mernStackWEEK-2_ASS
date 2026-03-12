// 💡 Exercise 3: Create a function that receives any number of args as arguments and return their sum using REST parameter
function rest(...a){
    // let sum=0
    // for (let i of a){
    //     sum+=i;
    // }
    // return sum
   

    // OR
     let sum = a.reduce((i,b)=>i+b) // reduce method can be called on and array
    return sum
}
console.log("sum:",rest(10,20,30,40))
