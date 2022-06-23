const SUBMITBUTTON = document.querySelector("#submitButton"),
CBUTTON = document.querySelector("#cButton"),
FBUTTON = document.querySelector("#fButton"),
TEXTBOX = document.querySelector("#textBox"),
TEMPLABEL = document.querySelector("#tempLabel");

SUBMITBUTTON.addEventListener("click", function(){
    let temp = TEXTBOX.value;
    if (CBUTTON.checked) {
        TEMPLABEL.textContent = `${toCelsius(temp)}°C`;
    } else if (FBUTTON.checked) {
        TEMPLABEL.textContent = `${toFahrenheit(temp)}°F`;
    } else {
        TEMPLABEL.textContent = "Select an unit";
    };
});

function toCelsius(temperature) {
    return (temperature - 32) * (5/9);
};

function toFahrenheit(temperature) {
    return temperature * 9 / 5 + 32;
};