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
let userInputNumber = '';
let userInputOperator = '';
let userInputNumberTwo = '';
let counter = 0;

const display = document.querySelector("div.display.flex");
const numberButtons = document.querySelectorAll("div.numbers > button");
const operatorButtons = document.querySelectorAll("div.ops > button");
const extraOpsButtons = document.querySelectorAll("div.extra-ops > button");
numberButtons.forEach((button) => {
    button.addEventListener('click', () => {   
        if (counter === 1 && !(userInputNumber == '')){
            if (button.value == '='){
                userInputNumber = operate(Number(userInputNumber), userInputOperator, Number(userInputNumberTwo));
                display.textContent = userInputNumber;
                userInputNumberTwo = '';
                return;
            }
            userInputNumberTwo += button.value;
            display.textContent = userInputNumberTwo;
        } else {
            if (button.value == '='){
                counter = 0;
                return;
            }
            userInputNumber += button.value;
            display.textContent = userInputNumber;
        } 
    });
});
operatorButtons.forEach((button) => {
    button.addEventListener('click', () =>{
        if (userInputOperator && !(userInputNumberTwo == '')){
            userInputNumber = operate(Number(userInputNumber), userInputOperator, Number(userInputNumberTwo));
            display.textContent = userInputNumber;
            userInputNumberTwo = '';
        }
        userInputOperator = button.value;
        counter = 1;
    });
});
extraOpsButtons.forEach((button) => {
    button.addEventListener('click', () =>{
        if (button.value === "clear"){
            userInputNumber = '';
            userInputOperator = '';
            userInputNumberTwo = '';
            counter = 0;
            display.textContent = '0';
            return;
        }
        
    });
});