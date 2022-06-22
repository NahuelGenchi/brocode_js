/*
    toLocaleString() = returns a string with a language
                      sensitive representation of this number
    
    number.toLocaleString(locale, {options});

    'locale' = specify that language (undefined = default set in browser)
    'options' = object with formatting options
*/

let myNum = Number(prompt("Type a number:"));

console.log(myNum);

let myNumEnglish = myNum.toLocaleString("en-US"); // US English
let myNumHindi = myNum.toLocaleString("hi-IN"); // India Hindi
let myNumGerman = myNum.toLocaleString("de-DE"); // Standard German

let myNumUsDollar = myNum.toLocaleString("en-us", {style: "currency", currency: "USD"});
let myNumInRupee = myNum.toLocaleString("hi-IN", {style: "currency", currency: "INR"});
let myNumDeEur = myNum.toLocaleString("de-DE", {style: "currency", currency: "EUR"});

let myNumPercent = myNum.toLocaleString(undefined, {style: "percent"});
let myNumUnitCelsius = myNum.toLocaleString(undefined, {style: "unit", unit: "celsius"});

function showNumber(system, myNum) {
    console.log(`${String(system)}: ${myNum}`);
};

showNumber("US English", myNumEnglish);
showNumber("India Hindi", myNumHindi);
showNumber("Stardard German", myNumGerman);

showNumber("US Dollar", myNumUsDollar);
showNumber("IN Rupee", myNumInRupee);
showNumber("Euro", myNumDeEur);

showNumber("Percent", myNumPercent);
showNumber("Celsius", myNumUnitCelsius);