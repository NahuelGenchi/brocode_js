/*
    rest parameters = represents an indefinite number
                      of parameters
                      (packs arguments into an array)
*/

let a = 1;
let b = 2;
let c = 3;
let d = 4;
let e = 5;
/*
function sum(num1, num2) {
    return num1 + num2;
};
function sum(num1, num2, num3) {
    return num1 + num2 + num3;
};
function sum(num1, num2, num3, num4) {
    return num1 + num2 + num3 + num4;
};
*/
console.log(sum(a, b, c, d, e));

function sum(...numbers) {
    let total = 0;
    for (let number of numbers) {
        total += number;
    };
    return total;
};