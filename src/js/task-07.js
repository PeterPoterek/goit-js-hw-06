const fontSizeControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
const handleFontChange = (e) => {
  const fontSize = e.target.value;

  text.style.fontSize = `${fontSize}px`;
};
fontSizeControl.addEventListener("input", handleFontChange);
