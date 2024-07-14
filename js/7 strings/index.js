console.log("In Strings Learning mode")
let k = "Khushi";
console.log(k);
console.log(k[0]);
console.log(k[1]);
console.log(k[2]);
console.log(k[3]);
console.log(k[4]);
console.log(k[5]);
console.log("Length of Khushi is ", k.length);

let KP = "Khushi";
let king = "n!3";
console.log("Her name is " + KP + " and her King Name is " + king);
console.log(`Her name is ${KP} and her king name is ${king}`)
console.log(` hello " khushi is the Perfecgt Person in the WHole Universe "  This is khushi's style `);

let b = "Ankita"
console.log(b.toUpperCase());
console.log(b.toLowerCase());

let u = "Umesh";
console.log(u);

// console.log("Umesh"18");   // Error
console.log(`umesh"18`);
// Use Escape Sequence characters
console.log("umesh\"18");
console.log("umesh\n 18")
console.log(u.length);

//Slicing of a String

let c = "khushi";
console.log(c.slice(2,4));
console.log(c.slice(1,4));
// console.log(c.slice(4,1));
// console.log(c.slice(9,5));  // This will print nothing as Initiation can't be larger than ending 
console.log(c.slice(3,4));
console.log(c.slice(1,90));
console.log(c.slice(1));

console.log(c.replace("h","3"));

console.log(c.concat(b));
// console.log(c.concat(b.toLowerCase()));
// console.log(c.concat(b.toUpperCase()));

console.log(c.concat(b,"Umesh"));

// I can use + operator also
console.log(c+b+"Umesh");

let w = "            so many white spaces are there             ";
console.log(w);
let w1 = w.trim();
console.log(w1);
console.log(w.trim());