// return = returns a value back to the place where you invoked a function

let area, width, height;

width = Number(prompt("Enter width:"));
height = Number(prompt("Enter height:"));

area = getArea(width, height);

function getArea(width, height) {
    // let result = width * height;
    // return result;
    return width * height;
};

console.log(`The area is ${area}`);