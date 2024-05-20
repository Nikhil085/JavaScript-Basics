//// immediate invoke function 



(function fun(){
    console.log("Ok Done");
})();


( () => {
    console.log("Ok Here")
})();


( function name(name = "Nikhil"){
    console.log(`${name}`)
})()
