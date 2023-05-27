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
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.value === "clear" || (counter == 0 && button.value == '=')){
            userInputNumber = '';
            userInputOperator = '';
            userInputNumberTwo = '';
            counter = 0;
            display.textContent = '0';
            return;
        }
        if (button.value == '+' || button.value == '-' || button.value == '/' || button.value == '*' || button.value == '%'){
                userInputOperator = button.value;
                console.log(userInputOperator);
                counter = 1;
                return;
        }
        if (counter === 1 && !(userInputNumber == '')){
            userInputNumberTwo += button.value;
            if (button.value == '='){
                if (userInputNumberTwo == '='){
                    userInputNumberTwo = '';
                    return;
                }
                userInputNumber = operate(Number(userInputNumber), userInputOperator, Number(userInputNumberTwo));
                display.textContent = userInputNumber;
                userInputNumberTwo = '';
                console.log(button.value);
                return;
            } else if (userInputOperator && !(userInputNumberTwo == '')){
                userInputNumber = operate(Number(userInputNumber), userInputOperator, Number(userInputNumberTwo));
                display.textContent = userInputNumber;
                userInputNumberTwo = '';
                console.log(userInputOperator);
                return;
            }
            display.textContent = userInputNumberTwo;
            console.log(userInputNumberTwo);
        } else {
            if (button.value == '='){
                counter = 0;
                return;
            }
            userInputNumber += button.value;
            display.textContent = userInputNumber;
            console.log(userInputNumber);
        } 
    });
});
console.log(operate(userInputNumber, userInputOperator, userInputNumberTwo));

