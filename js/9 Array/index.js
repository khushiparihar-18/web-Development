// let arr = [3,5,7,"khushi"];
// // let arr = [3,6,7]
// // Arrays are Mutable or can change
// console.log(arr);
// Checking Length of the array
// console.log(arr.length);
// console.log(typeof(arr));  // typeof array is object
// arr[0]=9;
// console.log(arr[0]);
// console.log(arr[3]);
// arr[3] = "ankita";
// console.log(arr[3]);
// console.log(arr[3]);

// // Strings are Immutable or cannot change
// let s= "khushi";
// console.log(s);
// console.log(s[0]);
// s[0] = "N";
// console.log(s[0]);

// //Converting array into comma seperated string
// console.log(arr.toString());   // Here we'll get array as a string or say comma seperated string

// console.log(arr.join( " and " ));

// // pop function removes last element of the array
// console.log(arr.pop());
// console.log(arr);

// // push function add element next to last element of existing array
// // arr.push("umesh");
// console.log(arr.push("umesh"));  // It returns updated length of the array
// console.log(arr);

// // shift function removes first element from the array
// // arr.shift();
// console.log(arr.shift());
// console.log(arr);

// // unshift function add element at the first 
// // arr.unshift(6);
// console.log(arr.unshift(6,9,0));
// console.log(arr);

// // delete function deletes the value at given index but length of array will not be changed there will be allocated memory but no value at that index
// delete arr[5];
// console.log(arr);
// console.log(arr[5]);

// let c = [3,4,5,6,7,8,9,0];
// console.log(c);
// c.push(300);
// console.log(c);
// delete c[3];
// console.log(c);
// console.log(c.length);

// // concat function is used to join the arrays to given array
// let a1 = [1,2,3];
// let a2 = [4,5,6];
// let a3 = [7,8,9];
// console.log(a1);
// console.log(a2);
// console.log(a3);
// console.log(a1.concat(a2));   // concate function don't change the original array a1,a2,a3 will reamin same as declared
// console.log(a1.concat(a2,a3));
// console.log(a1.concat(a3,a2));
// console.log(a1);
// let a4 = a1.concat(a3,a2);
// console.log(a4);
// a4.sort();
// console.log(a4);
/*
I don't know how compare function works here
// let a=65,b=5;
// a4.sort(function (a,b) {return a-b});
*/

// let numbers = [1,2,3,4,5,6,7,8,9,0];
// console.log(numbers);
// console.log(numbers.splice(1,2)); 
// console.log(numbers);
// console.log(numbers.splice(1,5));
// console.log(numbers);
// numbers = [1,2,3,4,5,6,7,8,9,0];
// console.log(numbers);
// console.log(numbers.splice(1,3,55,66,77,99,45,32));
// console.log(numbers);
// console.log(numbers.splice(1,7,222,333,444));
// console.log(numbers);

// let k ="khushi";
// console.log(k.slice(1,3));
// console.log(k);// here k will be khushi as strings have immutibility as a property

// // slice cut out a piece from an array ==> creation of new array
// let num = [6,45,34,2,6,56,7,9];
// console.log(num);
// console.log(num.slice(3));
// console.log(num);
// console.log(num.slice(2,4));
// console.log(num);
// console.log(num.slice(1,5));
// console.log(num);
 
// // Reverse
// console.log(num.reverse());
// console.log(num);

// // LOOPS
// let a = [6,3,8,2,1];
// // For Loop
// for (let i = 0; i < a.length; i++) {
//     const element = a[i];
//     console.log(element);
// }
// // For Each loop
// a.forEach((val,ind,ex) => {
//         // console.log(val,ind,ex);
//         // console.log(val," index is ",ind);   // kp
// });

// let obj = {
        //     a : 1,
        //     b : 2,
        //     c : 3
        // }
        // For in Loop
        // for (const key in obj) {
//     if (Object.hasOwnProperty.call(obj, key)) {
//         const element = obj[key];
//         // console.log(element);
//         // console.log(key);
//         console.log(key,element);
//     }
// }
// For of loop 
// for (const value of a) {
//         console.log(value);
// }


// let a = [6,3,8,2,1];
// let NewA = [];
// for (let index = 0; index < a.length; index++) {
//         const element = a[index];
//         // NewA.push(element+2);
//         // NewA.push(element**2);
//         NewA.push(element+5);
// }
// console.log(NewA);

// //  map
// let a = [5,9,7,8,3]
// let newArr = a.map((e,index,array) =>{
//         return e**2;
// })

// console.log(newArr);

// // Filter
// let a = [3,4,5,6,7,8,14,65,21,565,76,3245,56,5663,65]
// console.log(a);
// // const mod_Seven = (e)=>{
// //         if((e%7) == 0 ){
// //                 return true;
// //         }
// //         return false;
// // }

// // console.log(a.filter(mod_Seven));

// console.log(a.filter((e)=>{
//         if((e%7) == 0 ){
//                 return true;
//         }
//         return false;
// }));

// // Reduce

// let array1 = [3,4,5,6,7,8,9]

// const red = (a,b)=>{
//         return a+b;
// }

// console.log(array1.reduce(red));
                
console.log(Array.from("khushi"))