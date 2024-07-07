// let arr = [1,2,3,4,5];
// arr.splice(2,0,2.5);
// console.log(arr); // [ 1, 2, 2.5, 3, 4, 5 ]

// // using Push => array last index value add

// arr.push(5)
// console.log(arr); // [ 1, 2, 2.5, 3, 4, 5, 5 ]

// // using Shift => last index

// arr.shift(66)
// console.log(arr); // [ 2, 2.5, 3, 4, 5, 5 ]

// // using unShift => zeroth index
// arr.unshift(66)
// console.log(arr); // [ 2, 2.5, 3, 4, 5, 5, 66 ]

// insert the elelemtin perfect Place ////

function inserttheElement(arr, index, element){
    let newArr =  Array new [];
    for(let i=0; i<arr.length+1; i++){
        if(arr[i] < index){
            newArr[i] = arr[i];
        }else if (index == arr[i]){
            newArr[i] = element;
        }else{
            newArr[i] = arr[i-1];
        }
    }
    return newArr;
    }


let arr = [1,2,3,4,5,6];
let index = 4;
let element = 99;
console.log(inserttheElement(arr, index, element));


