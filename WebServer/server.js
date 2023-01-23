var http = require('http'); // 1 - Import Node.js core module

var server = http.createServer(function (req, res) {

    if (req.url == '/') {

        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<html><body><p>This is a home Page.</p></nody></html>');
        res.end();

    }
    else if (req.url == "/student") {

        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<html><body><p>This is a student Page.</p></nody></html>');
        res.end();
    }
    else if (req.url == "/admin") {

        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<html><body><p>This is an admin Page.</p></nody></html>');
        res.end();
    }
    else
        res.end('Invalid Request!');

});

server.listen(5000);

console.log('Node,js webserver at port 5000 is running..')