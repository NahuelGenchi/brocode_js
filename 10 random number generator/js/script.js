/*
let random = Math.random(); // Random number
let randomSix = Math.random() * 6; // Random number from 0 to 5
let randomSixFloor = Math.floor(Math.random() * 6); // Random number from 0 to 5 rounded down

console.log(`Random number: ${random}`);
console.log(`Random number from 0 to 5: ${randomSix}`);
console.log(`Random number from 0 to 5 rounded down: ${randomSixFloor}`);

let x = Math.floor(Math.random() * 6 + 1); // Random number from 0 to 6 rounded down
let y = Math.floor(Math.random() * 6 + 1); // Random number from 0 to 6 rounded down
let z = Math.floor(Math.random() * 6 + 1); // Random number from 0 to 6 rounded down

console.log(
    `x = ${x}
y = ${y}
z = ${z}`
);
*/

let a, b, c;

let aLabel = document.querySelector("#aLabel"),
bLabel = document.querySelector("#bLabel"),
cLabel = document.querySelector("#cLabel");

let rollButton = document.querySelector("#rollButton");

rollButton.addEventListener("click", roll);

function roll() {
    a = Math.floor(Math.random() * 6 + 1);
    b = Math.floor(Math.random() * 6 + 1);
    c = Math.floor(Math.random() * 6 + 1);

    aLabel.textContent = `A: ${a}`;
    bLabel.textContent = `B: ${b}`;
    cLabel.textContent = `C: ${c}`;
};