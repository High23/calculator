function add(number, numberTwo){
    number = Number(number);
    numberTwo = Number(numberTwo);
    if (!Number.isInteger(number) || !Number.isInteger(numberTwo)){
        let total = number + numberTwo;
        return total.toFixed(2);
    }
    return number + numberTwo;
}

function subtraction(number, numberTwo){
    number = Number(number);
    numberTwo = Number(numberTwo);
    if (!Number.isInteger(number) || !Number.isInteger(numberTwo)){
        let total = number - numberTwo;
        return total.toFixed(2);
    }
    return number - numberTwo;
}

function multiply(number, numberTwo){
    number = Number(number);
    numberTwo = Number(numberTwo);
    if (!Number.isInteger(number) || !Number.isInteger(numberTwo)){
        let total = number * numberTwo;
        return total.toFixed(2);
    }
    return number * numberTwo;
}

function divide(number, numberTwo){
    number = Number(number);
    numberTwo = Number(numberTwo);
    if (!Number.isInteger(number) || !Number.isInteger(numberTwo)){
        let total = number / numberTwo;
        return total.toFixed(2);
    }
    return number / numberTwo;
}
function modularDivision(number, numberTwo){
    number = Number(number);
    numberTwo = Number(numberTwo);
    if (!Number.isInteger(number) || !Number.isInteger(numberTwo)){
        let total = number % numberTwo;
        return total.toFixed(2);
    }
    return number % numberTwo;
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
    } else {
        return modularDivision(number, numberTwo);
    }
}

function clear(){
    userInputNumber = '';
    userInputOperator = '';
    userInputNumberTwo = '';
    counter = 0;
    display.textContent = 0;
}

let userInputNumber = '';
let userInputOperator = '';
let userInputNumberTwo = '';
let counter = 0;

const display = document.querySelector("div.display.flex");
const numberButtons = document.querySelectorAll("div.numbers > button");
const operatorButtons = document.querySelectorAll("button.opsSelector");
const extraOpsButtons = document.querySelectorAll("button.exOps");
const decimal = document.querySelector("#decimal");
numberButtons.forEach((button) => {
    button.addEventListener('click', () => {   
        if (button.value == '.') decimal.disabled = true;
        if (counter === 1 && !(userInputNumber == '')){
            if (button.value == '='){
                if (userInputNumberTwo == '.') userInputNumberTwo = 0;
                if (userInputOperator == '/' && userInputNumberTwo == '0'){
                    clear();
                    return display.textContent = 'LOL';
                }
                userInputNumber = operate(userInputNumber, userInputOperator,userInputNumberTwo);
                display.textContent = userInputNumber;
                if (userInputNumber == 0) userInputNumber = '';
                userInputNumberTwo = '';
                decimal.disabled = false;
                return;
            }
            userInputNumberTwo += button.value;
            display.textContent = userInputNumberTwo;
        } else {
            if (button.value == '=') return counter = 0;
            userInputNumber += button.value;
            display.textContent = userInputNumber;
        } 
    });
});
operatorButtons.forEach((button) => {
    button.addEventListener('click', () =>{
        if (userInputOperator && !(userInputNumberTwo == '')){
            if (userInputOperator == '/' && userInputNumberTwo == '0'){
                clear();
                return display.textContent = 'LOL';
            }
            userInputNumber = operate(userInputNumber, userInputOperator, userInputNumberTwo);
            display.textContent = userInputNumber;
            userInputNumberTwo = '';
        }
        decimal.disabled = false;
        userInputOperator = button.value;
        counter = 1;
    });
});
extraOpsButtons.forEach((button) => {
    button.addEventListener('click', () =>{ 
        if (button.value === "clear"){
            return clear();
        } else if (button.value === "back" && !(userInputNumberTwo === '') && counter === 1){
            userInputNumberTwo = userInputNumberTwo.split("");
            if (userInputNumberTwo.length <= 1){
                counter = 1;
                userInputNumberTwo = "";
                return display.textContent = 0;
            } else if (Array.isArray(userInputNumberTwo)){
                counter = 1;
                userInputNumberTwo.pop()
                userInputNumberTwo = userInputNumberTwo.join("");
                return display.textContent = userInputNumberTwo;
            }
        }
        userInputNumber = userInputNumber.split("");
        if (userInputNumber.length <= 1){
            userInputNumber = "";
            counter = 0;
            return display.textContent = 0;
        } else if (Array.isArray(userInputNumber)){
            counter = 0;
            userInputNumber.pop()
            userInputNumber = userInputNumber.join("");
            return display.textContent = userInputNumber;
        }
    });

});