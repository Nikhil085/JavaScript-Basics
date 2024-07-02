// find Given Num Is Palidrom Or Not 

function palindrom(num){
    const str = num.toString();
    const newStr = str.split("").reverse().join("");
    return str === newStr;
}
// console.log(palindrom(121)); // true
// console.log(palindrom(123)); // false


////////////////////////

function pallindromNum(num){
    if(num < 0){
        return false
    }
    let origin = num;
    let rev = 0;
    while(num > 0){
      const lastDigit = num % 10;
      rev = rev * 10 + lastDigit;
      num = Math.floor(num / 10);
    }
    return origin === rev; 
}

console.log(pallindromNum(121));
console.log(pallindromNum(123));
console.log(pallindromNum(131));