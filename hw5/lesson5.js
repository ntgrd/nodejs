const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('x-server', 'my server');
res.writeHead(200, 'ok', {'custom-header': 'test',});
    res.end();
});
server.listen(3000);
