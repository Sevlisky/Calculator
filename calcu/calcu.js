let output1 = document.querySelector(".current-out");
let output2 = document.querySelector(".prev-out");
let numbers = document.querySelectorAll(".number");

numbers.forEach((btn) => {
  btn.addEventListener("click", numberButton);
});

function numberButton() {
  let buttonText = this.textContent;
  output1.textContent += buttonText;
}

function add() {
  let operationText = " + ";
  output1.textContent += operationText;
  output2.textContent = output1.textContent;
  output1.textContent = "";
}
function sub() {
  let operationText = " - ";
  output1.textContent += operationText;
  output2.textContent = output1.textContent;
  output1.textContent = "";
}
function multiply() {
  let operationText = " * ";
  output1.textContent += operationText;
  output2.textContent = output1.textContent;
  output1.textContent = "";
}
function divide() {
  let operationText = " / ";
  output1.textContent += operationText;
  output2.textContent = output1.textContent;
  output1.textContent = "";
}

function equal() {
  output2.textContent += output1.textContent;
  output1.textContent = eval(output2.textContent);
}

function del() {
  output1.textContent = output1.textContent.slice(0, -1);
}

function clearing() {
  output1.textContent = "";
  output2.textContent = "";
}
