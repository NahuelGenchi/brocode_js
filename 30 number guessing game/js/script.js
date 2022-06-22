const GUESSFIELD = document.querySelector("#guessField"),
SUBMITBUTTON = document.querySelector("#submitButton");

const ANSWER = Math.floor(Math.random() * 10 + 1);
console.log(ANSWER);

let guesses = 0;

SUBMITBUTTON.addEventListener("click", submit);

function submit() {
    let guess = Number(GUESSFIELD.value);
    guesses++;
    if (guess == ANSWER) {
        alert(`${ANSWER} is the number. It took you ${guesses} guesses.`);
        console.log(`${ANSWER} is the number. It took you ${guesses} guesses.`);
    } else if (guess > ANSWER) {
        alert("Too large!");
        console.log("Too large!");
    } else {
        alert("Too small!");
        console.log("Too small");
    };
};