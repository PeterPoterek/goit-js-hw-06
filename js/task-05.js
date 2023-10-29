const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

const handleNameChange = (e) => {
  if (e.target.value === "") {
    nameOutput.innerHTML = "Anonymous";
  } else {
    nameOutput.innerHTML = e.target.value;
  }
};
nameInput.addEventListener("input", handleNameChange);
