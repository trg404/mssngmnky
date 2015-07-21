

var http= require('http');

http.createServer(function (require, response){
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello Wolrd/n');
}).listen(1337, '127.0.0.1');

console.log('server running at http://127.0.0.1:1337');

