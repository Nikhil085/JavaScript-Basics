// find the index of the NUm

function findNum(arr, num){
    const index = arr.indexOf(num);
    if(index != -1){
        return index
    }else{
        return -1;
    }
}
let arr = [12,23,34,45,5,67,78,89]
let num = 5;
console.log(findNum(arr, num)); // 4