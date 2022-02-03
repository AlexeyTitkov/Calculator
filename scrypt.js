let numbers = document.querySelectorAll(".number-button"),
  operationsBtn = document.querySelectorAll(".operator"),
  clearBtns = document.querySelectorAll(".clear-button"),
  decimalBtn = document.querySelector("#decimal"),
  display = document.querySelector(".display"),
  memoryCurrentNumber = 0,
  memoryNewNumber = false,
  memoryPendingOperation = "";

const numberPress = (number) => {
  if (memoryNewNumber) {
    display.value = number;
    memoryNewNumber = false;
  } else {
    if (display.value === "") {
      display.value = number;
    } else display.value += number;
  }
};

numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    numberPress(e.target.textContent);
  });
});

const operations = (op) => {
  let localOperationMemory = display.value;
  console.log(op);
  if (memoryNewNumber && memoryPendingOperation !== "=") {
    display.value = memoryCurrentNumber;
  } else {
    memoryNewNumber = true;
    if (memoryPendingOperation === "+") {
      memoryCurrentNumber += +localOperationMemory;
    } else if (memoryPendingOperation === "-") {
      memoryCurrentNumber -= +localOperationMemory;
    } else if (memoryPendingOperation === "×") {
      memoryCurrentNumber *= +localOperationMemory;
    } else if (memoryPendingOperation === "÷") {
      memoryCurrentNumber /= +localOperationMemory;
    } else {
      memoryCurrentNumber = +localOperationMemory;
    }
    display.value = memoryCurrentNumber;
    memoryPendingOperation = op;
  }
};

operationsBtn.forEach((oper) => {
  oper.addEventListener("click", (e) => {
    operations(e.target.textContent);
  });
});

const clearFunction = (op) => {
  if (op == "C") {
    display.value = "0";
    memoryNewNumber = true;
  } else if (op == "CE") {
    display.value = "0";
    memoryNewNumber = true;
    memoryCurrentNumber = "0";
    memoryPendingOperation = "0";
  }
};

clearBtns.forEach((op) => {
  op.addEventListener("click", (e) => {
    clearFunction(e.target.textContent);
  });
});

const decimal = () => {
let localDecimalMemory = display.value;
if (memoryNewNumber) {
  localDecimalMemory = "0.";
  memoryNewNumber = true;
} else {
  if (localDecimalMemory.indexOf(".") === -1) {
    localDecimalMemory += ".";
  }
  display.value = localDecimalMemory;
}
}

decimalBtn.addEventListener("click", decimal)

clearBtns.forEach((op) => {
  op.addEventListener("click", (e) => {
    clearFunction(e.target.textContent);
  });
});