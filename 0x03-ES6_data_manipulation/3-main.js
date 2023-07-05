import getStudentIdsSum from './3-get_ids_sum';
import getListStudents from './0-get_list_students';

const students = getListStudents();
const value = getStudentIdsSum(students);
console.log(value);
