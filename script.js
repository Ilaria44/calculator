//variables

let firstNum = 0;
let secondNum = 0;
let operation;

let buttons = document.querySelector(".button-container");
let display = document.querySelector("#display-content");

//basic math functions

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

//show user selection in the display

// function displayNumber(numArray) {
//   let num = numArray.join("");
//   display.textContent = num; 
//   return num;
// }


function displayNumber(num) {
  if(display.textContent == 0) {
    display.textContent = num;

  } else {
    display.textContent += num;
  }
}

function getUserInput() {

  function getNum(e) {
    if(e.target.classList.contains("number")) {
      let number = e.target.textContent;
      displayNumber(number);
      
    }

  }

  function getOperator(e) {
    if(e.target.classList.contains("operator")) {
      firstNum = Number(display.textContent);
      operation = e.target.textContent;
      display.textContent = 0;

      buttons.removeEventListener("click", getOperator);

      
    }

  }
 
  buttons.addEventListener("click", getNum);
  buttons.addEventListener("click", getOperator)

  
  
}  


getUserInput();

