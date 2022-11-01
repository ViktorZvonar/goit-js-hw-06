const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");

const onInputWrite = (event) => {
  inputEl.value.length === 0
    ? (spanEl.textContent = "Anon")
    : (spanEl.textContent = event.currentTarget.value);
};

inputEl.addEventListener("input", onInputWrite);
