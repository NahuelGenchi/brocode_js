/*
    Gives us the ability to check more than 1 condition concurrently
    && AND (both conditions must be true)
    || OR (either condition can be true)
*/

let temperature = Number(prompt("Type the temperature:"));

// && AND
function and() {
    if (temperature > 0 && temperature < 30) {
        console.log(`Temperature: ${temperature}. The weather is good.`);
    } else {
        console.log(`Temperature: ${temperature}. The weather is bad.`);
    };
};

// || OR
function or() {
    if (temperature <= 0 || temperature >= 30) {
        console.log(`Temperature: ${temperature}. The weather is bad.`);
    } else {
        console.log(`Temperature: ${temperature}. The weather is good.`);
    };
};

or();
