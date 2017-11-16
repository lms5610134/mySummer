const http = require('http');
const url = require('url');
const fs = require('fs');

function start(router,handle) {
    http.createServer(function (req,res) {
        var pathname = url.parse(req.url).pathname;
        router(handle,pathname,res);
    }).listen('80');
    console.log('server has start!');
}


exports.start = start;