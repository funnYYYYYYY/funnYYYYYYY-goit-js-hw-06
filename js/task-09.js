function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// const widgetEl = document.querySelector(".widget");
// console.log(widgetEl);
const body = document.querySelector("body");

const buttonEl = document.querySelector("button");
console.log(buttonEl);

const text = document.querySelector(".color");

buttonEl.addEventListener("click", onChangingColorButton);

function onChangingColorButton() {
  const changeColor = (body.style.backgroundColor = getRandomHexColor());
  body.style.backgroundColor = getRandomHexColor();

  text.textContent = changeColor;
}
