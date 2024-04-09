export default function guardrail(mathFunction) {
  let result;
  const queue = [];
  try {
    queue.push(mathFunction());
  } catch (error) {
    queue.push(`${error}`);
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}
