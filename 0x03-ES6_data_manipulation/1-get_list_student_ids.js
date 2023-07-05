export default function getListStudentIds(arrayOfStudents) {
  if (Array.isArray(arrayOfStudents)) {
    return arrayOfStudents.map((student) => student.id);
  }
  return [];
}
