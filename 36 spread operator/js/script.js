/*
    spread operator = allows an iterable such as an
                      array or string to be expanded
                      in places where zero or more
                      arguments are expected
                      (unpack the elements)
*/

let userName = "Nahuel Genchi";
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

console.log(...userName);
console.log(...numbers);

let maximum = Math.max(...numbers);

console.log(`Math.max() of ...numbers = ${maximum}`);

let class1 = ["Spongebob", "Patrick", "Sandy"];
let class2 = ["Squidwards", "Mr.Krabs", "Plankton"];

// class1.push(class2);
class1.push(...class2);

console.log(class1);

console.log(...class1);