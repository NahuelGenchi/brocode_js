/*
    ! NOT logical operator
    typically used to reverse a condition's boolean value
    true -> false   false -> true
*/

let temperature = 7;
let sunny = true;

console.log(`Temperature: ${temperature}°C`);

if (!(temperature > 10)) {
    console.log("Cold weather");
} else {
    console.log("Hot weather");
};

if (!sunny) {
    console.log("It's cloudy");
} else {
    console.log("It's sunny");
};