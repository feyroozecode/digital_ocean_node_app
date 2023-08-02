const http = require("http");

const hostname = "localhost";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Assalam Aleykoum , all is fine !");
});

server.listen(port, hostname, () => {
  console.log(`Server listening on http://${hostname}:${port}`);
});