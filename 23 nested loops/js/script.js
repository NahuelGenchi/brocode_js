// nested loop = a loop inside of another loop

/*
for(let i = 1; i <= 3; i++) {
    console.log(`i = ${i}`);
    for(let j = 1; j <= 3; j++) {
        console.log(`j = ${j}`);
    };
};
*/

let rows = Number(prompt("Enter # of rows:")),
columns = Number(prompt("Enter # of columns:")),
symbol = prompt("Enter a symbol to use:");

const MYRECTANGLE = document.querySelector("#myRectangle");

for (let i = 1; i <= rows; i++) {
    console.log(`i = ${i}`);
    for (let j = 1; j <= columns; j++) {
        MYRECTANGLE.innerHTML += symbol;
    };
    MYRECTANGLE.innerHTML += "<br>";
};