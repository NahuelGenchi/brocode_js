/*
    Template literals = delimited with (`) instead of double or single quotes.
    It allows embedded variables and expressions.
*/

let userName = "Nahuel",
items = 3,
total = 75;

const MYLABEL = document.querySelector("#myLabel"),
PAYMENTMETHOD = document.querySelector("#paymentMethod");
/*
console.log("Hello", userName);
console.log("You have", items, "items in your cart");
console.log("The total is $", total);

console.log(`Hello, ${userName}`);
console.log(`You have ${items} items in your cart`);
console.log(`The total is $${total}`);
*/
let text = `
Hello, ${userName}
You have ${items} items in your cart
The total is $${total}`,
debitText = `You should pay with debit`,
cashText = `You should pay with cash`;

MYLABEL.textContent = text;

// total >= 50 ? console.log("You should pay with debit") : console.log("You should pay with cash");

total >= 50 ? PAYMENTMETHOD.textContent = debitText : PAYMENTMETHOD.textContent = cashText;