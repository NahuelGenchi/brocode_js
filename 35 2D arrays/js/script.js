// 2D array = an array of arrays

let fruits = ["bananas", "oranges", "mangoes"];
let vegetables = ["potatoes", "tomatoes", "carrots"];
let meat = ["eggs", "chicken", "fish"];

let cart = [fruits, vegetables, meat];

//console.log(cart);
/*
for (let i = 0; i < cart.length; i++) {
    console.log(cart[i]);
};
*/
for (let items of cart) {
    for (let item of items) {
        console.log(item);
    };
};

let eggs = cart[2][0];

console.log(eggs);