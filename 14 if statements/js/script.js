/*
    if statement = a basic form of decision making
                   if a condition is true, then do something
                   if not, then don't do it!
*/

/*
let age = 21;

if (age >= 18) {
    console.log("You're an adult");
} else if (age < 0) {
    console.log("YOU HAVEN'T BEEN BORN YET!");
} else if (age >= 65) {
    console.log("You're a senior citizen!");
} else {
    console.log("You're not an adult");
};
*/

const ageInput = document.querySelector("#ageInput"),
ageText = document.querySelector("#ageText");

let age;

ageInput.addEventListener("input", ageMessage);

function ageMessage() {
    age = ageInput.value;
    if (age.length == 0) {
        ageText.textContent = `That's not a valid age`;
    } else if (age < 0) {
        ageText.textContent = `You haven't been born yet!`;
    } else if (age < 18) {
        ageText.textContent = `You're not an adult`;
    } else if (age >= 65) {
        ageText.textContent = `You're a senior citizen!`;
    } else if (age >= 18) {
        ageText.textContent = `You're an adult`;
    };
};