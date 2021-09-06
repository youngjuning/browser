const http = require('http');

const server = http.createServer((request, response) => {
  const body = [];
  request
    .on('error', err => {
      console.log(err);
    })
    .on('data', chunk => {
      body.push(chunk.toString());
    })
    .on('end', () => {
      // body = Buffer.concat(body).toString();
      console.log('body:', body);
      response.writeHead(200, { 'Content-Type': 'text/html' });
      response.end(' Hello World\n');
    });
});

server.listen(8080);

console.log('server starting on http://localhost:8080');
