#!/usr/bin/node

const request = require('request');
const fs = require('fs');

const url = process.argv[2]; // The URL from which to fetch the content
const filePath = process.argv[3]; // The file path where the content should be stored

request(url, (error, response, body) => {
  if (error) {
    console.error(error);
    return;
  }

  fs.writeFile(filePath, body, 'utf-8', (err) => {
    if (err) {
      console.error(err);
    }
  });
});
