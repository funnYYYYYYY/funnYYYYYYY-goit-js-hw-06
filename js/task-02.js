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
const newIngredients = document.createElement("ul");
newIngredients.id = "ingredients";
// console.log(newIngredients);

const stringsRef = ingredients.map((elements) => {
  const listRef = document.createElement("li");
  listRef.classList.add("item");
  listRef.textContent = elements;
  return listRef;
});

// console.log(stringsRef);

newIngredients.append(...stringsRef);
console.log(newIngredients);
