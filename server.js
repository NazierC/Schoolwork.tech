const io = require("socket.io")(3000);
var fs = require('fs');
var crypto = require('crypto');
var newFN;

io.on("connection", socket => {
    socket.on("Create" (data) =>{
        newFN = "0x" + crypto.randomBytes(32).toString('hex');
        console.log(newFN);
        fs.writeFile(`../${newFN}`, data, function(err){
            if (err){
                 console.log(err);
            }
        })     
    });
}); 