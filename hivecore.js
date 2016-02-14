var static = require('node-static');
var file = new static.Server('./UI');

//Define
var hive = require('http').createServer(function(request, response) {
    request.addListener('end', function() {
        file.serve(request, response);
    }).resume();
});

var io = require('socket.io')(hive);
hive.listen(process.env.PORT || 8080);