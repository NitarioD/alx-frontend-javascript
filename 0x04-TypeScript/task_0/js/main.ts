// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const studentOne: Student = {
  firstName: 'Samuel',
  lastName: 'Jackson',
  age: 20,
  location: 'Nigeria',
};

const studentTwo: Student = {
  firstName: 'Emeka',
  lastName: 'Okafor',
  age: 22,
  location: 'Ghana',
};

const studentsList: Student[] = [studentOne, studentTwo];

const table = document.createElement('table');
const headerRow = document.createElement('tr');

const nameHeader = document.createElement('th');
nameHeader.textContent = 'Name';

const locationHeader = document.createElement('th');
locationHeader.textContent = 'Location';

headerRow.appendChild(nameHeader);
headerRow.appendChild(locationHeader);
table.appendChild(headerRow);

studentsList.forEach((student) => {
  const row = document.createElement('tr');

  const nameCell = document.createElement('td');
  nameCell.textContent = `${student.firstName} ${student.lastName}`;

  const locationCell = document.createElement('td');
  locationCell.textContent = student.location;

  row.appendChild(nameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
});

document.body.appendChild(table);
