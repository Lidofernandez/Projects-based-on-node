var router = require("./router.js");
//Create a web server 
var http = require('http');

http.createServer(function (request, response) {
  router.home(request, response);
  router.user(request, response);
}).listen(1337, "127.0.0.1");

console.log('Server running at http://https://127.0.0.1:1337/'); // this does not do anything is only the console.

//Function that handles the reading of the files and merge in value
