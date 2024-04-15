export default function updateStudentGradeByCity(listOfStudents, city, newGrades) {
  const newList = listOfStudents.filter((st) => st.location === city)
    .map((st) => {
      const matchingGrade = newGrades.find((gr) => gr.studentId === st.id);
      const stGrade = matchingGrade ? matchingGrade.grade : 'N/A';
      return { ...st, grade: stGrade };
    });
  return newList;
}
