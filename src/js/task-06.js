const validationInput = document.querySelector("#validation-input");

validationInput.addEventListener("blur", (e) => {
  const min = Number(e.target.dataset.length);
  const value = e.target.value.length;

  const className = value === min ? "valid" : "invalid";
  validationInput.setAttribute("class", className);
});
