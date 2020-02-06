'use strict';

const input = document.querySelector('#input'), // input/output button
  numbers = document.querySelectorAll('.numbers div'), // number buttons
  operators = document.querySelectorAll('.operators div'), // operator buttons
  result = document.querySelector('#result'), // equal button
  clear = document.querySelector('#clear'); // clear button


let numberInput = []
let operatorsInput = []
let operatorsNDInputList= []

document.querySelectorAll('.numbers div').forEach(buttonPress => {
  buttonPress.addEventListener('click', (event) => {
    numberInput.push(parseInt(event.target.textContent));
    console.log(numberInput)
  });
});

document.querySelectorAll('.operators div').forEach(buttonPress => {
  buttonPress.addEventListener('click', (event) => {
    operatorsInput.push(event.target.textContent);
    console.log(operatorsInput)
  });
});

let operatorsNDInput = operatorsInput.filter(function(item, index){
  return operatorsInput.indexOf(item) >= index;
});
console.log(operatorsNDInput);

// if (operatorsInput.indexOf(value) === false) operatorsInput.push(value);
let resultDisplayed = false; // flag to keep an eye on what output is displayed
