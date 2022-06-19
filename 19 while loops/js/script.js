/*
    while loop = repeat some code
                 while some condition is true
                 potentially infinite
*/

let userName = "";

while (userName == "" || userName == null) {
    userName = prompt("Type your username:");
};

console.log(`Hello, ${userName}`);