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


// var express     = require('express');
// var herokuProxy = require('heroku-proxy');
// var app         = express();
// const path = require('path');
// // ...set up heroku-bouncer 
 
// app.use(herokuProxy({
//     hostname: 'isd-ideas-back.herokuapp.com/ideas/',
//     port    :  process.env.PORT || 8080,
//     prefix  : 'heroku-api',
//     protocol: 'http'
//   }));

//   app.get('/*',function(req,res){
//     res.sendFile(path.join(__dirname + '/dist/index.html'));
// })



var http = require('http')

var url = require('url')

var server = http.createServer(function(request, response) {

    console.log(request.url)

    var ph = url.parse(request.url)

    var options = {

        port: ph.port,

        hostname: ph.hostname,

        method: request.method,

        path: ph.path,

        headers: request.headers

    }

    var proxyRequest = http.request(options)

    proxyRequest.on('response', function(proxyResponse) {

        proxyResponse.on('data', function(chunk) {

            response.write(chunk, 'binary')

        })

        proxyResponse.on('end', function() { response.end() })

        response.writeHead(proxyResponse.statusCode, proxyResponse.headers)

    })

    request.on('data', function(chunk) {

        proxyRequest.write(chunk, 'binary')

    })

    request.on('end', function() { proxyRequest.end() })

}).listen(8080)