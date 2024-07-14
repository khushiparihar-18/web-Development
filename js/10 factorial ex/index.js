// let a =5;
// let fact = a;
// for (let index = a-1; index > 1; index--) {
    
    
//         fact = index*fact;
        
    
    
// }
// console.log(fact);

let n = 5;

function factorial(number){
        let arr = Array.from(Array(number+1).keys())
        console.log(arr.slice(1,))
        
        // let c = arr.slice(1,).reduce((a,b)=>{
        //         return a*b;
        // })

        let c = arr.slice(1,).reduce((a,b) => a*b)
        return c
}

factorial(n)