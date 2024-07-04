function removeDub(arr){
    return [...new Set(arr)];
}
let arr = [1,1,2,3,3,4,5,6,7];
console.log(removeDub(arr)); // 1, 2, 3, 4, 5, 6, 7 ;