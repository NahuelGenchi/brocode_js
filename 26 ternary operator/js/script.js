/*
    ternary operator = Shortcut for an 'if/else statement'

    Takes 3 operands

    1. a condition with ?
    2. expression if True :
    3. expression if False

    condition ? exprIfTrue : exprIfFalse
*/

let age = Number(prompt("Type your age:"));
console.log(`Your age is ${age}.`);

let adult = checkAge(age);

function checkAge(num) {
    /*
    if (num >= 18) {
        return true;
    } else {
        return false;
    };
    */
   return age >= 18 ? true : false;
};

/*
if (adult) {
    console.log(`Your age is ${age}, you're an adult.`);
} else {
    console.log(`Your age is ${age}, you're not an adult.`);
};
*/
adult ? console.log(`You're an adult.`) : console.log(`You're not an adult.`);