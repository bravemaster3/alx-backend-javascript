// Importing required modules
const express = require('express');
const countStudents = require('./3-read_file_async');

// Creating an instance of Express
const app = express();

// Define a route for the endpoint "/"
app.get('/', (req, res) => {
  // Send "Hello Holberton School!" as the response
  res.send('Hello Holberton School!');
});

// Define a route for the endpoint "/students"
app.get('/students', (req, res) => {
  let database = req.query.database || 'database.csv';

  countStudents(database)
    .then(result => {
      res.send(`This is the list of our students\n${result}`);
    })
    .catch(error => {
      res.send(`This is the list of our students\n${error.message}`);
    });
});

// Start the server and listen on port 1245
const server = app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

// Export the Express app
module.exports = app;
