// Importing required modules
const express = require('express');
const fs = require('fs').promises;

function countStudents(path) {
  return fs.readFile(path, 'utf8')
    .then((data) => {
      const lines = data.split('\n').filter((line) => line.trim() !== '');
      if (lines.length <= 1) {
        return 'Number of students: 0';
      }

      const students = lines.slice(1).map((line) => line.split(','));
      const totalStudents = `Number of students: ${students.length}`;
      const fields = {};

      students.forEach((student) => {
        const field = student[3];
        const firstName = student[0];
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstName);
      });

      let result = `${totalStudents}\n`;
      for (const field in fields) {
        if (field) {
          const count = fields[field].length;
          const names = fields[field].join(', ');
          result += `Number of students in ${field}: ${count}. List: ${names}\n`;
        }
      }

      return result.trim();
    })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
}

// Creating an instance of Express
const app = express();

// Define a route for the endpoint "/"
app.get('/', (req, res) => {
  // Send "Hello Holberton School!" as the response
  res.send('Hello Holberton School!');
});

// Define a route for the endpoint "/students"
app.get('/students', (req, res) => {
  const database = process.argv[2] || 'database.csv';

  countStudents(database)
    .then((result) => {
      res.send(`This is the list of our students\n${result}`);
    })
    .catch((error) => {
      res.send(`This is the list of our students\n${error.message}`);
    });
});

// Start the server and listen on port 1245
app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

// Export the Express app
module.exports = app;
