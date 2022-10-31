const categoryItems = document.querySelectorAll(".item");
console.log("Number of categories: ", categoryItems.length);

categoryItems.forEach((element) => {
  const h2 = element.querySelector("h2");
  console.log("category: ", h2.textContent);
  const li = element.querySelectorAll("li");
  console.log("elements: ", li.length);
});
