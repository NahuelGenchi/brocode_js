/*
    slice() extracts a section of a string
    and returns it as a new string, 
    without modifying the original string
*/

let fullName = "Nahuel Genchi",
firstName,
lastName;

// firstName = fullName.slice(0, 6);
// lastName = fullName.slice(7);
firstName = fullName.slice(0, fullName.indexOf(" "));
lastName = fullName.slice(fullName.indexOf(" ") + 1);

console.log(`Full name: ${fullName}`);
console.log(`First name: ${firstName}`);
console.log(`Last name: ${lastName}`);