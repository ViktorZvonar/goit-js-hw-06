const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const bunchOfIngredients = document.querySelector("#ingredients");

const lis = ingredients.map((ingredient) => {
  const liForIngredient = document.createElement("li");
  liForIngredient.classList.add("item");
  liForIngredient.textContent = ingredient;
  return liForIngredient;
});

bunchOfIngredients.append(...lis);
