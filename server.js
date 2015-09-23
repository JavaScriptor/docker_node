var http = require('http');

var server = http.createServer(function(req, res) {
  res.end('Hello, my process.id is [' + process.pid + ']');
});

server.listen(3003);

