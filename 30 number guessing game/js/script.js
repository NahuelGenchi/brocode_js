const GUESSFIELD = document.querySelector("#guessField"),
SUBMITBUTTON = document.querySelector("#submitButton"),
RESULTTEXT = document.querySelector("#resultText"),
GUESSESTEXT = document.querySelector("#guessesText");

GUESSFIELD.focus();

const ANSWER = Math.floor(Math.random() * 10 + 1);
console.log(ANSWER);

let guesses = 0;

SUBMITBUTTON.addEventListener("click", findNumber);

function findNumber() {
    let guess = Number(GUESSFIELD.value);
    guesses++;
    console.log(`Guesses: ${guesses}`);
    if (guess == "") {
        RESULTTEXT.textContent = `Type a valid number!`;
        guesses--;
    } else if (guess == ANSWER) {
        RESULTTEXT.textContent = `${ANSWER} is the number. It took you ${guesses} guesses.`;
        GUESSFIELD.disabled = true;
        SUBMITBUTTON.disabled = true;
    } else if (guess > ANSWER) {
        RESULTTEXT.textContent = "Too large!";
    } else {
        RESULTTEXT.textContent = "Too small!";
    };
    GUESSESTEXT.textContent = `Guesses: ${guesses}`;
};