const inputEl = document.querySelector("input#font-size-control");
const spanEl = document.querySelector("span#text");
console.log(spanEl.textContent);
console.log(inputEl);

inputEl.addEventListener("input", changingTheFontSize);

function changingTheFontSize(event) {
  spanEl.style.fontSize = event.target.value + "px";
}
