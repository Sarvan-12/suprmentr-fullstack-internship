const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  console.log(req.url);

  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Welcome to the Home Page!');

  } else if (req.url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('About Page - This is a Node.js server.');

  } else if (req.url === '/contact') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Contact Page - Reach us at hello@example.com');

  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 - Page Not Found');
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});