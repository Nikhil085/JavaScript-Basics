
function findSum(arr){
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i] > 0){
         sum += arr[i];
        }
    }
    return sum;
}


let arr = [1,2,-2,-5];
console.log(findSum(arr));
