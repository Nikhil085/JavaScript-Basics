let a = 1;
const m = 2;
var n = 3;


// console.log(a);
// console.log(m);
// console.log(n);


var n = 300;

if(true){
    let a = 1;
const m = 2;
var n = 3;


}

// // console.log(a);
// // console.log(m);
// console.log(n); // 3
// // given error values inside scope that are not accessible
// // vsr are globale scope that reasone we override n value


// let a = 300;

// if(true){
// let a = 1;
// const m = 2;
// var n = 3;
// // console.log(a);
// }

// console.log(a); // 300
// // let in block scope so we not over ride a value;

/////////////////////////////////////////


// Nested SCope

function one(){
    const usernme = "Nikhil"

    function two(){
        const website = "Youtube"
       console.log(usernme); // NIkhil
    }
    // console.log(website); // Given Error
    two();
}
one();
// Inner function can access the outer function properties but outer does not access ; child can access parents properties

///////////////////////

if(true){
    const username = "Nemo"
    if(username === "Nemo"){
           const num = 3;
           console.log(username +""+ 3)
        }
        console.log(username);
}

/////////////////////////

function addOne(num){       // Called FUnction Declaration , that  are use Hoisting
    return num + 1
}

addOne(5)


const addOne = function(num){       // Called FUnction Exprestion, THat are not Use HoiSting
    return num + 1
}

addOne(5)
   







