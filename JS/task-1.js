// Напиши скрипт, який виконає наступні операції.
// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Вийде 'У списку 3 категорії.'.
// Для кожного елемента li.item в списку ul#categories, знайде і виведе в консоль текст заголовка елемента (тега h2) і кількість елементів в категорії (всіх вкладених в нього елементів li).

const listLengthRef = document.querySelectorAll("h2").length;
console.log(`У списку ${listLengthRef} категорії.`);

const elements = document.querySelectorAll(".item");
elements.forEach(function (element) {
  console.log(`Категорія: ${element.firstElementChild.textContent}`);
  console.log(
    `Кількість елементів: ${element.lastElementChild.children.length}`
  );
});
