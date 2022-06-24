let fruits = ["banana", "apple", "orange", "mango"];

function fruitLoop() {
    for (let fruit of fruits) {
        console.log(fruit);
    };
    console.log("----------");
};

fruitLoop();
fruitLoop(fruits.sort());
fruitLoop(fruits.sort().reverse());