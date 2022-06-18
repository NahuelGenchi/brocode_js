// useful string properties & methods

let userName = "  Nahuel  ";

userName = userName.trim(); // Removes space
// userName = userName.toUpperCase(); // Uppercase the string
// userName = userName.toLowerCase(); // Lowercase the string
let userNameLength = userName.length; // Length of a string
let firstLetter = userName.charAt(0); // First letter of a string
let findE = userName.indexOf("e"); // Finding the letter "e" in a string

console.log(`Username: ${userName}`);
console.log(`Username length: ${userNameLength}`);
console.log(`Username first letter: ${firstLetter}`);
console.log(`Does the letter e exist in the username? ${Boolean(findE)}`);

let phoneNumber = "123-4567-890";
console.log(`Phone number: ${phoneNumber}`);

phoneNumber = phoneNumber.replaceAll("-", "/");
console.log(`Phone number: ${phoneNumber}`);