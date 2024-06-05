import fs from 'fs';

function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        const lines = data.trim().split('\n');
        const headers = lines[0].split(',');
        const studentsData = {};

        lines.slice(1).forEach((line) => {
          const values = line.split(',');
          const field = values[headers.indexOf('field')];
          const firstName = values[headers.indexOf('firstname')];

          if (!studentsData[field]) {
            studentsData[field] = [];
          }
          studentsData[field].push(firstName);
        });
        resolve(studentsData);
      }
    });
  });
}

export default readDatabase;
