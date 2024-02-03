const express = require('express');
const countStudents = require('./3-read_file_async'); // Make sure this path is correct

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  try {
    await countStudents(process.argv[2]); // Assuming the database file path is passed as a command-line argument
    res.end();
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(1245, () => console.log('Server running on port 1245'));

module.exports = app;
