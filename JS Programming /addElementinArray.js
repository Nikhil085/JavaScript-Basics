let arr = [1,2,3,4,5];
arr.splice(2,0,2.5);
console.log(arr); // [ 1, 2, 2.5, 3, 4, 5 ]

// using Push => array last index value add

arr.push(5)
console.log(arr); // [ 1, 2, 2.5, 3, 4, 5, 5 ]

// using Shift => last index

arr.shift(66)
console.log(arr); // [ 2, 2.5, 3, 4, 5, 5 ]

// using unShift => zeroth index
arr.unshift(66)
console.log(arr); // [ 2, 2.5, 3, 4, 5, 5, 66 ]