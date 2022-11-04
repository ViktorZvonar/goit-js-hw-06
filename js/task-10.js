function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxesEl = document.querySelector("#boxes");
const counter = document.querySelector("#controls > input");
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");

// ------- ПІДКАЖІТЬ БУДЬ ЛАСКА, Я НЕ МОЖУ РОЗІБРАТИСЯ
// --------НА ЧОМУ ПРОГАНЯТИ ЦИКЛ?

const items = [
  `<div style="background-color: ${getRandomHexColor()}; width: 30px; height: 30px;"> </div>`,
];

for (const item of items) {
  console.log(item);
}

const createBoxes = (amount) => {
  amount = counter.value;
  const boxes = [...items];
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
