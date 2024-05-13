let expression = document.querySelector("#expression");
let output = document.querySelector("#output");
expression.textContent = '';
let currentExpression = '';
let result = 0;
let operator = '';
let number = 0;
let lastInput = 'Number';
let currentOperation = '';
let currentNumber = '';
function setOperator(op) {
    if(expression.textContent == '') return;
    currentOperation = op;
    currentNumber = '';
    if(lastInput == 'op') {
        expression.textContent = expression.textContent.slice(0, -1);  }
    lastInput = 'op';
    switch(op) {
        case 'C': {  expression.textContent = '';
            output.textContent = '';
            break; } 
        case 'pm': {
            break;}
        case '=': {
            result = eval(expression.textContent);
            output.textContent = result;
            lastInput = '';
            break;      }
        default: {
            expression.textContent += op;
            break;}
    }
}
function setNumber(num) {
    lastInput = "Number";
    if(!(num == '0' && currentNumber == '0')) {
        currentNumber += num;
        expression.textContent += num;    } }

