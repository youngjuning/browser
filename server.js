const http = require('http');

const server = http.createServer((request, response) => {
  let chunks = [];
  request
    .on('error', err => {
      console.log(err);
    })
    .on('data', chunk => {
      chunks.push(chunk);
    })
    .on('end', () => {
      chunks = Buffer.concat(chunks).toString();
      console.log('chunks:', chunks);
      response.writeHead(200, { 'Content-Type': 'text/html' });
      response.end(' Hello World\n');
    });
});

server.listen(8080);

console.log('server starting on http://localhost:8080');
