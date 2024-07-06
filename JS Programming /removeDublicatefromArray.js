// function removeDub(arr){
//     return [...new Set(arr)];
// }
// let arr = [1,1,2,3,3,4,5,6,7];
// console.log(removeDub(arr)); // 1, 2, 3, 4, 5, 6, 7 ;


////////////////////////
function removeDuplicates(array){
    const result = [];
  for(let i=0; i<array.length; i++){
    let isDub = false;
    for(let j=0; j<result.length; j++){
        if(array[i] === result[j]){
            isDub = true;
            break;
        }
    }
    if(!isDub){
        result.push(array[i]);
    }
  }
  return result;
}

const array = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = removeDuplicates(array);
console.log(uniqueArray);