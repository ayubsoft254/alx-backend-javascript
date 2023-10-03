/**
 * Retrieves ids from a list of students.
 * @param {{
 */
export default function getListStudentIds(students) {
  if (students instanceof Array) {
    return students.map((student) => student.id);
  }
  return [];
}
