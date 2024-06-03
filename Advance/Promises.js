///// Promises One

const PromiseOne = new Promise((resolve , reject) => {
     // dp an ASync task
     // DO calls 
     // setTimeOut
   setTimeout(function(){
     console.log('async task is Complete !');
     resolve()
     reject()
   }, 1000)     
})

PromiseOne.then(function(){
     console.log('promise Consume !')
})


new Promise(function(resolve, reject){
     setTimeout(function(){
          console.log('async Task 2');
     }, 1000)
     resolve();
}).then(function(){
     console.log('Promise Consume 2 !');
})

const PromiseThree = new Promise(function(resolve, reject) {
     setTimeout(function(){
          resolve({username:"Nikhil", email:"nikhil@123.com"})
     }, 1000)
})

PromiseThree.then(function(user){
     console.log(user);
})

const PromiseFour = new Promise(function(resolve, reject) {
     setTimeout(function(){
       let error = true
       if(!error){
          resolve({username:"Nikhil", email:"NIkhil@123.com"})
       }else{
          reject('Error: Something Went Wrong')
       }
     }, 1000)
})

 const username = PromiseFour
 .then((user) => {
     console.log(user)
     return user.username
})
.then((username) => {
    console.log(username)
})
.catch((error) => {
     console.log(error);
})
.finally(() => console.log('Finallyt Promise Is Resolve or Rejected !'));

console.log(username);


const PromiseFive = new Promise(function(resolve, reject){
   setTimeout(function(){
     let error = true
     if(!error){
          resolve({username:"JavaSCript", email:"Jscript@123.com"})
     }else{
          reject('Something Went Wrong !')
     }
   }, 1000)
});


async function consumePromiseFive(){
try{
     const response = await PromiseFive
     console.log(response);
}catch(error){
     console.log(error)
}
}
consumePromiseFive();


// async function getAllUser(){
//    try{
//      const response = await fetch('https://jsonplaceholder.typicode.com/users');
//      const data = await response.json(); // the code take time to generate in json that reasne we use await at that place
//      console.log(data);
//    }catch(error){
//      console.log(error);
//    }
// }

// getAllUser();

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
     return response.json()
}).then((data) => {
     console.log(data)
}).catch(error => {
     console.log(error)
})