/*
    ___ usage: en_US ___
    usage: node server.js
    Launch an amalgamated agent configured and monitored by a wrapper process.
    ___ usage ___
*/

console.log(process.argv.slice(2))

var http = require('http');
http.createServer(function (req, res) {
      res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Hello World\n');
}).listen(1337);
console.log('Server running at http://127.0.0.1:1337/');
