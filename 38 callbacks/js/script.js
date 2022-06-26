/*
    callback = a function passed as an argument
               to another function.
    
    Ensures that a function is not going
    to run before a task is completed.
    Helps us develop asynchronous code.
    (When one function has to wait for another function)
    that helps us avoid errors and potential problems
    Ex. Wait for a file to load
*/

const MYLABEL = document.querySelector("#myLabel");

let firstNum = Math.floor(Math.random() * 10 + 1);
let secondNum = Math.floor(Math.random() * 10 + 1);
console.log(`firstNum = ${firstNum}`);
console.log(`secondNum = ${secondNum}`);
/*
let total = sum(firstNum, secondNum);
displayConsole(`Total = ${total}`);
displayDOM(`Total: ${total}`);

function sum(x, y) {
    let result = x + y;
    return result;
};
*/
sum(firstNum, secondNum, displayDOM);
sum(firstNum, secondNum, displayConsole);

function sum(x, y, callBack) {
    let result = x + y;
    callBack(result);
};
function displayConsole(output) {
    console.log(`Total: ${output}`);
};
function displayDOM(output) {
    MYLABEL.textContent = `Total: ${output}`;
};