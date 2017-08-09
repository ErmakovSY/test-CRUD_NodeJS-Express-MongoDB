var http = require('http');
var app = require('./app.js');
var db = require('./app/db');
var config = require('./app/config');
var port = process.env.PORT || config.port;

var server = http.createServer(app);
server.listen(port, function () {
  console.log('Listening on port ', port)
});