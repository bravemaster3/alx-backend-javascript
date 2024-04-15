export default function updateStudentGradeByCity(listOfStudents, city, newGrades) {
  const newList = listOfStudents.filter((st) => st.location === city)
    .map((st) => {
      const matchingGrade = newGrades.find((gr) => gr.studentId === st.id);
      const updatedSt = st;
      updatedSt.grade = matchingGrade !== undefined ? matchingGrade.grade : 'N/A';
      return (updatedSt);
    });
  return newList;
}
