// ++++++++++++++++++++ Arrays in js +++++++++++++++++++++++++++++++++

const arr = [1,2,3,4,5,6,67,7,8];

 console.log(arr[1]); // 2


 const myArray =  new Array("Nikhil", "Hero", "mango", "View"); // [ 'Nikhil', 'Hero', 'mango', 'View' ]
 console.log(myArray[1]); // Hero


// Arrays Methos
const arr1 = [1,2,3];
arr1.push(4);
console.log(arr1);// add in last [ 1, 2, 3, 4 ] 
arr1.pop();
console.log(arr1); // [ 1, 2, 3 ] remove last value
arr1.shift();
console.log(arr1); // remove front value [ 2, 3 ]
arr1.unshift(2);
console.log(arr1); // [ 2, 2, 3 ] add value in front 

arr1.reverse();
console.log(arr1); // revers array Element ;

console.log(arr1.includes(3)) // true  => the value is avaladle in arr1

console.log(arr.indexOf(3)) // given array index

console.log(arr1.join()); // add value in String type and bind values together;

const some = [1,2,3,4,5,6,7];
console.log("after split " +  some.slice(1,3)); // give only  [1, 2] from the array and remove all
console.log(some + "original Array"); 
console.log("after splice " +some.splice(1,3)); //  // its manipulate with original array 
console.log("original Array "+some);


const marvel = ["thor", "iron", "hatman"];
const dc = ["sona", "kona", "sam"];

// marvel.push(dc);
// console.log(marvel); // [ 'thor', 'iron', 'hatman', [ 'sona', 'kona', 'sam' ] ]

const mc = marvel.concat(dc);
console.log(mc); // [ 'thor', 'iron', 'hatman', 'sona', 'kona', 'sam' ]


const allnewheroes = [...marvel,... dc];
console.log(allnewheroes); // [ 'thor', 'iron', 'hatman', 'sona', 'kona', 'sam' ]


const anotherarr = [1,2,3,4,5, [6,7,8,[9,10]]];
const realanother = anotherarr.flat(Infinity);
console.log(realanother); 
// [
//     1, 2, 3, 4,  5,
//     6, 7, 8, 9, 10
//   ]

console.log(Array.isArray("Hitesh")); // false

console.log(Array.from("hitesh")); // [ 'h', 'i', 't', 'e', 's', 'h' ]

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // [ 100, 200, 300 ]






















