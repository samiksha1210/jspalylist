// for file handliing we use fs module 
const fs= require( "fs" );
const os = require("os");
console.log(os.cpus().length) //max cpus be 8
// synch....
fs.writeFileSync("./test.txt" , "hey there");

// asynchro...

fs.writeFile("./tets.txt" , "hey its asynchronous", (err)=>{})
    // read file
const result=  fs.readFileSync("./contact.txt", "utf-8")
console.log(result);
//asynch...not return anything 
fs.readFile("./contact.txt", "utf-8", (err, result)=>{
   if(err){
        console.log("ERROR", err);
    }
    else{
       console.log(result);
  }
     });
// blocking(synchronous task) and non blocking operations(asynchronous task)
// blocking operation may create problem in case many users  are working on your server 
//in such case  non blocking operations are better

//blocking....synch(threads, default size of threads is 4)
console.log("3");
const result = fs.readFileSync("./test.txt" , "utf-8");
console.log(result)
console.log("5"); 
//use os to maximize size


// non blockcing...asynch
console.log("3");
const result = fs.readFile("./test.txt" , "utf-8" , (err, result)=>{
    console.log(result)
});

console.log("5");

