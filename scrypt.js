let numbers = document.querySelectorAll(".number-button"),
    operationsBtn = document.querySelectorAll(".operator"),
    clearBtns = document.querySelectorAll(".clear-button"),
    decimalBtn = document.querySelector("#decimal"),
    result = document.querySelector("#result"),
    display = document.querySelector(".display");

const numberPress = (number) => {
    if (display.value === "") {
        display.value = number;
    } else display.value += number;
};

numbers.forEach((number) => {
    number.addEventListener("click", (e) => {
        numberPress(e.target.textContent);
    });
});
