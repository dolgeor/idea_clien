

const express = require('express');
const app = express();
const path = require('path');
var proxy = require('express-http-proxy');
// Run the app by serving the static files
// in the dist directory
// app.use(express.static(__dirname + '/dist'));
// Start the app by listening on the default
// Heroku port
console.log("asdasdasdasd" + process.env.PORT)
app.listen( PORT || 3000);
app.use('/api', proxy("https://isd-ideas-back.herokuapp.com/"));


// app.get('/*', function (req, res) {
//     console.log(req, res);
// })
console.log('test server js')


// var express     = require('express');
// var herokuProxy = require('heroku-proxy');
// var app         = express();
// const path = require('path');
// // ...set up heroku-bouncer 

// app.use(herokuProxy({
//     hostname: 'isd-ideas-back.herokuapp.com/ideas/',
//     port    :  process.env.PORT || 8080,y

//     prefix  : 'heroku-api',
//     protocol: 'http'
//   }));

//   app.get('/*',function(req,res){
//     res.sendFile(path.join(__dirname + '/dist/index.html'));
// })

