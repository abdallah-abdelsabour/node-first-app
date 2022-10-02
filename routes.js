const fs = require("fs");

const requestHandler = (req, res) => {
  if (req.url == "/") {
    res.write(`<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
    </head>
    <body>
      <h1>
      <form action="/message" method="POST"> 
      enter your phone number
      <br/>
      <input type="text" name="phone_number"/> 
      <button type="submit"> submit </button>
    </form>
</body>
    </html>`);

    res.end();
  }

  if (req.url == "/message" && req.method == "POST") {
    const body = [];

    // add event when chunk is recived

    req.on("data", (chunk) => {
      body.push(chunk);
    });

    // buffer request end

    req.on("end", () => {
      const message = Buffer.concat(body).toString().split("=")[1];

      console.log(message);

      fs.writeFile("hello.txt", message, (error) => {
        if (error) {
          throw new Error("new error");
        }

        // ending res
        res.statusCode = 302;
        res.setHeader("LOCATION", "/");
        res.end();
      });
    });
  }

  // process.exit();
};
console.log("end");

exports.handler = requestHandler;
