const http = require("http");

const fs = require("fs");

const reqHandler = require("./routes");
console.log("start listing ..... ");

http.createServer(reqHandler.handler).listen(8080);
