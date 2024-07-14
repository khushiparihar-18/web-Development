 /*
 Adjectives :
 Crazy 
 Amazing
 Fire

 Shop Name:
 Engine 
 Fppds
 Garments

 Another Word
 Bros
 Limited
 Hub
 */

//  let obj = {
//    "adjctv" : {Crazy,Amazing,Fire},
//    "Shp Nme": {Engine,Foods,Garments},
//    "Anthr wrd": {Bros,Limited,Hub}
//  }

//  for (const key in obj) {

//         const element = object[key];
//         console.log(key,element);
    
//  }

let rnum = Math.random();
// console.log(rnum);
// alert("The generated Random number is ",rnum);
let first,second,third;

if(rnum < 0.33){
    first = "Crazy";
}
else if(rnum < 0.66 && rnum >= 0.33){
    first = "Amazing";
}
else{
    first = "Fire";
}

rnum = Math.random();
if(rnum < 0.33){
   second = "Engine";
}
else if(rnum < 0.66 && rnum >= 0.33){
    second = "Foods";
}
else{
    second = "Garments";
}

rnum = Math.random();
if(rnum < 0.33){
  third = "Bros";
}
else if(rnum < 0.66 && rnum >= 0.33){
   third = "Limited";
}
else{
   third = "Hub";
}

console.log(` ${first} ${second} ${third} `);