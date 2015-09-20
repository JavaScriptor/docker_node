var http = require('http');

var server = http.createServer(function(req, res) {
  res.end('hello i am [' + process.pid + ']');
});

server.listen(3003);

