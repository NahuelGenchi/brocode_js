// Type Conversion = change the datatype of a value to another (strings, numbers, booleans)

/*
let age = window.prompt("How old are you?"); // This value is a string
// let age = Number(window.prompt("How old are you?")); This value is a number

console.log(`Your age is: ${age}`);
console.log(`typeof age: ${typeof age}`);
age = Number(age); // This converts age to number type
console.log(`Your age is ${age}`);
console.log(`typeof age: ${typeof age}`);
age += 1;

console.log(`Happy Birthday! You are ${age} years old.`)
*/

let x, y, z;

x = Number("3.14");
y = String(3.14);
z = Boolean("");

function xyz(num) {
    console.log(`value = ${num}`);
    console.log(`typeof: ${typeof num}`);
};

xyz(x);
xyz(y);
xyz(z);