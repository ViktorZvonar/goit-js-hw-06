const counterDiv = document.querySelector("#counter");
const valueEl = document.querySelector("#value");
const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');

const counter = {
  value: 0,
  increment() {
    this.value += 1;
  },
  decrement() {
    this.value -= 1;
  },
};

incrementBtn.addEventListener("click", () => {
  counter.increment();
  valueEl.textContent = counter.value;
});

decrementBtn.addEventListener("click", () => {
  counter.decrement();
  valueEl.textContent = counter.value;
});
