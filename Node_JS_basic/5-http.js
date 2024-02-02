const http = require('http');
const countStudents = require('./3-read_file_async'); // Make sure this path is correct

const app = http.createServer(async (req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    try {
      await countStudents(process.argv[2]); // Assuming the database file path is passed as a command-line argument
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end();
    } catch (error) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end(error.message);
    }
  }
});

app.listen(1245, () => console.log('Server running on port 1245'));

module.exports = app;
