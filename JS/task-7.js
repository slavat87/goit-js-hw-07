// Напиши скрипт, який реагує на зміну значення input#font - size - control(подія input)
// і змінює інлайн - стиль span#text оновлюючи властивість font - size.
// В результаті при перетягуванні повзунка змінюватиметься розмір тексту.

const inputRangeRef = document.querySelector("#font-size-control");
const inputTextRef = document.querySelector("#text");
const handleInput = () => {
  inputTextRef.style.fontSize = `${inputRangeRef.value}px`;
};
inputRangeRef.addEventListener("input", handleInput);

// const input = document.getElementById("font-size-control");
// const span = document.getElementById("text");
// input.addEventListener("input", handleInputRange);
// function handleInputRange(event) {
//   span.style.fontSize = event.currentTarget.value + "px";
// }
