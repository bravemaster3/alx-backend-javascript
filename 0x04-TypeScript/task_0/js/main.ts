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

studentsList.forEach((student) => {
  const row = document.createElement('tr');
  const firstNameCell = document.createElement('td');
  const locationCell = document.createElement('td');

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);

  table.appendChild(row);
})

document.body.appendChild (table);
