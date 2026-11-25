console.log("Calculator JavaScript is connected!");
const display = document.querySelector("#display");
const buttons = document.querySelectorAll("[data-value]");
display.value = "0";
console.log("Display element:", display);
console.log("Number of buttons:", buttons.length);
console.log("Calculator JavaScript is connected!");

const display = document.querySelector("#display");
const buttons = document.querySelectorAll("[data-value]");

display.value = "0";

console.log("Display element:", display);
console.log("Number of buttons:", buttons.length);
console.log("Calculator JavaScript is connected!");

const display = document.querySelector("#display");
const buttons = document.querySelectorAll("[data-value]");

display.value = "0";
buttons.forEach(function(button) {

    button.addEventListener("click", function() {

        const value = button.dataset.value;

        if (value >= "0" && value <= "9") {

            if (display.value === "0") {
                display.value = value;
            } else {
                display.value += value;
            }

        }

    });

});

