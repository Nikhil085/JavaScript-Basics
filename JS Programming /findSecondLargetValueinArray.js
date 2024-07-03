// find Second Largest Value !

function findSecondLargest(arr){
    let first = 0;
    let second = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i] > first){
            second = first;
            first = arr[i];
        }else if(arr[i] > second && arr[i] < first){
             second = arr[i]
        }
    }
    return second;
}

let arr = [12,23,4,66,77,8,99,]
console.log(findSecondLargest(arr));