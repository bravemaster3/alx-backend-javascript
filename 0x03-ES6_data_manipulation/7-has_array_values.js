export default function hasValuesFromArray(mySet, myArray) {
  return (
    myArray.reduce((acc, curr) => acc && mySet.has(curr), true)
  );
}
