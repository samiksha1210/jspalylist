const http = require("http");
const fs = require("fs");

const myserver = http.createServer((req, res) => {
    const log = `${Date.now()}:${req.url} new request received\n`;
    fs.appendFile("log.txt", log, (err) => {
        //wants t create different page 
        switch(req.url){
            case '/': res.end("homepage");
            break;
            case '/about': res.end("samiiksha is here");
            break;
            default : res.end("404,not found");
        }
    });
});

myserver.listen(8001, () => console.log("Server has started again!"));




//HTTP METHOD 1.GET 2.PUT 3.POST    4. PATCH      5.DELETE
