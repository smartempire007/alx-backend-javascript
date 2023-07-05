/* eslint-disable import/extensions */
import getListStudentsByLocation from './2-get_students_by_loc';
import getListStudents from './0-get_list_students';

const students = getListStudents();
const studentsByLocation = getListStudentsByLocation(students, 'San Francisco');
console.log(studentsByLocation);
