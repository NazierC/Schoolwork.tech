const http = require("http").createServer();
const io = require("socket.io")(http, {
    cors: { origin: "*" },
  });
var fs = require('fs');
var crypto = require('crypto');
var newFN;

io.on("connection", socket => {
    console.log('new connection')
    socket.on("Create", (data) => {
        newFN = "0x" + crypto.randomBytes(32).toString('hex');
        console.log(newFN);
        fs.writeFile(`../${newFN}.html`, `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Mr. Joseph Approves!</title>
        </head>
        <body>
            <p>${data}</p>
        </body>
        </html>`, function(err){
            if (err){
                 console.log(err);
            }
            socket.emit('newURL', `${newFN}.html`);
            
        })     
    });
}); 

http.listen(8080, () => console.log("listening on http://localhost:8080"));