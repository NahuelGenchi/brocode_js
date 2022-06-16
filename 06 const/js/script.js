// const = a variable that can't be changed

const PI = 3.14159;
let radius;
let circumference;

radius = window.prompt("Enter the radius of a circle");
radius = Number(radius);

// pi = 420.2; This will show an error

circumference = 2 * radius * PI;
console.log(`The circumference is: ${circumference}`);