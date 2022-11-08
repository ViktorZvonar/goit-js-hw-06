function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxesEl = document.querySelector("#boxes");
const counter = document.querySelector("#controls > input");
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");

const createBoxes = (amount) => {
  const arrayBoxes = [];
  for (let i = 0; i < amount; i += 1) {
    const divEl = document.createElement("div");
    const px = 30 + 10 * i;
    divEl.style.height = `${px}px`;
    divEl.style.width = `${px}px`;
    divEl.style.background = getRandomHexColor();

    arrayBoxes.push(divEl);
  }
  return arrayBoxes;
};

const fillWithBoxes = () => {
  let addedBoxes = createBoxes(counter.value);
  boxesEl.append(...addedBoxes);
};

const destroyBoxes = () => {
  boxesEl.innerHTML = "";
  console.log(boxesEl);
};

btnCreate.addEventListener("click", fillWithBoxes);

btnDestroy.addEventListener("click", destroyBoxes);
console.log(boxesEl);
