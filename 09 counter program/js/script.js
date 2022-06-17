let counter = 0;

let counterText = document.querySelector("#counter");

let decreaseBtn = document.querySelector("#decrease");
let resetBtn = document.querySelector("#reset");
let increaseBtn = document.querySelector("#increase");

decreaseBtn.addEventListener("click", decrease);
resetBtn.addEventListener("click", reset);
increaseBtn.addEventListener("click", increase);

function decrease() {
    counter--;
    counterText.textContent = counter;
};
function reset() {
    counter = 0;
    counterText.textContent = counter;
};
function increase() {
    counter++;
    counterText.textContent = counter;
};