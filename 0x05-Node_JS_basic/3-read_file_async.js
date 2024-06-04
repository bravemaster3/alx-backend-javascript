const fs = require('fs').promises;

function countStudents(path) {
  return fs.readFile(path, 'utf8')
    .then((data) => {
      const lines = data.split('\n').filter((line) => line.trim() !== '');
      if (lines.length <= 1) {
        console.log('Number of students: 0');
        return;
      }
      // const header = lines[0].split(',');
      const students = lines.slice(1).map((line) => line.split(','));
      console.log(`Number of students: ${students.length}`);

      // Create an object to store the students by field
      const fields = {};

      students.forEach((student) => {
        const field = student[3];
        const firstName = student[0];

        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstName);
      });

      // Log the number of students in each field and their names
      for (const field in fields) {
        if (field) {
          const count = fields[field].length;
          const names = fields[field].join(', ');
          console.log(`Number of students in ${field}: ${count}. List: ${names}`);
        }
      }
    })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
}

module.exports = countStudents;
