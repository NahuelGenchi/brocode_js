// array = think of it as a variable
//         that can store multiple values

let fruits = ["apple", "orange", "banana"];

console.log(fruits);

console.log(`fruits[0] = ${fruits[0]}`);
console.log(`fruits[1] = ${fruits[1]}`);
console.log(`fruits[2] = ${fruits[2]}`);

fruits[0] = "pear";

console.log(`fruits[0] = ${fruits[0]}`);

console.log(fruits);

function editFruits(method, fruit) {
    if (method == "push") {
        fruits.push(fruit); // add an element
    } else if (method == "pop") {
        fruits.pop(); // removes last element
    } else if (method == "unshift") {
        fruits.unshift(fruit); // add element to beginning
    } else if (method == "shift") {
        fruits.shift(); // removes first element
    }
    console.log(fruits);
};

editFruits("push", "pear");
editFruits("pop");
editFruits("unshift", "strawberry");
editFruits("shift");

let fruitsLength = fruits.length;
console.log(`fruits array length: ${fruitsLength}`);

let indexOfBanana = fruits.indexOf("banana");
console.log(`index of banana: ${indexOfBanana}`);