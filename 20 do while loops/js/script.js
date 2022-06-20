/*
    do while loop = do something then check the condition, repeat if condition is true
*/

let userName;

do {
    userName = prompt("Type your username:");
} while (userName == "");

let header = document.createElement("h1");
header.textContent = `Hello, ${userName}`;
document.body.appendChild(header);