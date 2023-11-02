const num1Input = document.getElementById('num1') as HTMLInputElement;
const num2Input = <HTMLInputElement>document.getElementById('num2');
const buttonElement = document.querySelector('button') as HTMLButtonElement;

function add(a: number, b: number) {
  return a + b;
}

function printResult(result, printMode: 'console' | 'alert') {
  if (printMode === 'console') {
    console.log(result);
  } else if (printMode === 'alert') {
    alert(result);
  }
}

// const result = add(5, 3);
// let isDone = false;

// printResult(result);

type CalculationResults = { res: number; print: () => void }[];

const results: CalculationResults = [];
const names = ['Max'];

buttonElement.addEventListener('click', () => {
  const num1 = +num1Input.value;
  const num2 = +num2Input.value;
  const result = add(num1, num2);
  const resultContainer = {
    res: result,
    print() {
      console.log(this.res);
    }
  };
  results.push(resultContainer);
  // results.push(5);
  // results[0].print();
  printResult(result, 'console');
  printResult(result, 'alert');
});
