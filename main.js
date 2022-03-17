const App = {
  amountNumbers: document.querySelector("input#amount-numbers"),
  minNumber: document.querySelector("input#min-number"),
  maxNumber: document.querySelector("input#max-number"),
  numbers: document.querySelector("#numbers"),
  result: document.querySelector("#message-result"),

  getValues() {
    return {
      minNumber: App.minNumber.value,
      maxNumber: App.maxNumber.value,
      amountNumbers: App.amountNumbers.value,
    };
  },

  createResultMessageElement() {
    let messageResult = document.createElement("p");
    const message = "Os números sorteados foram:";

    messageResult.classList.add("message-result");
    App.result.appendChild(messageResult);
    messageResult.innerHTML = message;
  },

  createNumbersElement() {
    let numberResult = document.createElement("p");
    numberResult.classList.add("number-result");

    App.numbers.appendChild(numberResult);
    numberResult.innerHTML = resultNumber.toFixed(0);
  },

  calculateResultNumbers() {
    let { amountNumbers, maxNumber, minNumber } = App.getValues();
    minNumber = Number(minNumber);
    maxNumber = Number(maxNumber);

    for (let i = 1; i <= amountNumbers; i++) {
      resultNumber = Math.random() * (maxNumber - minNumber) + minNumber;
      App.createNumbersElement();
    }
  },

  draw() {
    Utils.clearResult();

    App.createResultMessageElement();

    App.calculateResultNumbers();

    Utils.transforToGridDisplay();
  },
};

const Utils = {
  clearResult() {
    App.numbers.innerHTML = "";
    App.result.innerHTML = "";
  },

  clearInputs() {
    App.minNumber.value = "";
    App.maxNumber.value = "";
    App.amountNumbers.value = "";
    Utils.clearResult();
  },

  transforToGridDisplay() {
    let { amountNumbers } = App.getValues();

    if (amountNumbers > 7) {
      App.numbers.classList.add("grid");
    } else {
      App.numbers.classList.remove("grid");
    }
  },
};
