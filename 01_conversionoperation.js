let score= "33";
console.log(typeof score);

let integernumber= Number(score);
console.log(typeof integernumber);

let result="33abc";
let resinnumber= Number(result);
console.log(typeof resinnumber);
console.log(resinnumber);     // it gives output Nan(not a number)   ye convert to kr dega string to number typr bhi number hoga but sometimes it may not be pure number 
                               // check this by printing value in js
let a=true;        // 1
let b=undefined;    // NaN
let c= null;       //0
console.table([typeof (a),typeof (b),typeof (c)]);



let loggedIn="sami";

let converttobool= Boolean(loggedIn);

console.log(converttobool);
console.log(typeof converttobool);

//1 => true
//""=> false;
//"sami" => true

let mau= 45;
let convertostr= String(mau);
console.log(convertostr);
console.log(typeof convertostr);



//***************OPERATIONS****************

console.log("1" +2);
console.log( 1+ "2");
console.log( 1 + 2+ "4");
console.log( "3" + 4 + 5);
