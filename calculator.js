let userInputNumber = Number(prompt('Enter a number '));
let userInputOperator = prompt('Operator "+, -, *, /" ')
let userInputNumberTwo = Number(prompt('Enter a number '));

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
console.log(operate(userInputNumber, userInputOperator, userInputNumberTwo));

