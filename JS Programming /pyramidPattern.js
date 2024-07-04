function pattern(n){
    for(let row=0; row<n; row++){

        for(let s=0; s<=n-row; s++){
            console.log(" ")
        }
      
        for(let col=0; col<=row; col++){
            console.log("* ")
        }
        console.log();
    }
}
pattern(5);