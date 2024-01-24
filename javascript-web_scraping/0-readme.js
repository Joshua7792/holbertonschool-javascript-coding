#!/usr/bin/node

const fs = require('fs');
// Import the 'fs' (file system) module to enable file reading and writing operations

const filePath = process.argv[2];
// Retrieve the file path from the command-line arguments

fs.readFile(filePath, 'utf-8', (err, data) => {
  // Use fs.readFile to read the file asynchronously. Provide the file path
  // and a callback function that will be called with the results.

  if (err) {
    console.error(err);
    // If there is an error during reading (e.g., file not found)
    return;
  }

  console.log(data);
  // If the file read, log its content. 'data' contains the file content.
});
