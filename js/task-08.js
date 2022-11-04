const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;

  const mail = formElements.email.value;
  const password = formElements.password.value;

  if (mail === "" || password === "") {
    return alert("Please fill in all the fields!");
  } else {
    const allData = {
      mail,
      password,
    };
    console.log(allData);
  }

  event.currentTarget.reset();
}
