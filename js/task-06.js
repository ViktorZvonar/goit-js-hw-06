const refs = {
  inputEl: document.querySelector("#validation-input"),
};

const symbols = Number(refs.inputEl.dataset.length);
console.log(symbols);

refs.inputEl.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  console.log(event.currentTarget.value.length);

  if (event.currentTarget.value.length === symbols) {
    refs.inputEl.classList.add("valid");
    refs.inputEl.classList.remove("invalid");
  } else {
    refs.inputEl.classList.add("invalid");
    refs.inputEl.classList.remove("valid");
  }
}
