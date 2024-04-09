export default function divideFunction(numerator, denominator) {
  let result;
  try {
    if (denominator === 0) {
      throw new Error('cannot divide by 0');
    }
    result = numerator / denominator;
  } catch (error) { console.error(error); }
  return result;
}
