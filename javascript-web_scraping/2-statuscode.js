#!/usr/bin/node

// Script to display the status code of a GET request
const url = require('url');

const targetUrl = process.argv[2];
const parsedUrl = new url.URL(targetUrl);

// Determine the protocol
const protocolModule = parsedUrl.protocol === 'https:' ? require('https') : require('http');

// Function to handle the response
const handleResponse = (res) => {
  console.log(`code: ${res.statusCode}`);
};

// Make the GET request
protocolModule.get(targetUrl, handleResponse);
