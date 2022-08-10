let counterValue = 0;
const clickDown = document.querySelector('button[data-action="decrement"]');
const clickUp = document.querySelector('button[data-action="increment"]');
const btnValue = document.querySelector("#value");

clickDown.addEventListener("click", () => {
  counterValue -= 1;
  btnValue.textContent = counterValue;
});

clickUp.addEventListener("click", () => {
  counterValue += 1;
  btnValue.textContent = counterValue;
});
