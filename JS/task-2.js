// Напиши скрипт, який для кожного елемента масиву ingredients створить окремий li,
// після чого вставить всі li за одну операцію в список ul.ingredients.
// Для створення DOM - вузлів використовуй document.createElement()

const ingredients = [
  "Картопля",
  "Гриби",
  "Часник",
  "Помідори",
  "Зелень",
  "Приправи",
];

// const ingredients2 = [
//   "Зелень",
//   "Гриби",
//   "Помідори",
//   "Часник",
//   "Приправи",
//   "Картопля",
// ];

const ulIngredientsRef = document.querySelector("#ingredients");

const creatingList = (ingridient) => {
  const createLiRef = document.createElement("li");
  createLiRef.textContent = ingridient;
  return createLiRef;
};

const ingredientsList = ingredients.map(creatingList);
ulIngredientsRef.append(...ingredientsList);

//
//
// const ulIngredientsRef = document.querySelector("#ingredients"); // створює ссилку на існуючий <ul id="ingredients></ul>

// const creatingList = (ingredient) => {
//   const createLiRef = document.createElement("li"); // створює ссилку на <li></li> в DOM
//   createLiRef.innerHTML = ingredient;

//   ulIngredientsRef.appendChild(createLiRef); // добавляє <li>(createLiRef) в <ul>(ulIngredientsRef) в HTML
//   return ulIngredientsRef;
// };

// ingredients.forEach((ingredient) => {
//   console.log(creatingList(ingredient));
// });
//
//
// setTimeout(() => { // по 3 сек змінює інгредієнти
//   ulIngredientsRef.innerHTML = "";
//   ingredients2.forEach((ingredient) => {
//     console.log(creatingList(ingredient));
//   });
// }, 3000);

