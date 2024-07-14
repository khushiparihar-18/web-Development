console.log("KHUSHI is always here")

var a = 3;
a = a + 1;
var b = 6;
var c = "khushi";
console.log(c)
console.log(a)
console.log(b)
console.log(a + b + 10)
console.log(typeof a, typeof b, typeof c)

var a1 = 5;
// var a1 = 50;  // var can be redeclared
// var 33n = " kp " // Syntax Error
a1 = a1 + 3;
{
    // var a1 = 89;
    console.log(a1);
}
console.log(a1);

var a2 = 7;
a2 = a2 + 3;
{
    let a2 = 9;
    // let a2=89;  // let cannot be redeclared
    a2 = a2 + 10;
    console.log(a2);
}
console.log(a2);


// const d; // Error : Missing Initializer in const declaration
// d=45;       
const d =90;
console.log(d);
// const d =56;
//constant can neither be updated nor be redeclared
// d=d+3;      // Not Allowed as d is constant

// Primitive Data Types

let p = "khushi_parihar";
let q = 3;
let r = 5.37;
const s = false;
const t = true;
let u = undefined;
let v = null;
console.log(p,"     ",q, "    " ,r, "     ",s,"       ",t,"      ",u,"      ",v)
console.log(typeof p,"          " ,typeof q,"  ",typeof r,"   ",typeof s,"     ",typeof t,"   ",typeof u,"      ",typeof v)

let o = {
    name : " KhUsHi",
    "job code": 33333 , 
    is_perfect : true,
}
console.log(o);
o.salary = "100crores";
console.log(o);
o.salary = "500crores";
console.log(o);