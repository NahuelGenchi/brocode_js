// How to accept user input

// EASY WAY with a window prompt

/*
let username = window.prompt("What's your name?");
console.log(username);
*/

// DIFFICULT WAY HTML textbox

const myButton = document.querySelector("#myButton");

let username = document.querySelector("#myText");

myButton.addEventListener("click", function() {
    console.log(username.value);
    document.querySelector("#myLabel").textContent = `Hello ${username.value}`;
    username.value = "";
});