const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsList = document.querySelector('#ingredients');
const ingredientsListItems = ingredients.map(item => {
  const ingridient = document.createElement("li")
  ingridient.classList.add(item);
  ingridient.textContent = item;
  console.log(ingridient);
  return ingridient;
})

ingredientsList.append(...ingredientsListItems);