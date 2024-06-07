// js is prototype based language and everything on js is sythentic sugar.

// part of oop

// constructer function
// Prototype
// classes
// instance (new this)

// 4 pillers
// abstraction
// encapsulation
// polymorphism 
// inheritence

const user = {
    username:"Nikhil",
    age:23,
    sex:"male",
    getUserDetails: function(){
    console.log(`Username : ${this.username}`);
    }
}
console.log(user.getUserDetails());


function User(username, loginCount, isLogin){
   this.username = username,
   this.loginCount = loginCount,
   this.isLogin = isLogin
//    return this;
}

const userOne = new User("NIkhil", "20", true);
console.log(userOne); // User { username: 'NIkhil', loginCount: '20', isLogin: true }