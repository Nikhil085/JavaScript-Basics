//// for Loop and continue

let n = 10;

// for(let i=0; i<=n; i++){
    // console.log(i);
// }

// do while Loop 

// do{
//     console.log(n)
//     ++n;
// }while(n < 20);

////  Array spacific loop   for of loop

// const arr = [1,2,3,4,5];

// for (const i of arr) {
//     console.log(i)
// }

// const Strings = "NIkhil Mahajan";
// for(const i of Strings){
//     console.log(i);
// }


//////    map in js 


// const map = new Map();
// map.set("IN", "NIkhil");
// map.set("PAk", "Linda");
// map.set("Ak", "inda");
// map.set("Pk", "nda");

// console.log(map);

// Map(4) {
//     'IN' => 'NIkhil',
//     'PAk' => 'Linda',
//     'Ak' => 'inda',
//     'Pk' => 'nda'
//   }


// for(const key of map){
//     console.log(key);
// }
// [ 'IN', 'NIkhil' ]
// [ 'PAk', 'Linda' ]
// [ 'Ak', 'inda' ]
// [ 'Pk', 'nda' ]


// for(const [key, value] of map){
//     console.log(key);
// }
// IN
// PAk
// Ak
// Pk

const my = {
   name:"Nikhil",
   no:20,
   height:174
}
// for(const key of my){
//     // console.log(key);  my is not iterable
// }


for(const key in my){
    console.log(my[key]);
}
// Nikhil
// 20
// 174

const coding = ["NIkhil", "Mango", "Lano", "Itera", "Rengku"];
// coding.forEach( function (item) {
//   console.log(item);
// })


// NIkhil
// Mango
// Lano
// Itera
// Rengku