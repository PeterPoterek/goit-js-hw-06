const changeColorButton = document.querySelector(".change-color");
const colorText = document.querySelector(".color");
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const handleColorChange = () => {
  const currentColor = getRandomHexColor();
  document.body.style.backgroundColor = currentColor;
  colorText.innerHTML = currentColor;
};

changeColorButton.addEventListener("click", handleColorChange);
