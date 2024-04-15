export default function getStudentIdsSum(listOfStudents) {
  return (listOfStudents.reduce(
    (acc, curr) => acc + curr.id,
    0,
  ));
}
