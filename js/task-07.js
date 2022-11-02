const rangeInput = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");

rangeInput.addEventListener("input", onInputFontSizeChanged);

function onInputFontSizeChanged(event) {
  const fontSize = Number(event.currentTarget.value);
  console.log(fontSize);
  spanEl.style.fontSize = `${fontSize}px`;
}
