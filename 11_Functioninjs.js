function Name(){
    console.log("N");
console.log("i");
console.log("k");
console.log("h");
console.log("i");
console.log("l");
}

Name();  // function refrence and we call  that  

             // parameter
function add(num1, num2){
  console.log(num1 + num2)
}

  // arguments
add(1,2);


function pl(num1, num2){
    return num1 + num2
  }

  const plus = pl(2,3)
  console.log(plus)

////////////////////////

function userLogin(username){
     return `${username} just Loged in`
}

const isLogin =  userLogin("NIkhil"); // if NOt Passed any value tyhen we get from the function undefine;
console.log(isLogin);  


function Login(username){
    if(username === undefined){
        console.log("Check Username Now - ")
        return
    }
    return `${username} just Loged in`
}

console.log(Login()); // Check Username Now -  , undefined 



