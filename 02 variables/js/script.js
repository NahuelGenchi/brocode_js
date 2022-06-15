// A variable is a container to store data
// A variable behaves as if it was the value that it contains

// Two steps:
// 1. Declaration (var, let, const)
// 2. Assignment (= assignment operator)

let firstName = "Nahuel"; // String
let age = 21; // Number
let student = true; // Boolean

let firstNameMessage = `Hello ${firstName}`;
let ageMessage = `You're ${age}`;
let enrolledMessage = `Enrolled: ${student}`;

console.log(firstNameMessage);
console.log(ageMessage);
console.log(enrolledMessage);

const p1 = document.querySelector("#p1");
const p2 = document.querySelector("#p2");
const p3 = document.querySelector("#p3");

p1.innerHTML = firstNameMessage;
p2.textContent = ageMessage;
p3.textContent = enrolledMessage;