const refs = {
  input: document.querySelector("#name-input"),
  title: document.querySelector("h1"),
  text: document.querySelector("#name-output"),
};

refs.input.addEventListener("input", onInputChange);

function onInputChange(event) {
  // console.log(event.currentTarget.value);

  refs.text.textContent = event.currentTarget.value;
  if (refs.text.textContent === "") {
    refs.text.textContent = "Anonymous";
  }
}
