interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Amy',
  lastName: 'Doe',
  age: 23,
  location: 'Lagos',
};

const student2: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
  location: 'Nairobi',
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');

// Create and append style element
const style = document.createElement('style');
style.textContent = `
  table {
    border-collapse: collapse;
    width: 50%;
  }

  th, td {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }

  th {
    background-color: #f2f2f2;
  }
`;
document.head.appendChild(style);

// Add column headers to the table
const thead = document.createElement('thead');
const headerRow = document.createElement('tr');
const headers = ['First Name', 'Location'];

headers.forEach(headerText => {
  const th = document.createElement('th');
  th.textContent = headerText;
  headerRow.appendChild(th);
});

thead.appendChild(headerRow);
table.appendChild(thead);

studentsList.forEach((student) => {
  const row = document.createElement('tr');
  const firstNameCell = document.createElement('td');
  const locationCell = document.createElement('td');

  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);

  table.appendChild(row);
})

document.body.appendChild (table);
