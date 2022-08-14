const form = document.querySelector("form");
console.log(form);

form.addEventListener("submit", handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault();

//   const formValue = {};
//   const {
//     elements: { email, password },
//   } = event.currentTarget;

//   if (email.value === "" || password.value === "") {
//     return alert("Всі поля мусять бути заповнені, заповніть їх будь ласка");
//   }

//   Object.entries(event).map(([key, value]) => [key, value]);

//   console.log(Object.entries(event).map(([key, value]) => [key, value]));
//   event.currentTarget.reset();
// }

// function handleSubmit(event) {
//   event.preventDefault();

//   const formElements = event.currentTarget.elements;

//   const email = formElements.email.value;
//   const password = formElements.password.value;

//   const formValue = {
//     email,
//     password,
//   };
//   if (email === "" || password === "") {
//     alert("Всі поля мусять бути заповнені, заповніть їх будь ласка");
//   }

//   console.log(formValue);
// }

function handleSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;

  const email = formElements.email.value;
  const password = formElements.password.value;

  const formValue = {
    email,
    password,
  };
  if (email === "" || password === "") {
    alert("Всі поля мусять бути заповнені, заповніть їх будь ласка");
  } else {
    console.log(formValue);
    event.currentTarget.reset();
  }

  // console.log(formValue);
}
