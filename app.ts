function add(a: number, b: number) {
  return a + b;
}

function printResult(result): undefined {
  console.log(result);
  return undefined;
}

const result = add(5, 3);
let isDone = false;

printResult(result);
