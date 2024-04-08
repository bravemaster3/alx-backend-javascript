export default function appendToEachArrayValue(array, appendString) {
  let idx = 0;
  const myArray = array;
  for (const value of array) {
    myArray[idx] = appendString + value;
    idx += 1;
  }

  return myArray;
}
