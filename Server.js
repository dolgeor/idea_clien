// const express = require('express');
// const app = express();
// const path = require('path');
// // Run the app by serving the static files
// // in the dist directory
// app.use(express.static(__dirname + '/dist'));
// // Start the app by listening on the default
// // Heroku port
// app.listen(process.env.PORT || 8080);

// app.get('/*',function(req,res){
//     res.sendFile(path.join(__dirname + '/dist/index.html'));
// })

// console.log('test server js')

var http = require('http');
var httpProxy = require('http-proxy');
var proxy = httpProxy.createProxyServer({});

http.createServer(function(req, res) {
    proxy.web(req, res, { target: 'http://www.google.com' });
}).listen(8080);