const fs = require('fs');

function countStudents(path) {
  let data;
  try {
    data = fs.readFileSync(path, 'utf8');
  } catch (error) {
    throw new Error('Cannot load the database');
  }

  const lines = data.split('\n');
  const students = lines.slice(1).filter((line) => line !== '');
  console.log(`Number of students: ${students.length}`);

  const fields = {};
  for (const student of students) {
    const columns = student.split(',');
    const field = columns[columns.length - 1];
    if (!fields[field]) {
      fields[field] = [];
    }
    fields[field].push(columns[0]);
  }

  for (const field in fields) {
    if (field) {
      const count = fields[field].length;
      const names = fields[field].join(', ');
      console.log(`Number of students in ${field}: ${count}. List: ${names}`);
    }
  }
}

module.exports = countStudents;
