export default function cleanSet(set, startString) {
  const myArray = Array.from(set);
  if (startString.length === 0) {
    return '';
  }
  const finalString = myArray
    .filter((x) => x.startsWith(startString))
    .map((x) => x.slice(startString.length))
    .filter((x) => x.length > 0)
    .join('-');
  return (finalString);
}
