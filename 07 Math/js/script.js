let x = 2.6;
console.log(`x = ${x}`);

x = Math.round(x);
console.log("Math.round(x);");
console.log(`x = ${x}`);

x = 2.6;

x = Math.floor(x); // Rounds down
console.log("Math.floor(x);");
console.log(`x = ${x}`);

x = 2.6;

x = Math.ceil(x); // Rounds up
console.log("Math.ceil(x);");
console.log(`x = ${x}`);

x = 2.6;

x = Math.pow(x, 2);
console.log("Math.pow(x, 2);");
console.log(`x = ${x}`);

console.log("-----------------------------------")

let a = -3.14;
let b = 5;
let c = 9;
let maximum;
let minimum;

maximum = Math.max(a, b, c);
minimum = Math.min(a, b, c);

console.log(`a = ${a}`);
console.log(`b = ${b}`);
console.log(`c = ${c}`);
console.log(`Maximum between a, b & c: ${maximum}`);
console.log(`Minimum between a, b & c: ${minimum}`);

let PI = Math.PI;

console.log(`pi = ${PI}`);