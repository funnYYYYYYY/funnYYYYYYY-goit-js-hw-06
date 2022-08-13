const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// Напиши скрипт, який для кожного елемента масиву ingredients:

// 1.Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredientsEl = document.querySelector("#ingredients");

const listTitle = document.createElement("h2");
listTitle.textContent = "Ingredients";
listTitle.classList.add(".title");
ingredientsEl.prepend(listTitle);

const arr = [];
ingredients.map((elem) => {
  const listElem = document.createElement("li");
  listElem.textContent = `${elem}`;
  listElem.classList.add(".item");
  return arr.push(listElem);
});

ingredientsEl.append(...arr);
