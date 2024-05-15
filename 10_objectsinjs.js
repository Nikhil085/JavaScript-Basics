// object literals

// Object.create


const mySym = Symbol("key1");

const jsUser = {
   name:"Nikhil",
   "full Name" : "Nikhil Mahajan", // we cannot access that value using dot;
    [mySym]:"mykey1",
   age:24,
   location:"indore",
   isLogedin:false,
   lastlogindays:["monday", "tuesday"]
}


// access values some way
// console.log(jsUser["full Name"]); // Nikhil Mahajan
// console.log(jsUser["name"]); // Nikhil
// console.log(jsUser.name); // Nikhil
// // console.log( typeof jsUser.mySym); // mykey1 // its given String type not Symbol
// console.log(jsUser[mySym]); // use mysym in square bracket then given type of symbol



// Object.freeze(jsUser) // we cannot change bjects propertise and value
// jsUser.name = "kishan";
// console.log(jsUser);


jsUser.greeting = function(){
    console.log("hello");
}

jsUser.greeting = function(){
    console.log(`Hello ${this.name}`); // Hello Nikhil ,  take refrence from current object; 
}

console.log(jsUser.greeting); // undefined
console.log(jsUser.greeting()); // hello , [Function (anonymous)]

///////////////////////////////////////////////////////////////

// const newobj = new object();  => called singlton obj
const tinder = {};
// console.log(tinder); // not singleton obj

tinder.id = "jsnk323";
tinder.name = "same";
tinder.isLogedin = false;
console.log(tinder); // { id: 'jsnk323', name: 'same', isLogedin: false }


const reguler = {
    email:"nikhil@123",
    fullname:{
        userfullname:{
           firstname:"Nikhil"
        }
    }
}
console.log(reguler.fullname.userfullname.firstname); // NIkhil;


const m1 ={1:"a", 2:'c', 3:"e"};
const m2 ={4:"a", 5:'c', 6:"e"};

// combine values some diffrenet way 

const newm = {...m1,...m2};
console.log(newm); // { '1': 'a', '2': 'c', '3': 'e', '4': 'a', '5': 'c', '6': 'e' }

const newh = Object.assign(m1, m2);
console.log(newh); // { '1': 'a', '2': 'c', '3': 'e', '4': 'a', '5': 'c', '6': 'e' } 

const newf = Object.assign({}, m1, m2);
console.log(newf); // { '1': 'a', '2': 'c', '3': 'e', '4': 'a', '5': 'c', '6': 'e' }


const users = [
    {
        id:1,
        email:"NIkhil@1233440"
    },
    {
        id:2,
        email:"NIkhil@1233440"
    },
    
];
console.log(users[1].email); // NIkhil@1233440;
console.log(tinder);
console.log(Object.keys(tinder)); // [ 'id', 'name', 'isLogedin' ]b
console.log(Object.values(tinder)); // [ 'jsnk323', 'same', false ];








