const http = require('http');
const app = require('express')();
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

var mainRouter = require('./routes/mainRouter');
app.use('/main', mainRouter);
//const PORT = process.env.PORT || 8081;

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
