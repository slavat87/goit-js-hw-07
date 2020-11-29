// Напиши скрипт, який би при втраті фокуса на інпут,
// перевіряв його вміст на правильну кількість символів.
// Скільки символів має бути в інпут, вказується в його атрибуті data-length.
// Якщо введена відповідна кількість, то border інпут стає зеленим, якщо неправильне - червоним.
// Для додавання стилів, використовуй CSS-класи valid і invalid.

const input = document.querySelector("#validation-input");

input.addEventListener("input", () => {
  input.value = input.value.replace(/[^a-z0-9]/gi, ""); // дозволяється вводити тільки цифри і букви
});

input.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  // Якщо 0 символів - input сірий
  if (event.target.value.length === 0) {
    input.classList.remove("invalid");
    input.classList.remove("valid");
  } else if (
    event.currentTarget.value.length === Number(input.dataset.length)
  ) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
}

// document.getElementById("#validation-input").onblur = function () {
//   //   console.log(this.value.length);
//   if (this.getAttribute("data-length") > this.value.length) {
//     this.classList.remove("valid");
//     this.classList.add("invalid");
//   } else {
//     this.classList.remove("invalid");
//     this.classList.add("valid");
//   }
// };
