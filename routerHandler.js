const fs = require('fs');

var handle = {
    "/":function (res) {
        fs.readFile("./index.html",function (err,data) {
            res.writeHead(200,{"Content-Type": "text/html"})
            console.log(res);
            res.end(data);
            return;
        })
    },
    "/start":function (res) {
        console.log("I`m start")
    },
    "/static":function (res) {
        console.log("I`m static")
    },
    "/favicon.ico":function (res) {
        console.log("I`m ico")
    }
}
exports.handle = handle;