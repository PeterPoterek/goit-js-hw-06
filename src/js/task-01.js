const categories = document.querySelectorAll("#categories > li");

console.log(`Number of categories: ${categories.length}`);
categories.forEach((category) => {
  const title = category.querySelector("h2");
  console.log(`Category: ${title.innerHTML}`);

  const ul = category.querySelector("ul");
  console.log(`Elements: ${ul.children.length}`);
});
