// method chaining = calling one method after another in one continous line of code

let userName = "nahuel";
console.log(`Username: ${userName}`);

let letter = userName.charAt(0).toUpperCase();
console.log(letter);

userName = userName.replace(userName.charAt(0), letter);
console.log(`Username: ${userName}`);