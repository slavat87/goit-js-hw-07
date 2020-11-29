// Напиши скрипт який, при наборі тексту в інпут input#name - input(подія input),
// підставляє його поточне значення в span#name - output.
// якщо інпут порожній, в спані повинен відображатися рядок 'незнайомець'.

const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", (event) => {
  output.textContent =
    input.value === "" ? "незнайомець" : event.currentTarget.value;
});
