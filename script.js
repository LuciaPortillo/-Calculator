window.addEventListener("load", () => {
  const resultInput = document.querySelector("#result");
  const multiplicationBtn = document.querySelector("#multiplication");
  const divisionBtn = document.querySelector("#division");
  const subtractionBtn = document.querySelector("#subtraction");
  const additionBtn = document.querySelector("#addition");
  const equalBtn = document.querySelector("#equal");
  const clearBtn = document.querySelector("#clear");
  console.log(resultInput);

  const addToResult = (value) => {
    resultInput.value += value;
  };

  const handleNumber = (number) => {
    addToResult(number);
  };

  const buttons = document.querySelectorAll(".number");

  buttons.forEach((btn) =>
    btn.addEventListener("click", () => handleNumber(btn.textContent))
  );

  equalBtn.addEventListener("click", () => {
    resultInput.value = eval(resultInput.value);
  });

  additionBtn.addEventListener("click", () => {
    addToResult("+");
  });

  multiplicationBtn.addEventListener("click", () => {
    addToResult("*");
  });

  divisionBtn.addEventListener("click", () => {
    addToResult("/");
  });

  subtractionBtn.addEventListener("click", () => {
    addToResult("-");
  });

  clearBtn.addEventListener("click", () => {
    resultInput.value = " ";
  });
});
