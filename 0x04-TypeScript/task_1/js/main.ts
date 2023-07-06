// Task 1
console.log('Task 1 Solution...');
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

const teacher1: Teacher = {
  firstName: 'Smart',
  lastName: 'Empire',
  fullTimeEmployee: true,
  location: 'New York',
  contract: 'full-time',
};

console.log(teacher1);

// Task 2
console.log('Task 2 Solution...');
interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: 'James',
  lastName: 'Bond',
  fullTimeEmployee: true,
  location: 'Canada',
  contract: 'full-time',
  numberOfReports: 10,
};

console.log(director1);

// Task 3
console.log('Task 3 Solution...');

function printTeacher(firstName: string, lastName: string): string {
  return `${firstName[0]}. ${lastName}`;
}

console.log(printTeacher(teacher1.firstName, teacher1.lastName));

// Task 4
console.log('Task 4 Solution...');

interface StudentClassConstructor {
  new(firstName: string, lastName: string): StudentClass;
}

interface StudentClass {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentClass {
  constructor(private firstName: string, private lastName: string) {
    ;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

const student1 = new StudentClass('Smart', 'Empire');
console.log(student1.workOnHomework(), student1.displayName());
