/*
let a = prompt("Enter value of a:");
a = Number(a);
let b = prompt("Enter value of b:");
b = Number(b);
let c = Math.sqrt(a ** 2 + b ** 2);

console.log(`a = ${a}`);
console.log(`b = ${b}`);
console.log(`hypotenuse is ${c}`);
*/

let a, b, c;

let aTextBox = document.querySelector("#aTextBox");
let bTextBox = document.querySelector("#bTextBox");

let cLabel = document.querySelector("#cLabel");

let submitButton = document.querySelector("#submitButton");

submitButton.addEventListener("click", function() {
    let a = aTextBox.value;
    a = Number(a);

    let b = bTextBox.value;
    b = Number(b);

    let c = Math.sqrt(a ** 2 + b ** 2);

    cLabel.textContent = `Side C: ${c}`;

    aTextBox.value = "";
    bTextBox.value = "";
});