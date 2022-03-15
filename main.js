const calculate = {
  amountNumbers: document.querySelector("input#amount-numbers"),
  minNumber: document.querySelector("input#min-number"),
  maxNumber: document.querySelector("input#max-number"),
  numbers: document.querySelector("#numbers"),

  getValues() {
    return {
      minNumber: calculate.minNumber.value,
      maxNumber: calculate.maxNumber.value,
      amountNumbers: calculate.amountNumbers.value,
    };
  },

  clearResult() {
    calculate.numbers.innerHTML = "";
  },

  draw() {
    calculate.clearResult();
    let { minNumber, maxNumber, amountNumbers } = calculate.getValues();

    minNumber = Number(minNumber);
    maxNumber = Number(maxNumber);
    amountNumbers = Number(amountNumbers);

    for (let i = 1; i <= amountNumbers; i++) {
      resultNumber = Math.random() * (maxNumber - minNumber) + minNumber;

      let numberResult = document.createElement("p");
      numberResult.classList.add("number-result");

      if (i == 2) {
        numberResult.innerHTML = "";
      }

      calculate.numbers.appendChild(numberResult);
      numberResult.innerHTML = resultNumber.toFixed(0);
    }
  },
};
