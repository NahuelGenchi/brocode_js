// function = Define code once, and use it many times.
// To perform some code, call the function name.

let userName = prompt("Type your name:"),
age = prompt("Type your age:");

function happyBirthday() {
    console.log("Happy birthday to you!");
    console.log("Happy birthday to you!");
    console.log(`Happy birthday dear ${userName}`);
    console.log("Happy birthday to you!");
    console.log(`You are ${age} years old!`);
};

happyBirthday();