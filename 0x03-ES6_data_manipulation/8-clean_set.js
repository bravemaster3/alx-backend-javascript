export default function cleanSet(set, startString) {
  const myArray = Array.from(set);
  if (!startString || startString.length === 0) {
    return '';
  }
  const finalString = myArray
    .filter((x) => x && x.startsWith(startString))
    .map((x) => x.slice(startString.length))
    .filter((x) => x.length)
    .join('-');
  return (finalString);
}
