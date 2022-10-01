const http = require("http");

console.log("start new project ");

http
  .createServer((req, res) => {
    console.log(req, res);
  })
  .listen(8080);

console.log(http);
