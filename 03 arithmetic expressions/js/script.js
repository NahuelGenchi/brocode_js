/*
    arithmetic expression is a combination of...
    operands (values, variables, etc)
    operators (+ - * / %)
    that can be evaluated to a value
    ex. y = x + 5;
*/

let students = 20;
console.log(`Students: ${students}`);

students -= 1; // students = students - 1;
console.log(`students -= 1 is ${students}`);
console.log(`Students: ${students}`);

students += 1; // students = students + 1;
console.log(`students += 1 is ${students}`);
console.log(`Students: ${students}`);

/*
    operator presedence
    1. parenthesis ()
    2. exponents
    3. multiplication & divition
    4. addition & subtraction
*/

let result = 1 + 2 * (3 + 4); // This equals to 15

console.log(`The result of 1 + 2 * (3 + 4) is ${result}`);