function findMissing(arr){
   let n = arr.length + 1;
   let expectedSum = n * (n+1)/2;
   let actualSum = arr.reduce((acc, num) => acc + num, 0);
   let missingnum = expectedSum - actualSum;
   return missingnum;
}

let arr = [1,2,3,5];
console.log(findMissing(arr)); // 4