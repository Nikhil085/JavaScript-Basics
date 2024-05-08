/*

using String literals we create String ;

*/

const name = "Nikhil";
const repo = 50;
// console.log(name + " "+repo);

console.log(`${name} & repo ${repo}`); // => String iterpilation

// another way of declare  String 

const NewString = new String("Namaste");
console.log(`${NewString}`);
// access keyValue Pairs
console.log(NewString[0]) // => N 
//length
console.log(NewString.length); // => 7
/*
Methods

toUpperCase();
toLowerCase()
charAt => find on index which character are here now
indexOf => find character index
slice => that is take two values starting point index and end point index but not add end index value ;
split => splite STring into Array of SubString ;
subString => Devide String into SubString;
replace
replaceAll
trim => remove Spaces ; 
includes => add 

*/
console.log(NewString.charAt(2));
console.log(NewString.indexOf('m'));

const New = NewString.slice(0,4);
console.log(New);

const memo = "Nikhil";
const e = memo.split("") // [ 'N', 'i', 'k', 'h', 'i', 'l' ]
console.log(e);
