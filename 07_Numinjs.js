// Number And Math Methods ;

const score = 400;
console.log(score); // 400
const num = new Number(200);
console.log(num); // [Number: 200]

console.log(num.toString); //  [Function: toString]
console.log(score.toString); //  [Function: toString]

console.log(score.toFixed(1)); // 400.0 add point value;

const set = 239.23434; // 239.2  if the value large than 5 than that time his add point i in 2 after point
console.log(set.toPrecision(4)) // remove the value after pointer value and add 

//===============================================================Maths========================

console.log(Math) // is Object

console.log(Math.abs(-3)); // absolute value get 3 negative convert positive ;
console.log(Math.round(4.6)) //  given 5
console.log(Math.round(4.3)) //  given 4 

// Math.min => use find the min value in array
// Math.max => find max value in Array
console.log(Math.random()); // given random num

console.log(Math.random() * 10 + 1); // using the * 10 value moved in left and + 1 willl be take value 1 atleast but not 0

const min = 10;  // wnat values upto 10 and below 20
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // get values under 10 to 20;











