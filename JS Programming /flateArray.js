// make array flat 


function flateArray(arr){
    let res = [];
    for(let i=0; i<arr.length; i++){
        if(Array.isArray(arr[i])){
            res.push(...flateArray(arr[i]));
        }else{
            res.push(arr[i]);
        }
    }
    return res;
    }


let arr = [[1,2],[3,4],5,6,[7,8,9]];
console.log(flateArray(arr));