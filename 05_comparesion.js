// Conparesion Values ;

console.log("2" > 2); // false
console.log(5 > "3"); //  true
console.log([] > {}); // false
console.log({} > []); // true
console.log( 0 > true) // false
console.log(false > 0) // false
console.log(false > 1) // false
console.log(true > 1) // false
console.log("3" > 1) // true

// Not Predictable 

console.log(null > 0) // false
console.log(null == 0) // false
console.log(null >= 0) // true