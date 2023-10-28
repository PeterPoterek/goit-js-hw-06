const controls = document.querySelector("#controls");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[ data-destroy]");
const boxesConatiner = document.querySelector("#boxes");

let count = 0;
let baseStats = 30;
const step = 10;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const handleInputValueChange = (e) => {
  count = e.target.value;
};
const createBoxes = (amount) => {
  count = amount;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${baseStats}px`;
    box.style.height = `${baseStats}px`;
    box.style.backgroundColor = getRandomHexColor();

    boxesConatiner.append(box);
    baseStats += step;
  }
};

const destroyBoxes = () => {
  baseStats = 30;

  const boxesToDestroy = boxesConatiner.querySelectorAll("div");
  for (const box of boxesToDestroy) {
    box.remove();
  }
};

controls.addEventListener("change", handleInputValueChange);

createButton.addEventListener("click", () => createBoxes(count));
destroyButton.addEventListener("click", destroyBoxes);
