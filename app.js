const display = document.querySelector("#display");
const botones = document.querySelectorAll(".keys button");

botones.forEach((elem) => {
  elem.addEventListener("click", () => {
    const valorTecla = elem.textContent;

    if (valorTecla === "C") {
      display.value = "";
    } else if (valorTecla === "√") {
      display.value = Math.sqrt(display.value);
    } else if (valorTecla === "x²") {
      display.value = Math.pow(display.value, 2);
    } else if (valorTecla === "=") {
      display.value = eval(display.value);
    } else if (display.value.length < 8) {
      display.value += valorTecla;
    }
  });
});