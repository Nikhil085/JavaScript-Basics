// swap array Element

function swap(arr, i, j){
 
  [arr[i], arr[j]] = [arr[j], arr[i]];  
}

function swapEle(arr, i,j){
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

let arr = [1,2,3,4,5,6];
swap(arr, 2,5)
console.log(arr); // 1, 2, 6, 4, 5, 3 ]
swapEle(arr, 1,4)
console.log(arr);  // [ 1, 5, 6, 4, 2, 3 ]


