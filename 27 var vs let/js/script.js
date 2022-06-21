// variable scope = where a variable is accessible

// let = variables are limited to block scope {}
// var = variables are limited to a function(){}

// global variable = it is declared outside any function
// (if global, var will CHANGE the browser's window properties)

doSomething();

function doSomething() {
    for (let i = 1; i <= 3; i++) {
        console.log(`i = ${i}`);
    };
};

// console.log(i);