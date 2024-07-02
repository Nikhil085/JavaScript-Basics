function arm(num){
    const numStr = num.toString();
    const numofDigit = numStr.length;
    let sum = 0;
    for(let digit of numStr){
        sum += Math.pow(parseInt(digit), numofDigit);
    }
    return sum === num;
}

console.log(arm(153)); // true
console.log(arm(154)); // false