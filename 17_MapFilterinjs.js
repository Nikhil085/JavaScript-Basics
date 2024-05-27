// const myNum = [1,2,3,4,5,6,7];
// const newNum =  myNum.filter((num) => num > 3);
// console.log(newNum);   // [ 4, 5, 6, 7 ]


// const newNum = myNum.filter((num) => {
//     return  num > 4
// })
// console.log(newNum); // [ 5, 6, 7 ]

// const newNum = []
// myNum.forEach((num) => {
//     if(num > 4){
//         newNum.push(num)
//     }
// })
// console.log(newNum); // [ 5, 6, 7 ]

const books = [
    {
      "title": "The Enchanted Forest",
      "price": 12.99,
      "author": "J.K. Rowland"
    },
    {
      "title": "Mystery at Moonlight Manor",
      "price": 15.50,
      "author": "Samantha Blake"
    },
    {
      "title": "Journey to the Stars",
      "price": 20.00,
      "author": "Neil A. Cameron"
    },
    {
      "title": "The Secret of the Old Clock",
      "price": 9.99,
      "author": "Carolyn Keene"
    },
    {
      "title": "Adventures in Wonderland",
      "price": 8.75,
      "author": "Lewis Carroll"
    },
    {
      "title": "The Science of Interstellar",
      "price": 18.95,
      "author": "Kip Thorne"
    },
    {
      "title": "Cooking with Love",
      "price": 25.00,
      "author": "Julia Child"
    },
    {
      "title": "Gardening for Beginners",
      "price": 10.50,
      "author": "Marie Green"
    },
    {
      "title": "The Art of War",
      "price": 7.99,
      "author": "Sun Tzu"
    },
    {
      "title": "Meditations",
      "price": 11.25,
      "author": "Marcus Aurelius"
    }
  ]

  const userBooks = books.filter((bk) => bk.price > 11)
// console.log(userBooks);  

////////////////////////////////////======= Map========/////////////////////////////////////////

// const arr = myNum.map((num) =>  num + 10);
// console.log(arr); // [ 11, 12, 13, 14,15, 16, 17 ];

///////////////////=====chaining======///////////////////

/// that is called chaining after map mathod if we want to manipulate extra values we can use map after map and filter
// method to manipuate arrays values that called chaining ;


// const chain = myNum.map((num) => num * 10) // [10, 20, 30, 40,50, 60, 70]
                    .map((num) => num + 1) // console.log(chain); // [11, 21, 31, 41,51, 61, 71]
                    // .filter((num) => num > 30); console.log(chain); // [ 31, 41, 51, 61, 71 ]



/////////////////////======redice========/////////////////

const arr1 = [1,2,3];

// const myTotal = arr1.reduce(  (acc, curr) => {
//          return acc + curr;
// }, 0);

// console.log(myTotal); // 20


const myTotal = arr1.reduce(  (acc, curr) => {
    return acc + curr;
}, 3);
console.log(myTotal); // 9











