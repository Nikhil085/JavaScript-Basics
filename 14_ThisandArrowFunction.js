const user = {
    username:"NIkhil",
    price:999,

    welComeMessage:function (){
     console.log(`${this.username} welcome here`)
    //  console.log(this); // {
//     username: 'sam',
//     price: 999,
//     welComeMessage: [Function: welComeMessage]
//   }
    }
}

// user.welComeMessage(); // NIkhil welcome here
// user.username = "sam";
// user.welComeMessage();//  sam welcome here


// console.log(this); // {}

//////

// function one(){
//     let username = "Nikhil"
//     console.log(this.username); // undefined
// }
// one();

// const one = function(){
//     let username = "Nikhil"
//     console.log(this.username); // undefined
// }
// one();


// const one = () => {
//     let username = "NIkhil";
//       console.log(this);  // {}
// }

// one();


// const one = () => {
//     let username = "NIkhil";
//       console.log(this.username);  // undefined
// }

// one();


//////////////////////////////

/// Arrow Function


// const addValue = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addValue(2,3))

////////////////


// const addValue = (num1, num2) =>  num1 + num2  // implicit return

// console.log(addValue(2,3)) // 5    if we use curley braces that we need to add return neigher we dont have use return

// const addValue = (num1, num2) =>  (num1 + num2)  // implicit return
// console.log(addValue(4,4)); // 8


const addValue = (num1, num2) =>  ({username:"Nikhil"}) 
console.log(addValue(4,4));  //{ username: 'Nikhil' }

