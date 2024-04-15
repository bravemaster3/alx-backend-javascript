export default function getStudentsByLocation(listOfStudents, city) {
  return (listOfStudents.filter((st) => st.location === city));
}
