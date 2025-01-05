//variables
let firstNum = 0;
let secondNum = 0;
let operation;
let isSecondNumStart = false;
let isNumListenerOn = true;

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
  let result;

  switch (operator) {
    case "+":
      result = add(a, b);
      break;

    case "-":
      result = subtract(a, b);
      break;

    case "x":
      result = multiply(a, b);
      break;

    case ":":
      result = divide(a, b);
      break;
  }

  return result;
}


//displays number, if 0 it replaces it - if already contains a . don't add it
function displayNumber(num) {
  if(num === "." && display.textContent.includes(".")) {
    return;
  } 

  if(display.textContent == "0" || isSecondNumStart === true) {
    display.textContent = num;
    isSecondNumStart = false;

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
      isSecondNumStart = true;
  
      buttons.removeEventListener("click", getOperator);
      buttons.addEventListener("click", getResult);

      if(!isNumListenerOn) {
        buttons.addEventListener("click", getNum); 
      }
      
    }

  }



  function getResult(e) {
    if(e.target.id === "operate-button") {
      secondNum = Number(display.textContent);
      buttons.removeEventListener("click", getNum);
      isNumListenerOn = false;

      let result = operate(firstNum, secondNum, operation);
    
      display.textContent = result;

      firstNum = 0;
      secondNum = 0;


      buttons.removeEventListener("click", getResult);
      buttons.addEventListener("click", getOperator);
      
    }


  }
 
  buttons.addEventListener("click", getNum);
  buttons.addEventListener("click", getOperator)

  
  
}  


getUserInput();

