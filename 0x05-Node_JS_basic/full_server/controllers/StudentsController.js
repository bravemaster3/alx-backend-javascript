import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const databaseFilename = process.argv[2] || 'database.csv';
      const studentsData = await readDatabase(databaseFilename);
      const fields = Object.keys(studentsData).sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }));

      res.status(200).send(`This is the list of our students\n${fields.map((field) => {
        const count = studentsData[field].length;
        const names = studentsData[field].join(', ');
        return `Number of students in ${field}: ${count}. List: ${names}`;
      }).join('\n')}`);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    try {
      const databaseFilename = process.argv[2] || 'database.csv';
      const studentsData = await readDatabase(databaseFilename);
      const studentsInMajor = studentsData[major] || [];
      const names = studentsInMajor.join(', ');

      res.status(200).send(`List: ${names}`);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;
