export default function guardrail(mathFunction) {
  let result;
  try {
    result = mathFunction();
  } catch (error) {
    result = `Error: ${error}`;
  }

  const queue = [result, 'Guardrail was processed'];
  return queue;
}
