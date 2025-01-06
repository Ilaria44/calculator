//variables
let firstNum = 0;
let secondNum = 0;
let operation;
let result;
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


//displays numbers - allows only for a single "."
function displayNumber(num) {
  if(num === "." && display.textContent.includes(".")) {
    return;
  } 

  if(display.textContent == "0" || isSecondNumStart === true) {
    display.textContent = "";
    setTimeout(() => display.textContent = num, 80);
    isSecondNumStart = false;

  } else {
    display.textContent += num;
  }
}



function getUserInput() {

  //listens for num selection
  function getNum(e) {
    if(e.target.classList.contains("number")) {
      e.target.classList.add("selected");
      setTimeout(() => e.target.classList.remove("selected"), 100);
      let number = e.target.textContent;
      displayNumber(number);
    }

  }

  
  //listens for operator selection
  function getOperator(e) {
    if(e.target.classList.contains("operator")) {
      firstNum = Number(display.textContent);
      operation = e.target.textContent;
      isSecondNumStart = true;

      e.target.classList.add("selected");
  
      buttons.removeEventListener("click", getOperator);
      buttons.addEventListener("click", getResult);

      if(!isNumListenerOn) {
        buttons.addEventListener("click", getNum); 
      }
      
    }

  }


  //listens for "=" selection 
  function getResult(e) {
    if(e.target.id === "operate-button") {
      secondNum = Number(display.textContent);
      buttons.removeEventListener("click", getNum);
      isNumListenerOn = false;

      e.target.classList.add("selected");
      setTimeout(() => e.target.classList.remove("selected"), 100);


      document.querySelectorAll(".operator").forEach((item) => item.classList.remove("selected"));

      result = operate(firstNum, secondNum, operation);
    
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

