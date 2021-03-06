http = require('http');
fs = require('fs');
server = http.createServer(function (req, res) {

    console.dir(req.param);

    if (req.method == 'POST') {
        console.log("POST -->");
        var body = '';
        req.on('data', function (data) {
            body += data;
            //console.log("Partial body: " + body);
        });
        req.on('end', function () {
            console.log("Body: " + body);
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end('post received: ' + body);
        });

    }
    else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end("Try POST method for echo...");
    }

});

port = 3000;
host = '127.0.0.1';
server.listen(port, host);
console.log('Listening at http://' + host + ':' + port);