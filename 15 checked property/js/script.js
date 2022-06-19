const myButton = document.querySelector("#myButton"),
myCheckBox = document.querySelector("#myCheckBox"),
visaBtn = document.querySelector("#visaBtn"),
mastercardBtn = document.querySelector("#mastercardBtn"),
paypalBtn = document.querySelector("#paypalBtn");

myButton.addEventListener("click", submit);

function submit() {
    console.clear();
    if (myCheckBox.checked) {
        console.log("You're subscribed!");
    } else {
        console.log("You're not subscribed");
    };

    if (visaBtn.checked) {
        console.log("You selected Visa as the payment method.");
    } else if (mastercardBtn.checked) {
        console.log("You selected Mastercard as the payment method.");
    } else if (paypalBtn.checked) {
        console.log("You selected Paypal as the payment method.");
    } else {
        console.log("You must select a payment method!");
    };
};