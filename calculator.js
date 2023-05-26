let userInputNumber = 0;
let userInputOperator = '+';
let userInputNumberTwo = 0;

function add(numberOne, numberTwo){
    return numberOne + numberTwo;
}

function subtraction(number, numberTwo){
    return number - numberTwo;
}

function multiply(number, numberTwo){
    return number * numberTwo;
}

function divide(number, numberTwo){
    return number / numberTwo;
}

function operate(number, operator, numberTwo){
    if (operator === '+'){
        return add(number, numberTwo);
    } else if (operator === '-'){
        return subtraction(number, numberTwo);
    } else if (operator === '*'){
        return multiply(number, numberTwo);
    } else if (operator === '/'){
        return divide(number, numberTwo);
    }
}
const display = document.querySelector("div.display.flex");
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        display.textContent = button.value;
    });
});
console.log(operate(userInputNumber, userInputOperator, userInputNumberTwo));

