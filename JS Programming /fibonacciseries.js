// fibonacci Series 

function fibo(num){
    const fibeSeries = [0,1];
    
    while(true){
       let nextNum = fibeSeries[fibeSeries.length - 1] + fibeSeries[fibeSeries.length - 2];
       if(nextNum > num) break;
       fibeSeries.push(nextNum);
    }
    return fibeSeries;
}
console.log(fibo(20));
console.log(fibo(50));