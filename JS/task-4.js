// Лічильник складається зі спана і кнопок, які повинні збільшувати і зменшувати значення лічильника на 1.
// Створи змінну counterValue в якій буде зберігається поточне значення  лічильника.
// Створи функції increment і decrement для збільшення і зменшення значення лічильника.
// Додай слухачі кліків на кнопки, виклики функцій та оновлення інтерфейсу

const wrap_button = {
  sub: document.querySelector("[data-action='increment']"),
  add: document.querySelector("[data-action='decrement']"),
  span: document.querySelector("#value"),
  wrapper: document.querySelector("#counter "),
};

let counterValue = 0;

const increment = () => {
  counterValue += 1;

  wrap_button.span.textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;

  wrap_button.span.textContent = counterValue;
};

wrap_button.sub.addEventListener("click", increment);
wrap_button.add.addEventListener("click", decrement);

// var counterValue = 0;

// function increment() {
//   counterValue += 1;
//   document.getElementById("value").innerHTML = counterValue;
// }

// function decrement() {
//   counterValue -= 1;
//   document.getElementById("value").innerHTML = counterValue;
// }
