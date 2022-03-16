const calculate = {
  amountNumbers: document.querySelector("input#amount-numbers"),
  minNumber: document.querySelector("input#min-number"),
  maxNumber: document.querySelector("input#max-number"),
  numbers: document.querySelector("#numbers"),
  result: document.querySelector("#message-result"),

  getValues() {
    return {
      minNumber: calculate.minNumber.value,
      maxNumber: calculate.maxNumber.value,
      amountNumbers: calculate.amountNumbers.value,
    };
  },

  clearResult() {
    calculate.numbers.innerHTML = "";
    calculate.result.innerHTML = "";
  },

  clearInputs() {
    calculate.minNumber.value = "";
    calculate.maxNumber.value = "";
    calculate.amountNumbers.value = "";
    calculate.clearResult();
  },

  draw() {
    calculate.clearResult();
    let { minNumber, maxNumber, amountNumbers } = calculate.getValues();

    //add message result
    let messageResult = document.createElement("p");
    messageResult.classList.add("message-result");
    const message = "Os números sorteados foram:";
    calculate.result.appendChild(messageResult);
    messageResult.innerHTML = message;

    minNumber = Number(minNumber);
    maxNumber = Number(maxNumber);

    //add number result
    for (let i = 1; i <= amountNumbers; i++) {
      resultNumber = Math.random() * (maxNumber - minNumber) + minNumber;

      let numberResult = document.createElement("p");
      numberResult.classList.add("number-result");

      calculate.numbers.appendChild(numberResult);
      numberResult.innerHTML = resultNumber.toFixed(0);
    }

    //display grid
    if (amountNumbers > 7) {
      calculate.numbers.classList.add("grid");
    } else {
      calculate.numbers.classList.remove("grid");
    }
  },
};
