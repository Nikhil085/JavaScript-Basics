 // date and time 
 let date = new Date();
//  console.log(date.toDate()); // Thu May 09 2024 03:52:15 GMT+0000 
 console.log(date.toString()); // Thu May 09 2024 03:54:02 GMT+0000 (Coordinated Universal Time)
 console.log(typeof date); // object

 let newDate = new Date(2024, 0, 23);
 console.log(newDate.toDateString());//  Tue Jan 23 2024 

 let mydate = new Date();
 console.log(mydate.getDate());
 console.log(mydate.getDay());

 const get = mydate.toLocaleString('default', {
    weekday:'long',
 })
 console.log(get)
