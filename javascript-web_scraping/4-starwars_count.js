#!/usr/bin/node

const request = require('request');
// Import the request module

const apiUrl = process.argv[2];
// Get the API URL from command-line arguments

request(apiUrl, (error, response, body) => {
  // Perform a GET request to the SWAPI films endpoint

  if (error) {
    console.error(error); // Print error if the request fails
    return;
  }

  const films = JSON.parse(body).results;
  // Parse the JSON response and get the array of films

  const wedgeCount = films.filter(film => 
    film.characters.some(url => url.includes('/18/'))
  ).length;
  // Count the number of films where Wedge Antilles (character ID 18) appears

  console.log(wedgeCount);
  // Print the count
});
