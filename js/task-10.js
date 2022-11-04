function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxesEl = document.querySelector("#boxes");
const counter = document.querySelector("input");
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");

const getItem = () =>
  `<div style="background-color: ${getRandomHexColor()}; width: 30px; height: 30px;"> </div>`;

const items = ["item"];

const createBoxes = (amount) => {
  counter.value === amount;
  const boxes = items.map((item) => getItem(item)).join("");
  boxesEl.insertAdjacentHTML("beforeend", boxes);
  console.log(boxesEl);
};

const destroyBoxes = () => {
  boxesEl.innerHTML = "";
  console.log(boxesEl);
};

btnCreate.addEventListener("click", createBoxes);
btnDestroy.addEventListener("click", destroyBoxes);
console.log(boxesEl);
