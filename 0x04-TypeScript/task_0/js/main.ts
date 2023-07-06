interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const students: Student[] = [
  {
    firstName: 'Smart',
    lastName: 'Empire',
    age: 33,
    location: 'New York',
  },
  
  {
    firstName: 'James',
    lastName: 'Bond',
    age: 65,
    location: 'Canada',
  }
];


const studentsList: Array<Student> = [students[0], students[1]];

const bodyHtml = document.getElementsByTagName('body')[0];
const tableHtml = document.createElement('table');
const borderDefinition = 'solid #000000 1px';
tableHtml.style.borderCollapse = 'collapse';
tableHtml.style.border = borderDefinition;

studentsList
  .map((student) => {
    const row = document.createElement('tr');
    Object.entries(student).forEach(([key, value]) => {
      const data = document.createElement('td');
      data.innerHTML = value;
      data.style.border = borderDefinition;
      data.style.padding = '7px';
      row.appendChild(data);
    });
    return row;
  })
  .forEach((row) => {
    tableHtml.appendChild(row);
  });
bodyHtml.appendChild(tableHtml);