const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");

const onInputChange = (event) => {
  event.preventDefault();
  event.currentTarget.value.length === 0
    ? (spanEl.textContent = "Anon")
    : (spanEl.textContent = event.currentTarget.value);
};

inputEl.addEventListener("input", onInputChange);
