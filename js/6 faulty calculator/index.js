let random = Math.random()
console.log(random)
let a = prompt("Enter first number")
let c = prompt("Enter Operation")
let b = prompt("Enter second number")

let objct = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",
}

if(random > 0.6){
    // Correct Calculations
    console.log(`The Result is ${a} ${c} ${b}`)
    alert(`The Result is ${eval (`${a} ${c} ${b}`)}`)
    alert(`The Result is ${eval (`${a} ${c} ${b}`)}`)
}

else{
    // Faulty / Wrong Calculations
    c = objct[c];
    console.log(`The Result is ${a} ${c} ${b}`)

}