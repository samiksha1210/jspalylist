const fs= require("fs");
//fs.appendFileSync("./test.txt", `${Date.now()} hey samiksha atharv is here`)
//appendfile is used for appending new entry no need to  frequently overwrite  writefile ....
//fs.copyFileSync('./test.txt', 'copy.txt');

console.log(fs.statSync("./test.txt"));