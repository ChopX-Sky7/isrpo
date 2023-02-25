var http = require("http");
var fs = require('fs');

fs.readFile('./index.html', function (err, html){
    if (err) throw err;
    http.createServer(function(request, response) {
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Hello World");
        response.end();
    }).listen(8888);
})


