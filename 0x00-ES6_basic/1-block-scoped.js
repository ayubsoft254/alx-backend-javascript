export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    const task = true; // eslint-disableline no-unused-vars
    const task2 = false; // eslint-disableline no-unused-vars
  }

  return [task, task2];
}
