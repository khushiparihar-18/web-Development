console.log("conditional Statements")

let age= 3;
if(age> 18){
    console.log("Above 18");
}
else{
    console.log("Below 18");
}

let a = 2;

// Arithmetic Operators
console.log(age + a);
console.log(age - a);
console.log(age * a);
console.log(age / a);
console.log(age % a);
console.log(age ** a);

// If-else Conditional Statements
if((age+a) > 18){
    console.log("Above 18");
}
else{
    console.log("Below 18");
}

// Assignment Operators

let p=4;
let q=3;

console.log(p);
console.log(q);
console.log(p+=q);
console.log(p-=q);
console.log(p*=q);
console.log(p/=q);
console.log(p%=q);
console.log(p**=q);


// Nested if else and else if statements
// let kid = 0;
// if(kid == 0){
//     console.log(" what ");
// }

// else if(kid == 5){
//     console.log(" some ok ");
// }

// else{
//     console.log(" Good ");
// }

// if(kid <= 5){
//     console.log(" ok ");
// }
// if(kid >= 3){
//     console.log(" o yes ok ");
// }
// else{
//     console.log("no");
// }

//Ternary operator
k=6;
p=9;
let n = p>k ? k+p : k*p ;
// let n = p<k ? k+p : k*p ;
console.log(n);
