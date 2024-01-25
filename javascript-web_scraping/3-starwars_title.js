#!/usr/bin/node

const request = require('request');
// Import the request module

const movieId = process.argv[2];
// Get the movie ID from the command-line arguments

const apiUrl = `https://swapi-api.hbtn.io/api/films/${movieId}`;
// Construct the URL for the API request

request(apiUrl, (error, response, body) => {
  // Perform a GET request to the API URL

  if (error) {
    console.error(error); // Print error if the request fails
    return;
  }

  const movie = JSON.parse(body);
  // Parse the response body (JSON) to a JavaScript object

  console.log(movie.title);
  // Print the title of the movie
});
