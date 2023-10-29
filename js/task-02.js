const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const list = document.querySelector("#ingredients");
const liArr = [];

ingredients.forEach((ingredient) => {
  const li = document.createElement("li");
  li.setAttribute("class", "item");
  li.innerHTML = ingredient;
  liArr.push(li);
});

list.append(...liArr);
