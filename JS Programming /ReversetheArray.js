function reverseArray(arr){
    let left = 0;
    let right = arr.length - 1;
    while(left < right){
       [ arr[left], arr[right]] = [arr[right], arr[left]];
       left++;
       right--;
    }
    return arr;
}

let arr = [1,2,3,4,5,6,7,8];
console.log(reverseArray(arr));// [8, 7, 6, 5,4, 3, 2, 1 ]