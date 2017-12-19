const express = require('express');
var herokuProxy = require('heroku-proxy');
const app = express();
const path = require('path');
// Run the app by serving the static files
// in the dist directory
//////////////////////////////////app.use(express.static(__dirname + '/dist'));
// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 8080);

app.get('/*',function(req,res){
    res.sendFile(path.join(__dirname + '/dist/index.html'));
})

app.use(herokuProxy({
    hostname: 'isd-ideas-back.herokuapp.com/ideas',
    port    : 8080,
    prefix  : 'heroku-api',
    protocol: 'http'
  }));

console.log('test server js')
