const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const bunchOfIngredients = document.querySelector("#ingredients");

ingredients.map((ingredient) => {
  const liForIngredient = document.createElement("li");

  liForIngredient.classList.add("item");
  bunchOfIngredients.appendChild(liForIngredient);
  console.log(bunchOfIngredients);
  liForIngredient.textContent = ingredient;
});
