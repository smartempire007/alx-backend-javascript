/* eslint-disable import/extensions */
import updateStudentGradeByCity from './4-update_grade_by_city.js';
import getListStudents from './0-get_list_students.js';

const students = getListStudents();
console.log(updateStudentGradeByCity(students, 'San Francisco', [{ studentId: 1, grade: 90 }, { studentId: 2, grade: 80 }]));
console.log(updateStudentGradeByCity(students, 'San Francisco', [{ studentId: 5, grade: 97 }]));
