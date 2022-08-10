const inputEl = document.querySelector("input#validation-input");

const valid = Number(inputEl.dataset.length);

function passwordLengthCheck(event) {
  if (event.currentTarget.value.length !== valid) {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  } else {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  }
}

inputEl.addEventListener("blur", passwordLengthCheck);
