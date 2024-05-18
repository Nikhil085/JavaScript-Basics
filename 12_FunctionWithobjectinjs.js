                       // Rest Pearameter
function addCardPrice(...num){
    return num;
}

console.log(addCardPrice(200, 300, 400)); 
  // we passed num of arguments to the function  

  ///////////////////////////
  
  const user ={
    username:"Nikhil",
    price:199
  }
function handleUser(anyUser){
    console.log(`Username is ${anyUser.username} and Price is ${anyUser.price}`);
}

handleUser(user);


////////

handleUser({
    
        username:"MEnto",
        price:200
    
})   // override object propertise


///////////////

const arr = [2,3,4,5,6];

function arrFun(getArr){
    return getArr[1];
}

console.log(arrFun(arr));