function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}


let firstNum = 0;
let secondNum = 0;
let operation;

function operate(a, b, operator) {
  let result = 0;

  switch (operator) {
    case "+":
      result = add(a, b);
      break;

    case "-":
      result = subtract(a, b);
      break;

    case "x":
      result = multiply(a, b);

    case ":":
      result = divide(a, b);
  }

  return result;
}