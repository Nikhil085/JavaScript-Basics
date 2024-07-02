function findMax(arr){
    if(arr.length === 0){
        throw  new console.error("Empty Array !");
    }
    let greatest = arr[0];
    for(let i=0;i<arr.length; i++){
        if(arr[i] > greatest){
            greatest = arr[i];
        }
    }
    return greatest;
}

let num = [3, 5, 1, 9, -2, 7]
console.log(findMax(num)); // 9

function findMin(arr){
    if(arr.length === 0){
        throw  new console.error("Empty Array !");
    }
    let lower = arr[0];
    for(let i=0;i<arr.length; i++){
        if(arr[i] < lower){
            lower = arr[i];
        }
    }
    return lower;
}

console.log(findMin(num)); // -2